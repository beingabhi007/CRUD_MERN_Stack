const express = require('express') 
const router = express.Router();

const Item = require('../../modals/Item');

// @route GET api/items 
// @desc GET ALL items 
// @access publically since there is no authentication

// To get all the entries fro DB
router.get('/', (req,res) => {
    Item.find()
    .sort({ date: -1})
    .then(items => res.json((items)))
}); 

// POST api/items 
// Create a post 
// @access is public 

router.post('/', (req,res) => {
    const newItem =new Item({
        name: req.body.name
    })
    
    newItem.save().then( (item) => res.json(item))
}); 

// Delete route 
// To delete an item from DB

router.delete('/:id', (req,res) => {
     
     Item.findById(req.params.id) 
     .then( item => item.remove().then( () => res.json({
         success: true
     })))
     .catch( err => res.status(404).json({ success: false}))

})

module.exports = router;