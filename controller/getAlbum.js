
const { MongoClient } = require('mongodb');

module.exports.getAlbum = async function(req , res){
 const id = req.headers['id'];
var documents;

// Connection URL and Database Name
const url = process.env.URL; // replace with your MongoDB connection string
const dbName = 'test';
const collectionName = 'albums';

try {
    // Connect to MongoDB
    const client = await MongoClient.connect(url);
    console.log('Connected to MongoDB');

    // Select the database and collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Query the collection to get data
     documents = await collection.find({albumId:id}).toArray();

    // Print the retrieved documents
    console.log('Retrieved documents:');
   // console.log(documents);
  } catch (error) {
    console.error('Error:', error);
  } 

return res.json({'Data':documents})
}

