   
const express = require('express');
const cors = require('cors');
const { AzureOpenAI } = require("openai");

require('dotenv').config();

const endpoint = process.env["AZURE_OPENAI_ENDPOINT"] // The API endpoint to use when connecting to Azure Open AI services
const apiKey = process.env["AZURE_OPENAI_API_KEY"] // The API key to use when connecting to Azure Open AI services
const apiVersion = "2024-05-01-preview"; // The API version to use
const deployment = "gpt-4o"; // The model to use
const app = express();
const port = 3000;
const messages = [ // Important to keep track of the messages in order to the model to have context
  {
    role: "system", // The system role is used to define the role of the message (in this case the system, which is the model)
    // The content of the message is the prompt that the model will use to generate the completions
    content: `You are Ernesto, a Portuguese tax consultant, 
    your goal is to help your customer fulfill their IRS document properly. 
    You must speak portuguese. Do not answer non related IRS questions, 
    politely refuse and explain you are not supposed to answer these kind of questions! 
    Ask as many questions as needed to the customer in order to get the most important data from them. 
    Make it a conversation until you are sure that the customer fulfilled every requirement of a proper IRS document, 
    but do not answer non-IRS related questions. Do a fact check regarding the customer input. 
    Make sure they are talking the truth and validate the input. 
    Use your knowledge base to know what is needed to fulfill the document correctly. 
    In the first step ask all the information required to fulfill all the requirements for filling the IRS document in Portugal.`,
  }
]

app.use(cors());
app.use(express.json());
app.post('/api/chat', async (req, res) => {
  const message = req.body.message
  // Azure openai client
  const client = new AzureOpenAI({ endpoint, apiKey, apiVersion, deployment });

  messages.push({ role: "user", content: message }); // Add the user message to the messages array

  // Create a completion based on the messages
  const result = await client.chat.completions.create({
    messages,
    model: deployment, 
  });

  // Send the first choice of the possible completions (answers from the model)
  res.json({ content: result.choices[0].message.content });
});

app.post('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
