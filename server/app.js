const express =require('express');
const app = express();
const cors=require('cors');
app.use(cors());
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('Hello World');
});

const User=require('./models/Model')

//get
app.get('/get/profile/',async(req,res)=>{
    try {
        const profile= await User.find()
        res.send(profile)
    } catch (error) {
        res.send(error)
        
    }
})


//post
app.post('/create/profile/',async(req,res)=>{
    try {
        const profile= new User(req.body)
        const createProfile= await profile.save()
        res.send(createProfile)
    } catch (error) {
        res.send(error)
        
    }
})







//connect with mongo db
const port=3000;
app.listen(port,()=>{
    console.log('Server is running on port 3000');
});
const mongoose= require('mongoose');

mongoose.connect("").then(()=>{
    console.log('Database connected');
})
