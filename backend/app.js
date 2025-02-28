require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const express = require('express');
const app = express();

const cors=require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("hello");
});


app.post('/send', async(req, res) => {

    let { ss } = req.body;            //destrucring the value from the body

    ss += "\n\n find errors and explain in clarify way. Add emojis too . \n\n";

    const result = await model.generateContent(ss);

    res.send({ msg: result.response.text() });
});


app.listen(process.env.PORT, (req,res)=>
{
    console.log("server is running on port", process.env.PORT);
});