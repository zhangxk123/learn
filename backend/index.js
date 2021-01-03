const express = require('express');
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = new express();

app.use(bodyParser.json());
// app.use(cookieParser());
app.use(cors({
  origin:'*',
  credentials:true,
}))

app.use(express.static('public'))
// app.engine('pug', require('pug').__express)
app.set('view engine','pug');

//home
app.get('/',function(req,res,next){
  res.render('index',{articles:[
    {title:1},
    {title:2},
    {title:3},
  ]})
})

app.get('/api/json',function (req,res) {
  const {page,pageSize}=req.query;
  const {loginToken}=req.cookies||{};
  if(!loginToken){
    res.status(200).json({
      status:401,
    })
  }
  res.json({
    status:0,
    page:page,
    pageSize:pageSize
  })
})

app.post('/api/login',function (req,res) {
  const {username,password}=req.body;
  res.cookie('loginToken',generatorToken(username,password),{
    maxAge:1000*60*15,
    httpOnly:true, // js no get cookie
  })
  res.json({
    status:0,
    msg:'login success'
  })
})

app.listen(3000,()=>{
  console.log(`app run in localhost:3000`);
})

function generatorToken(username,password) {
  return `${username}+${password}`
  }