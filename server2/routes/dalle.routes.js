/*import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from "openai";

dotenv.config();
const router = express.Router();

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(config);

router.route('/').get((req, res)=> {
    res.status(200).json({ message: "Hello From DALLE Route"})
})

router.route('/').post(async (req, res)=> {
    try {
        const { prompt } = req.body;
        const response = await openai.createImage({
            prompt,
            n:1,
            size: '1024x1024',
            response_format: 'b64_json',
        });
        const image = response.data.data[0].b64_json;
        res.status(200).json({message: "Hello from DALL.E"})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "OpenAi not Connected!!"})
    }
})

export default router;*/

import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai'; // Default export

dotenv.config();
const router = express.Router();

// Initialize OpenAI client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Make sure your API key is correctly loaded
});

router.route('/').get((req, res) => {
    res.status(200).json({ message: "Hello From DALLE Route" });
});

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        // Create an image using DALL-E
        const response = await openai.images.generate({
            prompt,
            n: 1,
            size: '1024x1024',
        });

        const image = response.data[0].url; // Updated response parsing

        res.status(200).json({ image }); // Return the generated image URL
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "OpenAI is not connected!!" });
    }
});

export default router;
