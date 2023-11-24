const axios = require('axios');
const mongoose = require('mongoose');
 require('dotenv').config();

module.exports.insertAlbum = async function(req , res){
const MONGODB_URI = process.env.URL;
const {ids} = req.body;

try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Make a request to the third-party API
    const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/albums/',
        params: {
          ids,
        },
        headers: {
          'X-RapidAPI-Key': 'b86de6895fmshecbcf2cedb82a32p1f5608jsne7bb38ed9ef1',
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
      };
      console.log('Music data');
    
          const response = await axios.request(options);
        //   console.log(response.data);
        //    allData = [response.data];

    // Assuming the API response is a dynamic JSON object
    const dataToStore =  response.data;

    const newData = {
      ...dataToStore,
      albumId: ids,
    };

    // Create a generic schema for storing dynamic data
    const DynamicDataSchema = new mongoose.Schema({}, { strict: false });
    const DynamicDataModel = mongoose.model('Album', DynamicDataSchema);

    // Save the data to MongoDB
    const data = await DynamicDataModel.create(newData);
    console.log(data);
    console.log('Data stored in MongoDB');

    return res.status(200).json('Data stored in MongoDB')
  } catch (error) {
    console.error('Error:', error);
    return res.json(error)
  } finally {
    // Disconnect from MongoDB
    mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}