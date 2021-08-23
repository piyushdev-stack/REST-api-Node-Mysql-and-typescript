import Express from "express";
let mysql = require('mysql');
const app = Express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
// 
const fetch = document.querySelector('#fetch');
fetch.addEventListener("Onclick", (route) => {
    console.log("button clicked");
});
// Creating Database connection
let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin@123",
    database: "IcefullCreamdotcom00",
    table: "Flavours12345601045 "
});
// Handelling a get request for showing HOMEPAGE
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/client.html");
});
// Handelling a put request for UPDATE operation
app.patch('/update', (req, res) => {
    let sql = "UPDATE Flavours12345601045 SET  Price = 500 WHERE flavourId = 30";
    con.query(sql, function (err, result) {
        if (err)
            throw err;
        console.log("updated");
        // const data=JSON.stringify(result)
        res.send({ result });
    });
});
// Handelling a get request for READ operation
app.get('/read', (req, res) => {
    let sql = "Select * from Flavours12345601045 ";
    con.query(sql, function (err, result) {
        if (err)
            throw err;
        console.log(req.params.id);
        console.log("Data recieved");
        // const data=JSON.stringify(result)
        res.send({ result });
    });
});
app.delete('/delete', (req, res) => {
    let sql = `DELETE FROM Flavours12345601045  WHERE flavourId = 2343`;
    con.query(sql, function (err, result) {
        if (err)
            throw err;
        console.log("record has been delted");
        // const data=JSON.stringify(result)
        res.send("record has been deleted");
    });
});
let flavourId, flavourName, Price;
// handelling a post request after getting an information ffrom client
app.post('/', (req, res) => {
    flavourId = req.body.flavourId;
    flavourName = req.body.flavourName;
    Price = req.body.Price;
    res.send(`The following data has been inserted to the Menu databae:    
    Flavor Id: ${flavourId}
    Flavour Name: ${flavourName}
    Price : ${Price}`);
    insertValues();
});
// Makuing sever at posrt 5000
app.listen(8080, () => {
    console.log("The server has started at port 8080");
});
function insertValues() {
    // Creating the database
    con.connect((err) => {
        if (err)
            throw err;
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
        con.query(sql1, function (err, result) {
            if (err)
                throw err;
            console.log("1 Record inserted");
        });
    });
}
// function readingValues() {
//   let sql = "Select * from Flavours12345601045 "
//   con.query(sql, function (err: any, result: any) {
//     if (err) throw err;
//     console.log("data ");
//   });
// }
