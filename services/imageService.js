const { supabase } = require('../config/supabaseClient');
const path = require('path');

// Nom du bucket que votre collaborateur aura créé
const BUCKET_NAME = 'citywatch-images';

async function uploadImage(file, fileName) {
  try {
    const uniqueFileName = `${Date.now()}_${fileName}`;
    
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(uniqueFileName, file, {
        cacheControl: '3600',
        upsert: false,
        contentType: file.mimetype
      });
      
    if (error) throw error;
    
    // Récupérer l'URL publique
    const { data: { publicUrl } } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(uniqueFileName);
      
    return publicUrl;
  } catch (error) {
    console.error('Erreur upload image:', error);
    throw error;
  }
}

module.exports = {
  uploadImage
};