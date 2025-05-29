const e1 = require('express');
const app = e1();



//ADD ASSIGNMENT API
app.post('/addassignment', (req, res) => {
    res.send('<html><body>INSIDE ADD ASSIGNMENT API..</body></html>');
})

//SEARCH API
app.get('/searchstudent', (req, res) => {
    res.send('<html><body>INSIDE SEARCH STUDENT API..</body></html>');
})

//DELETE API
app.delete('/remove', (req, res) => {
    res.send('<html><body>INSIDE REMOVE STUDENT API..</body></html>');
})



//STARTS THE EXPRESS SERVER. 5001 IS THE PORT NUMBER
app.listen(5002, () =>
    console.log('EXPRESS Server Started at Port No: 5002'));
