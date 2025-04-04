import mongoose from 'mongoose';

// Récupère l'URI de connexion à ta base MongoDB Atlas dans .env nommé MONGO_URI
const uri = 'mongodb+srv://cengokillian:NWwHDYM5mlFcSZPV@cluster0.ybc6vbk.mongodb.net/community-app?retryWrites=true&w=majority';

// Schéma compatible avec ton script
const signalementSchema = new mongoose.Schema({
  titre: String,
  description: String,
  photo: String,
  categorie: String,
  localisation: {
    type: { type: String, enum: ['Point'], required: true },
    coordinates: { type: [Number], required: true }
  },
  date_signalement: Date,
  statut: String
});

const Signalement = mongoose.model('Signalement', signalementSchema);

async function initDB() {
  try {
    await mongoose.connect(uri);
    console.log('✅ Connecté à MongoDB Atlas');

    // Supprimer les anciens si besoin
    await Signalement.deleteMany({});

    // Insérer les données
    await Signalement.insertMany([
      {
        titre: "Nid-de-poule dangereux",
        description: "Large nid-de-poule au milieu de la route, plusieurs véhicules l'ont déjà heurté",
        photo: "https://storage.citywatch.com/photos/pothole123.jpg",
        categorie: "voirie",
        localisation: {
          type: "Point",
          coordinates: [-73.9857, 40.7484]
        },
        date_signalement: new Date("2025-04-01T08:30:00Z"),
        statut: "en attente"
      },
      {
        titre: "Lampadaire cassé",
        description: "Lampadaire non fonctionnel depuis 3 jours, zone très sombre la nuit",
        photo: "https://storage.citywatch.com/photos/streetlight456.jpg",
        categorie: "éclairage",
        localisation: {
          type: "Point",
          coordinates: [-73.9785, 40.7614]
        },
        date_signalement: new Date("2025-04-02T19:15:00Z"),
        statut: "en cours"
      },
      {
        titre: "Graffiti offensant",
        description: "Graffiti à caractère haineux sur le mur de l'école primaire",
        photo: "https://storage.citywatch.com/photos/graffiti789.jpg",
        categorie: "propreté",
        localisation: {
          type: "Point",
          coordinates: [-73.9665, 40.7812]
        },
        date_signalement: new Date("2025-04-03T14:20:00Z"),
        statut: "en attente"
      }
    ]);

    // Index géospatial
    await Signalement.collection.createIndex({ localisation: "2dsphere" });

    console.log("✅ Base initialisée avec succès !");
    process.exit();
  } catch (err) {
    console.error("❌ Erreur d'initialisation :", err);
    process.exit(1);
  }
}

initDB();