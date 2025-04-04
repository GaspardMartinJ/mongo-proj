const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize Express app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = 'mongodb://root:example@localhost:27017/service_livraison?authSource=admin';
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Define Mongoose schemas and models
const livreurSchema = new mongoose.Schema({
  nom: String,
  vehicule: String,
  disponible: Boolean,
});
const vendeurSchema = new mongoose.Schema({
  nom: String,
  emplacement: String,
  note: Number,
});
const acheteurSchema = new mongoose.Schema({
  nom: String,
  emplacement: String,
  historique_achats: [Number],
});
const commandeSchema = new mongoose.Schema({
  acheteur_id: Number,
  vendeur_id: Number,
  livreur_id: Number,
  articles: [{ produit_id: Number, quantite: Number }],
  statut: String,
});
const produitSchema = new mongoose.Schema({
  nom: String,
  quantite: Number,
  vendeur_id: Number,
});

const Livreur = mongoose.model('Livreur', livreurSchema);
const Vendeur = mongoose.model('Vendeur', vendeurSchema);
const Acheteur = mongoose.model('Acheteur', acheteurSchema);
const Commande = mongoose.model('Commande', commandeSchema);
const Produit = mongoose.model('Produit', produitSchema);

// Routes
// Livreurs
app.get('/livreurs', async (req, res) => {
  try {
    const livreurs = await Livreur.find();
    res.json(livreurs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch livreurs' });
  }
});

app.post('/livreurs', async (req, res) => {
  try {
    const livreur = new Livreur(req.body);
    const savedLivreur = await livreur.save();
    res.status(201).json(savedLivreur);
  } catch (err) {
    res.status(400).json({ error: 'Failed to add livreur' });
  }
});

// Vendeurs
app.get('/vendeurs', async (req, res) => {
  try {
    const vendeurs = await Vendeur.find();
    res.json(vendeurs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch vendeurs' });
  }
});

app.post('/vendeurs', async (req, res) => {
  try {
    const vendeur = new Vendeur(req.body);
    const savedVendeur = await vendeur.save();
    res.status(201).json(savedVendeur);
  } catch (err) {
    res.status(400).json({ error: 'Failed to add vendeur' });
  }
});

// Acheteurs
app.get('/acheteurs', async (req, res) => {
  try {
    const acheteurs = await Acheteur.find();
    res.json(acheteurs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch acheteurs' });
  }
});

app.post('/acheteurs', async (req, res) => {
  try {
    const acheteur = new Acheteur(req.body);
    const savedAcheteur = await acheteur.save();
    res.status(201).json(savedAcheteur);
  } catch (err) {
    res.status(400).json({ error: 'Failed to add acheteur' });
  }
});

// Commandes
app.get('/commandes', async (req, res) => {
  try {
    const commandes = await Commande.find();
    res.json(commandes);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch commandes' });
  }
});

app.post('/commandes', async (req, res) => {
  try {
    const commande = new Commande(req.body);
    const savedCommande = await commande.save();
    res.status(201).json(savedCommande);
  } catch (err) {
    res.status(400).json({ error: 'Failed to add commande' });
  }
});

// Produits
app.get('/produits', async (req, res) => {
  try {
    const produits = await Produit.find();
    res.json(produits);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch produits' });
  }
});

app.post('/produits', async (req, res) => {
  try {
    const produit = new Produit(req.body);
    const savedProduit = await produit.save();
    res.status(201).json(savedProduit);
  } catch (err) {
    res.status(400).json({ error: 'Failed to add produit' });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});