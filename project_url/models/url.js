import mongoose from "mongoose";

const UrlSchema = new mongoose.Schema({
    shortC: String,
    longUrl: String,
});

export const Url = mongoose.model("ShortUrl", UrlSchema);