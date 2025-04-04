// filepath: c:\Users\gaspa\Documents\proj_b4\node\mongo-proj\init-mongo.js
db = db.getSiblingDB('testdb'); // Replace 'testdb' with your desired database name

db.createCollection('items'); // Optional: Create a collection
db.items.insertOne({ name: 'Sample Item', quantity: 10 }); // Optional: Insert sample data