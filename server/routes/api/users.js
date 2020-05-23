const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();


// GET users
router.get('/', async (req, res) => {
    const users = await loadUserCollection();
    res.send(await users.find({}).toArray());
  });


// ADD users
router.post('/', async (req, res)=>{
    const users = await loadUserCollection();
    await users.insertOne({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        createdAt: new Date()
    });
    res.status(201).send();
});

/*update
router.patch('/:id', async (req, res) => {
    const users = await loadUserCollection();
    await users.updateOne({_id: new mongodb.ObjectID(req.params.id)});

    res.status(200).send();
});
*/

// Delete user
router.delete('/:id', async (req, res) => {
    const users = await loadUserCollection();
    await users.deleteOne({_id: new mongodb.ObjectID(req.params.id)});

    res.status(200).send();
});

async function loadUserCollection() {
    const client = await mongodb.MongoClient.connect(
      'mongodb+srv://admin:8oUk9TBD@cluster0-xmesc.mongodb.net/test?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true 
      }
    );
  
    return client.db('vue_express').collection('posts');
  }

module.exports = router;

