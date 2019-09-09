//Package Dependencies
const express = require("express");
const path = require("path");

//Friends Data (will be moved to DB)
var friends = [{
    "name": "Ahmed",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
    "scores": ["5", "1", "4", "4", "5", "1", "2", "5", "4", "1"]
}, {
    "name": "Jacob Deming",
    "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
    "scores": ["4", "2", "5", "1", "3", "2", "2", "1", "3", "2"]
}, {
    "name": "Jeremiah Scanlon",
    "photo": "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
    "scores": ["5", "2", "2", "2", "4", "1", "3", "2", "5", "5"]
}, {
    "name": "Louis T. Delia",
    "photo": "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
    "scores": ["3", "3", "4", "2", "2", "1", "3", "2", "2", "3"]
}, {
    "name": "Lou Ritter",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkDAAAAJDhhZTI5NTk2LWQzZjUtNDJjZi1hMTM2LTQ3ZjNmYjE0YmY2NA.jpg",
    "scores": ["4", "3", "4", "1", "5", "2", "5", "3", "1", "4"]
}, {
    "name": "Jordan Biason",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
    "scores": ["4", "4", "2", "3", "2", "2", "3", "2", "4", "5"]
}, {
    "name": "coco",
    "photo": "https///",
    "scores": ["5", "4", "2", "3", "1", "3", "3", "3", "2", "4"]
}, {
    "name": "WAHMAD",
    "photo": "https://www.petmd.com/sites/default/files/petmd-kitten-development.jpg",
    "scores": ["2", "2", "2", "2", "2", "2", "2", "2", "2", "2"]
}, {
    "name": "WAHMAD",
    "photo": "https://www.petmd.com/sites/default/files/petmd-kitten-development.jpg",
    "scores": ["2", "2", "5", "2", "2", "5", "5", "5", "4", "3"]
}, {
    "name": "Matt",
    "photo": "https://internationalspeakers.com.au/wp-content/uploads/1970/01/matt-skinner-259x259.jpg",
    "scores": ["3", "5", "4", "2", "4", "5", "5", "4", "1", "1"]
}, {
    "name": "James Murry",
    "photo": "ghftrh",
    "scores": ["3", "2", "4", "5", "2", "2", "3", "1", "2", "1"]
}, {
    "name": "Tanner S Bodrero",
    "photo": "u",
    "scores": ["1", "2", "3", "4", "1", "2", "3", "3", "2", "4"]
}, {
    "name": "dan",
    "photo": "fdfdfe",
    "scores": ["2", "2", "2", "3", "3", "3", "3", "3", "3", "2"]
}, {
    "name": "bolo",
    "photo": "google.com",
    "scores": ["2", "3", "3", "5", "3", "3", "2", "5", "1", "2"]
}, {
    "name": "bolo",
    "photo": "google.com",
    "scores": ["2", "3", "3", "5", "3", "3", "2", "5", "1", "2"]
}, {
    "name": "bolo",
    "photo": "google.com",
    "scores": ["2", "3", "3", "5", "4", "3", "2", "5", "1", "2"]
}, {
    "name": "da",
    "photo": "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
    "scores": ["5", "3", "3", "2", "4", "1", "5", "3", "3", "4"]
}, {
    "name": "Test",
    "photo": "rest",
    "scores": ["2", "3", "3", "2", "3", "2", "3", "3", "3", "3"]
}, {
    "name": "priyam",
    "photo": "sdf",
    "scores": ["2", "1", "1", "1", "1", "1", "1", "1", "1", "1"]
}, {
    "name": "Fawzi Alami",
    "photo": "https://drive.google.com/open?id=1PA096dLE3HPvEN3PlTv0crTndFbbjd8y",
    "scores": ["5", "5", "5", "5", "1", "3", "3", "5", "3", "3"]
}]

var test = [{
    "name": "Ahmed",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
    "scores": ["5", "1", "4", "4", "5", "1", "2", "5", "4", "1"]
}, {
    "name": "Jacob Deming",
    "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
    "scores": ["4", "2", "5", "1", "3", "2", "2", "1", "3", "2"]
}, {
    "name": "Jeremiah Scanlon",
    "photo": "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
    "scores": ["5", "2", "2", "2", "4", "1", "3", "2", "5", "5"]
}]


//Setup express app
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());


//Routes

//Home
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"))
})

//Survey
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"))
})

//Friends data
app.get("/api/friends", function(req, res) {
    return res.json(friends)
})

app.get("/api/test", function(req, res) {
    return res.json(test)
})

app.post("/api/test", function(req, res) {
    var newFriend = req.body;
    console.log(newFriend.score)
    test.push(newFriend)
    console.log('New Friend was Added');
    res.json(test)
})

//Start the Server
app.listen(PORT, function() {
    console.log(`App is listening on PORT ${PORT}`)
});

