import { supabase }from './supabaseClient';
import { v4 as uuidv4 } from 'uuid';

async function uploadToSupabase(file: Express.Multer.File): Promise<string> {
  console.log("Début de l'upload...");

  if (!file) {
    console.error("Erreur: Aucun fichier fourni");
    throw new Error("Aucun fichier fourni");
  }

  console.log("Fichier reçu:", file.originalname);

  const fileExt = file.originalname.split('.').pop();
  const fileName = `${uuidv4()}.${fileExt}`;
  const filePath = `signalements/${fileName}`;

  console.log("Chemin de fichier généré:", filePath);

  const { data, error } = await supabase.storage
    .from('images')  // Assure-toi que le nom du bucket est bien "images"
    .upload(filePath, file.buffer, {
      contentType: file.mimetype,
      upsert: false,
    });

  console.log("Supabase upload response:", { data, error });

  if (error) {
    console.error("Erreur lors de l'upload:", error);
    throw new Error("Échec de l'upload");
  }

  console.log("Upload réussi, récupération de l'URL...");

  const { data: publicUrlData } = supabase.storage
    .from('images')  // Vérifie bien le nom du bucket
    .getPublicUrl(filePath);

  console.log("Public URL générée:", publicUrlData.publicUrl);
  return publicUrlData.publicUrl;
}

export default uploadToSupabase;
