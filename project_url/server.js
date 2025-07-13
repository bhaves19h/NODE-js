import express from 'express';
import mongoose from 'mongoose';
import {shortUrl ,getoriginal} from './controllers/url.js';

mongoose.connect(
    "mongodb+srv://bhavesh:Bhaveshs%400@cluster0.jpra0bk.mongodb.net/",{
    dbname:"project_short_url"
}
).then(()=>console.log("mongoDB connected...")).catch((err)=>console.log(err))

const app = express();
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('index.ejs',{shortUrl:null})
})

app.post('/short',shortUrl)
//redirect to the original 
app.get('/:shortC',getoriginal)

const port = 1000;
app.listen(port ,()=>console.log(`server is running on port ${port}`));


