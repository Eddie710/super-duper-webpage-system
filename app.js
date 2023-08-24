
//Imports
const express = require('express');
const app = express();
const port = 3000

app.use(express.static('/public/images'));

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/contact', (req,res)=>{
    res.render('contact', { text: 'This is EJS'})
});
app.get('/about', (req,res)=>{
    res.render('about', { text: 'This is EJS'})
});
app.get('/plans', (req,res)=>{
    res.render('plans', { text: 'This is EJS'})
});
app.get('/main', (req,res)=>{
    res.render('main', { text: 'This is EJS'})
});


app.listen(port, () => {
    console.log("Server is running on http://localhost:3000");
});