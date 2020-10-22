const express = require('express') 
const mongoose = require('mongoose') 
const bodyParser = require('body-parser') 

const items = require('./routes/api/items');
const app = express(); 

app.use(bodyParser.json()); 

const db = 'mongodb+srv://shoppinglist:shoppinglist1289@cluster0.z0cuh.mongodb.net/shoppinglist?retryWrites=true&w=majority';  

mongoose.connect(db) 
.then( () => console.log('Connected to DB')) 
.catch( err => console.log(err));  

// User routes 

app.use('/api/items',items);

const PORT = 5000;


app.listen(PORT, () => console.log(`Server started on ${PORT}`));

