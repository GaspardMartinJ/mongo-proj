// Sélection/Création de la base de données 'service_livraison'
db = db.getSiblingDB('service_livraison');

// Création de la collection des livreurs
db.createCollection('livreurs');
db.livreurs.insertMany([
    // Note : Les noms des livreurs n'ont pas été modifiés car la demande concernait spécifiquement les vendeurs/acheteurs.
    { _id: 1, nom: 'Alice Johnson', vehicule: 'Vélo électrique', disponible: true },
    { _id: 2, nom: 'Bob Smith', vehicule: 'Scooter électrique', disponible: true },
    { _id: 3, nom: 'Charlie Brown', vehicule: 'Skateboard électrique', disponible: false }
]);

// Création de la collection des vendeurs
db.createCollection('vendeurs');
db.vendeurs.insertMany([
    // Vendeurs existants traduits
    { _id: 1, nom: 'Épiciers Verts', emplacement: 'Centre-ville', note: 4.5 },
    { _id: 2, nom: 'Articles Écologiques', emplacement: 'Quartier Nord', note: 4.8 }, // "Uptown" traduit par "Quartier Nord" pour varier
    { _id: 3, nom: 'Marché Bio', emplacement: 'Banlieue', note: 4.2 },
    // Nouveaux vendeurs hommes avec noms américains
    { _id: 4, nom: 'John Miller Groceries', emplacement: 'Centre-ville', note: 4.3 },
    { _id: 5, nom: 'Robert Davis Goods', emplacement: 'Banlieue', note: 4.0 }
]);

// Création de la collection des acheteurs
db.createCollection('acheteurs');
db.acheteurs.insertMany([
    // Acheteurs existants (noms conservés, ajout d'hommes ci-dessous)
    { _id: 1, nom: 'Emma White', emplacement: 'Centre-ville', historique_achats: [1, 2] },
    { _id: 2, nom: 'Frank Black', emplacement: 'Quartier Nord', historique_achats: [2, 3] }, // Nom masculin déjà présent
    { _id: 3, nom: 'Grace Green', emplacement: 'Banlieue', historique_achats: [1, 3] },
    // Nouveaux acheteurs hommes avec noms américains
    { _id: 4, nom: 'David Smith', emplacement: 'Centre-ville', historique_achats: [4, 1] }, // Achat chez le nouveau vendeur 4 et l'ancien 1
    { _id: 5, nom: 'Michael Jones', emplacement: 'Banlieue', historique_achats: [5, 3] }  // Achat chez le nouveau vendeur 5 et l'ancien 3
]);

// Création de la collection des commandes
db.createCollection('commandes');
db.commandes.insertMany([
    // Commandes existantes mises à jour avec les champs traduits
    { _id: 1, acheteur_id: 1, vendeur_id: 1, livreur_id: 1, articles: [{ produit_id: 1, quantite: 2 }], statut: 'Livré' },
    { _id: 2, acheteur_id: 2, vendeur_id: 2, livreur_id: 2, articles: [{ produit_id: 2, quantite: 1 }], statut: 'En attente' },
    { _id: 3, acheteur_id: 3, vendeur_id: 3, livreur_id: 3, articles: [{ produit_id: 3, quantite: 3 }], statut: 'En transit' },
    // Ajout de commandes pour les nouveaux acheteurs/vendeurs (optionnel, pour la cohérence)
    { _id: 4, acheteur_id: 4, vendeur_id: 4, livreur_id: 1, articles: [{ produit_id: 4, quantite: 5 }], statut: 'En attente' }, // Suppose un produit_id 4
    { _id: 5, acheteur_id: 5, vendeur_id: 5, livreur_id: 2, articles: [{ produit_id: 5, quantite: 1 }], statut: 'Livré' }      // Suppose un produit_id 5
]);

// Création de la collection des produits (anciennement items)
db.createCollection('produits');
db.produits.insertMany([
    // Produits existants mis à jour avec les champs traduits
    { _id: 1, nom: 'Pommes Bio', quantite: 50, vendeur_id: 1 },
    { _id: 2, nom: 'Savon Écologique', quantite: 100, vendeur_id: 2 },
    { _id: 3, nom: 'Sacs Réutilisables', quantite: 75, vendeur_id: 3 },
    // Ajout de produits pour les nouveaux vendeurs (nécessaire si on ajoute des commandes pour eux)
    { _id: 4, nom: 'Pain Complet Artisanal', quantite: 30, vendeur_id: 4 },
    { _id: 5, nom: 'Détergent Écologique Recharge', quantite: 60, vendeur_id: 5 }
]);

// Message final en français correct
print("Base de données 'service_livraison' initialisée avec succès !");