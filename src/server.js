const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("This is a Docker Image test page, by Sajith")
})

app.listen(3000, function () {
    console.log("Server started on port 3000");
});