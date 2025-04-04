import { Request, Response } from 'express';
import Signalement from '../models/signalement';
const { uploadToSupabase } = require('../utils/uploadToSupabase.js');

export async function listSignalements(req: Request, res: Response) {
  const signalements = await Signalement.find({});
  res.render('signalements/index', { signalements });
}

export async function showForm(req: Request, res: Response) {
  res.render('signalements/formulaire');
}

export async function createSignalement(req: Request, res: Response) {
  const { titre, description, categorie, longitude, latitude, statut } = req.body;
  const file = req.file;
  console.log('Fichier reçu :', req.file);

  try {
    const photoUrl = await uploadToSupabase(file);

    await Signalement.create({
      titre,
      description,
      photo: photoUrl,
      categorie,
      statut,
      localisation: {
        type: 'Point',
        coordonnees: [parseFloat(longitude), parseFloat(latitude)]
      },
      date_signalement: new Date()
    });

    res.redirect('/signalements');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erreur lors de la création du signalement');
  }
}

export async function deleteSignalement(req: Request, res: Response) {
  await Signalement.findByIdAndDelete(req.params.id);
  res.redirect('/signalements');
}