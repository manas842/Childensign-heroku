
const compression = require('compression')
const express = require('express');
const request = require('request');
const cors = require('cors')
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(cors())
app.use(express.json())
app.set('view engine', 'ejs');
app.use(express.static('public',{maxAge: 31536000000}));
app.use(compression())
process.env.NODE_ENV="development"
function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV !== "development") {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}
app.use(requireHTTPS)

app.get('/*',function(req,res) {
	res.render("index")
})
app.listen(process.env.PORT||3003,(err)=>{
	console.log(process.env.PORT||3003);
})