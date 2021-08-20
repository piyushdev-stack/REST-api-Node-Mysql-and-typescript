import { rejects } from "assert";
import Express from "express"
import { resolve } from "path/posix";
import myDb from "./Database/database";
let mysql = require('mysql');

const app = Express()
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// function to create the servertypescript

// Handelling a get request


let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin@123",
  database: "IcefullCreamdotcom00",
  table: "Flavours12345601045 "
});
app.get('/', (req: any, res: any) => {

  res.sendFile(__dirname + "/client.html")
})

app.get('/read', (req: any, res: any) => {
console.log("ooooo" + readingValues())
  res.send(
    {
    
      "data": readingValues() 
    }
  )
 
})

let flavourId: any, flavourName: any, Price: any
// handelling a post request after getting an information ffrom client
app.post('/', (req: any, res: any) => {
  flavourId = req.body.flavourId;
  flavourName = req.body.flavourName;
  Price = req.body.Price;

  res.send({
    "awefgaw":flavourId,
    "afec":flavourName,
    "aedw":Price
  })
  insertValues();
})

// Makuing sever at posrt 5000
app.listen(8080, () => {
  console.log("The server has started at port 8080")
})

function insertValues() {
  

  // Creating the database
  con.connect((err: any) => {
    if (err) throw err;
    console.log("Connected!");
    // con.query("CREATE DATABASE IcefullCreamdotcom000001270145", function (err: any, result: any) {
    //     if (err) throw err;
    //     console.log("errs",err)
    //     console.log("Database created");
    // });
    // let sql = "CREATE TABLE Flavours12345601045 (flavourId int, flavourName VARCHAR(255), Price int)";
    //     con.query(sql, function (err:any, result:any) {
    //       if (err) throw err;
    //       console.log("Table created");
    //     });
    let sql1 = `INSERT INTO Flavours12345601045 (flavourId, flavourName, Price) VALUES (${flavourId}, '${flavourName}', ${Price})`;
    console.log("query", sql1);

    con.query(sql1, function (err: any, result: any) {
      if (err) throw err;
      console.log("1 Record inserted");
    });
  });
}
let sql:any;
function readingValues() {
  con.connect( function(err:any) {
    if (err) throw err;
    con.query("SELECT * FROM Flavours12345601045",  function (err:any, result:any) {
      if (err) throw err;
      console.log("asdfasdfasd",result);
      return new Promise((resolve, reject)=>{
        if (result){
          resolve(result)
        }
      }
      )
    });
  });

}