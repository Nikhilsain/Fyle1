const express = require("express"),
    app = express();
    
app.use(function (req, res, next) {
    
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');
      
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
      
      //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      
        // Pass to next layer of middleware
        next();
     });



const { json } = require("express");
 //const pool = require("./db");
const Pool = require("pg").Pool;


const pool = new Pool({
    user: process.env.POSTGRESQL_ADDON_USER,
    password:process.env.POSTGRESQL_ADDON_PASSWORD,
    database:process.env.POSTGRESQL_ADDON_DB,
    host:process.env.POSTGRESQL_ADDON_HOST,
    port:process.env.POSTGRESQL_ADDON_PORT,
});
 
 
 app.get("/api/branches",async(req,res)=>{
    
     try{
        let query = req.query.q.toUpperCase();
        let limit = req.query.limit;
        let offset = req.query.offset;
        let todo;
        if(req.query.limit){
         todo = await pool.query("SELECT * FROM branches WHERE address LIKE $1 OR " 
                                + "branch LIKE $1 OR city LIKE $1 OR district LIKE $1 OR "
                                +"state LIKE $1 ORDER BY ifsc LIMIT $2 OFFSET $3",['%'+ query + '%',limit,offset]);
        }
        else {
             todo = await pool.query("SELECT * FROM branches WHERE address LIKE $1 OR " 
            + "branch LIKE $1 OR city LIKE $1 OR district LIKE $1 OR "
            +"state LIKE $1 ORDER BY ifsc OFFSET $2",['%'+ query + '%',offset]);
        }
       // console.log(todo.rows.length);
       
        res.json((todo.rows));
        
     }
     catch(err){
         console.error(err.message);

     }
 })

 app.get("/api/branches/autocomplete",async(req,res)=>{
    try{
       let branch = req.query.q.toUpperCase();
       let limit = req.query.limit;
       let offset = req.query.offset;
       let todo;
       if(req.query.limit){
       todo = await pool.query("SELECT * FROM branches WHERE branch LIKE $1 "
                                     + "ORDER BY ifsc LIMIT $2 OFFSET $3",['%'+ branch + '%',limit,offset]);
       }
       else{
        todo = await pool.query("SELECT * FROM branches WHERE branch LIKE $1 "
        + "ORDER BY ifsc OFFSET $2",['%'+ branch + '%',offset]);
       }
      
       res.json(todo.rows);
       
    }
    catch(err){
        console.error(err.message);

    }
})
  app.listen(process.env.PORT || 3000,process.env.IP,function(){
    console.log("this server strats");
})
