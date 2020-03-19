const express = require("express");
const app = express();
app.get("/temp",(req,res) => {
	res.send("24");
})

app.listen(3000, () => {
	console.log("Server listenin on port 3000")
})