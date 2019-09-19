//Package Dependencies
const express = require("express");
const path = require("path");
const sql = require('mysql');

//Global Variables
var friends = []

//Setup express app
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = sql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "friend_finder_db"
    })
}



connection.connect(function(err) {
    if(err) {
        console.log(`Error connecting: ${err.stack}`)
        return;
    }
    console.log(`Connected as id: ${connection.threadId}`)
})



connection.query(`SELECT * FROM friend_finder_db.friends`, (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    friends = data
    //Handle string -> list conversion for scores
    for (let i of friends) {
        i.score = i.score.replace(/\D/g,'').split("")
    }
    // console.log(friends)
})

//Routes
//Allow all files in public to use child files of
app.use(express.static(path.join(__dirname, './app/public')));

// //Survey
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"))
})

//Friends data
app.get("/api/friends", function(req, res) {
    return res.json(friends)
})

app.get("/api/friends", function(req, res) {
    // console.log(friends)
    return res.json(friends)
})

app.post("/api/test", function(req, res) {
    var newFriend = req.body;
    // console.log(newFriend)
    let outerListDifference = []
    for (let iter in friends) {
        let difference = []
        //console.log("Line 158" + friends[iter].name)
        //console.log("Line 159" + friends[iter].score)
        for (let i in friends[iter].score) {
            // let intI = parseInt(i)
            //console.log('THis code runs')
            //console.log("Line 161" + newFriend.score[i] , friends[iter].score[i])
            // console.log('line140'+newFriend.scores[intI], i)
            difference.push(parseInt(newFriend.score[i]) - parseInt(friends[iter].score[i]))
        }
        //console.log('line 165' + difference)
        outerListDifference.push({difference : Math.abs(difference.reduce((a,b) => a + b, 0)), index : parseInt(iter)})
        outerListDifference.sort((a, b) => (a.difference > b.difference) ? 1 : -1)
        //console.log("Line 167" + JSON.stringify(outerListDifference))
        // Next I need to push each difference into an array along with the name of the friend from which I will return to the screen the image
    }
    let index = outerListDifference[0].index
    //console.log("Line 171" + index)

    //Add user to DB
    connection.query('INSERT INTO friends (name, photo, score) VALUES (?, ?, ?);', [newFriend.name, newFriend.photo, newFriend.score.join("")], function(err, data) {
        if (err) {
            console.error(err)
            return
        }
        console.log(`Friend ${newFriend.name} was added correctly!`)
    })
    friends.push(newFriend)
    //Send this info back to front end to display
    //console.log(outerListDifference[0], friends[index])
    console.log('New Friend was Added');    
    res.json(friends[index])
})


//Start the Server
app.listen(PORT, function() {
    console.log(`App is listening on PORT ${PORT}`)
});

