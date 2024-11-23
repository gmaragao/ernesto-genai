   
const express = require('express');
const cors = require('cors');
// const { AzureOpenAI } = require("openai");
// const { DefaultAzureCredential, getBearerTokenProvider } = require("@azure/identity");
const { AzureOpenAI } = require("openai");
const { 
  DefaultAzureCredential, 
  getBearerTokenProvider 
} = require("@azure/identity");

// OpenAI resource. You can find this in the Azure portal.
require('dotenv').config();


const app = express();
const port = 3000; // You can choose any available port

// Middleware
app.use(cors());
app.use(express.json());

// Replace with your actual Azure OpenAI endpoint and API key
// const deploymentName = "gpt-4o-mini"; // Replace with your actual deployment name

app.post('/api/chat', async (req, res) => {


// You will need to set these environment variables or edit the following values
const { AzureOpenAI } = require("openai");
const { 
  DefaultAzureCredential, 
  getBearerTokenProvider 
} = require("@azure/identity");

// You will need to set these environment variables or edit the following values
const endpoint = process.env["AZURE_OPENAI_ENDPOINT"] || "<endpoint>";
const apiKey = process.env["AZURE_OPENAI_API_KEY"] || "<api key>";
const apiVersion = "2024-05-01-preview";
const deployment = "gpt-4o"; //This must match your deployment name.


// keyless authentication    
const credential = new DefaultAzureCredential();
const scope = "https://cognitiveservices.azure.com/.default";
const azureADTokenProvider = getBearerTokenProvider(credential, scope);

const messages = req.body.messages


const client = new AzureOpenAI({ endpoint, apiKey, apiVersion, deployment });

// const messages =[  { role: "system", content: "You are Ernesto, a Portuguese tax consultant, your goal is to help your customer fulfill their IRS document properly. You must speak portuguese. Do not answer non related IRS questions, politely refuse and explain you are not supposed to answer these kind of questions! Ask as many questions as needed to the customer in order to get the most important data from them. Make it a conversation until you are sure that the customer fullfilled every requirement of a proper irs document, but do not answer non irs related questions. Do a fact check regarding the customer input. Make sure they are talking the truth and validate the input. Use your knowledge base to know what is needed to fulfill the document correctly."}
// ]




const result = await client.chat.completions.create({
  messages,
  model: "gpt-4", // Replace with your actual model name
});

res.json({ content: result.choices[0].message.content });
});
app.post('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});


