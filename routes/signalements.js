const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadMiddleware');
const { uploadImage } = require('../services/imageService');

// Route pour créer un nouveau signalement avec image
router.post('/', upload.single('photo'), async (req, res) => {
  try {
    let photoUrl = null;
    
    // Upload image si présente
    if (req.file) {
      photoUrl = await uploadImage(req.file.buffer, req.file.originalname);
    }
    
    // Créer le signalement dans MongoDB avec l'URL retournée
    const nouveauSignalement = {
      titre: req.body.titre,
      description: req.body.description,
      photo: photoUrl,
      // Autres données...
    };
    
    // Sauvegarde dans MongoDB (code à adapter selon votre structure)
    // const resultat = await db.collection('signalements').insertOne(nouveauSignalement);
    
    res.status(201).json({ message: 'Signalement créé avec succès', data: nouveauSignalement });
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ message: 'Erreur lors de la création du signalement' });
  }
});

module.exports = router;