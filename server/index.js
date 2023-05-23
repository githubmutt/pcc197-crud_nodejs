
const express= require("express")
const bodyParser = require("body-parser")
const mysql = require("mysql")
const cors = require("cors")
const app = express()

/*
const db = mysql.createPool(
  {
    host: "localhost",
    user: "root",
    password: "tomato1349",
    database: "crud"

  }
)
*/
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "tomato1349",
    database: "crud"

  }
)

app.use(cors())
app.use(express.json() )
app.use( bodyParser.urlencoded({ extended: true }))

app.get('/api/members', (req,res)=>{

   db.connect(

     function(err){
        if(err) throw err


     }




   )
/*      
     const sql = "select * from member"
     db.query( sql ,(err,result) => {

           res.send( result )

     })
*/
  res.send("<b>hello world!</b>")



  })

app.post("api/insert" , (req,res)=>{

     const fname = req.body.fname
     const lname = req.body.lname
     const email = req.body.email
     const password = req.body.password
     console.log("/api/insert works")
//     res.send("/api/insert works:" + fname )
//     console.log("api/insert:" + fname + " " + lname + " " + email + " " + password )
      const sqlInsert= "insert into member(fname,lname,email,password) values('?','?','?','?')"

      db.query( sqlInsert, [fname,lname,email,password] , (err,result)=>{

             console.log( err)

     })

})


function quotes(_v){
  return '"' + _v + '"'

}
// Create (CRUD)
app.post("/api/create" , (req,res)=>{

    const fname = req.body.fname
    const lname = req.body.lname
    const email = req.body.email
    const password = req.body.password
    
    let sql = "insert into member(fname,lname,email,password) values("
    sql += quotes( fname) + ','
    sql += quotes( lname)+ ','
    sql += quotes( email) + ','
    sql += quotes( password) + ')'

    
    db.query( sql ,[fname,lname,email,password], (err,result) =>
    {
          console.log("sql inserted: ") 
          console.log( sql )
          

          console.log('inserted: ' + fname + "  " + lname + "  " + email + "  "+ password) 

     })
    
    res.send("/api/post works"  + req.body.fname )

})

//  Read   (CRUD)
app.get("/api/read" , (req,res) => {

    const sql = "select * from member order by lname asc"
    db.query(sql, (err,result) => {

        console.log( result )
        res.send( result )  
    })


})


// Update (CRUD)
app.post("/api/update" , (req,res)=>{
 
  const fname = req.body.fname
  const lname = req.body.lname
  const email = req.body.email
  const password = req.body.password


  let sql = 'update member set '
  sql += "fname = " + quotes(fname) + ","
  sql += "lname=" + quotes(lname) + ","
  sql += "email=" + quotes(email) + ","
  sql += "password=" +  quotes(password) + " "
  sql += "where email= " + quotes(email)

  console.log( sql )
  
   db.query( sql , (err,result) => {
         
       console.log( sql )
       console.log( result )    

  })


})

// Deletr (CRUD)
app.post("/api/delete" , (req,res)=>{
 
  const email = req.body.email
  sql = "delete from member where email = " + quotes(email)
  console.log( sql)

  db.query( sql , (err,result) => {
         
       console.log( sql )
       console.log( result )    

  })

    res.send("/api/delete works"  + email )

})

app.listen(3001, () =>{

    console.log("running on port #3001")


})


/*
command to create table in mysql
i.e

mysql -uroot -ppassword
use database crud
source crud.sql

OR

mysql -uroot -ppassword crud < crud.sql

(put this into crud.sql)
DROP TABLE IF EXISTS `member`;

CREATE TABLE `member` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) DEFAULT NULL,
  `lname` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=MyISAM AUTO_INCREMENT=281 DEFAULT CHARSET=latin1;


*/
