const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://anuragkumar840970:zdua5SMUOzNCnVC6@cluster0.4wbtylz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => console.log("connect"));