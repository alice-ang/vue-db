const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();


// GET tasks
router.get('/', async (req, res) => {
    const tasks = await loadTaskCollection();
    res.send(await tasks.find({}).toArray());
  });


// ADD task
router.post('/', async (req, res)=>{
    const tasks = await loadTaskCollection();
    await tasks.insertOne({
        text: req.body.text,
        priority: req.body.priority,
        status: req.body.status,
        createdAt: new Date()
    });
    res.status(201).send();
});

// Delete task
router.delete('/:id', async (req, res) => {
    const tasks = await loadTaskCollection();
    await tasks.deleteOne({_id: new mongodb.ObjectID(req.params.id)});

    res.status(200).send();
});

async function loadTaskCollection() {
    const client = await mongodb.MongoClient.connect(
      'mongodb+srv://admin:8oUk9TBD@cluster0-xmesc.mongodb.net/test?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true 
      }
    );
  
    return client.db('vue_express').collection('tasks');
  }

module.exports = router;

