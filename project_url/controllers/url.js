
import { Url } from "../models/url.js";
import shortid from "shortid";

export const shortUrl = async(req,res)=>{
       const longUrl = req.body.longUrl;
       const shortC = shortid.generate();

       const shortUrl = `http://localhost:1000/${shortC}`

       //save to database
    const newUrl = new Url({shortC,longUrl})
    await newUrl.save();
    console.log("short saved =" ,newUrl);
    res.render("index.ejs",{shortUrl});

}
//find on database
//const originalUrl = await Url.findOne({shortC})

export const getoriginal = async(req,res)=>{
    const shortC = req.params.shortC
    const originalUrl = await Url.findOne({shortC})
    //res.json({originalUrl})

    if(originalUrl){
        res.redirect(originalUrl.longUrl);
    }else{
        res.json({message:"Invalid short code"})
    }

   // res.json({message:"longUrl", shortc :shortC})
}
