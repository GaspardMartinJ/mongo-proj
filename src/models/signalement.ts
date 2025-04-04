import mongoose from 'mongoose';

const SignalementSchema = new mongoose.Schema({
  titre: String,
  description: String,
  photo: String,
  categorie: String,
  localisation: {
    type: { type: String, enum: ['Point'], required: true },
    coordonnees: { type: [Number], required: true }, // [longitude, latitude]
  },
  date_signalement: { type: Date, default: Date.now },
  statut: { type: String, enum: ['en attente', 'en cours', 'résolu'], default: 'en attente' }
});

SignalementSchema.index({ localisation: '2dsphere' });

const Signalement = mongoose.model('Signalement', SignalementSchema);
export default Signalement;