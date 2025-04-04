db = db.getSiblingDB('points_geolocalises');

// Création de la collection de points gps
db.createCollection('signalements');

// Pour les photos, il est préférable de stocker des URLs pointant vers un service
// de stockage externe (AWS S3, Google Cloud Storage, etc.) plutôt que de stocker
// directement les images dans MongoDB pour des raisons de performance

db.signalements.insertMany([
  {
    titre: "Nid-de-poule dangereux",
    description: "Large nid-de-poule au milieu de la route, plusieurs véhicules l'ont déjà heurté",
    photo: "https://storage.citywatch.com/photos/pothole123.jpg",
    categorie: "voirie",
    localisation: {
      type: "Point",
      coordinates: [-73.9857, 40.7484] // [longitude, latitude]
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

// Création d'un index géospatial pour des requêtes de proximité efficaces
db.signalements.createIndex({ localisation: "2dsphere" });

// Message final en français correct
print("Base de données 'points_geolocalises' initialisée avec 3 signalements");