import { Request, Response } from 'express';
import EnvironmentalData from '../models/environmentalData';

export async function addEnvironmentalData(req: Request, res: Response) {
  const { type, value, longitude, latitude } = req.body;

  try {
    await EnvironmentalData.create({
      type,
      value,
      location: {
        type: 'Point',
        coordinates: [parseFloat(longitude), parseFloat(latitude)],
      },
    });
    res.redirect('/environmental');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving environmental data');
  }
}

export async function getEnvironmentalData(req: Request, res: Response) {
  const data = await EnvironmentalData.find({});
  res.render('environmental/index', { data });
}