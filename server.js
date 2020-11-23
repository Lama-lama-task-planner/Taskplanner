
const express = require('express');

const bodyParser = require('body-parser')
const server = express();
const pg = require('pg')
server.use(bodyParser.json());
server.use(express.static('public'));

const {
    Router
  } = require('express');




  let task = [];

//create a task 

  server.get('/task',async (req, res) =>{
      res.send( "task planner");

  });

  //add a new task 
  
  server.post("/task", async (req,res) =>{
      const task = new task ({
          title : req.body.title,
         description: req.body.description
      });

      
     
    });

    // get taskS  hente data 

    server.get ("/task", async (req,res) =>{
        try{
            const task = await task.findByid(req.params.taskId);
            res.json(task);

        } catch (err){
            res.json({message:err});
        }

        });
    
  // remove an existing task 

  server.delete ('/task:id', async (req,res) => {
      try {
      task.removedtask = await task.remove({_id:req.params.taskId});
      res.json(removetask);
       
        }catch (err){
         res.json({message:err});
        }

        });



  // update a task 

  server.put ('/task', async (req,res) => {
      try {
          const updatedtask = await task.updateone(
              { _id: req.params.taskId },
              {$set: {title : req.body.title}}
          );
          res.json(updatedtask);
          
        } catch ( err) {
            res.json({message:err});
        }
    
      });

    server.post("/users/:userId", (req, res , next) =>{
        //console.table(users);  - lager tabell i konsollen etter arrayet er laget for users.

        //sjekker om vi har kontakt med klient-server lokalt
        res.status(200).json({msg: "Server contact made"});
    
        
    
    });
    
    server.get("/users/:userId", (req, res, next) => {
        //sjekker om vi har kontakt med klient-server lokalt
        res.status(200).end();
    
    });

  
// start server


const PORT = process.env.PORT || 8080;
server.listen(PORT,() => console.log("running on $ {PORT}"));