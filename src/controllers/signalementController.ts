import { Request, Response } from 'express';
import Signalement from '../models/signalement';

export async function listSignalements(req: Request, res: Response) {
  const signalements = await Signalement.find({});
  res.render('signalements/index', { signalements });
}

export async function showForm(req: Request, res: Response) {
  res.render('signalements/formulaire');
}

export async function createSignalement(req: Request, res: Response) {
  const { titre, description, photo, categorie, longitude, latitude, statut } = req.body;

  await Signalement.create({
    titre,
    description,
    photo,
    categorie,
    statut,
    localisation: {
      type: 'Point',
      coordonnees: [parseFloat(longitude), parseFloat(latitude)]
    },
    date_signalement: new Date()
  });

  res.redirect('/signalements');
}

export async function deleteSignalement(req: Request, res: Response) {
  await Signalement.findByIdAndDelete(req.params.id);
  res.redirect('/signalements');
}