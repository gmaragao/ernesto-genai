# Chatbot with Azure OpenAI

This project is a chatbot application that uses Azure OpenAI to provide responses. The chatbot is designed to help users fulfill their IRS documents properly in Portuguese.

## Features

- Chatbot that assists with IRS document fulfillment in Portuguese.
- Uses Azure OpenAI for generating responses.
- Express server to handle API requests.
- Environment variables for configuration.

## Prerequisites

- Node.js
- npm (Node Package Manager)
- Azure OpenAI API key and endpoint

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/gmaragao/ernesto-genai
    cd ernesto-genai
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your Azure OpenAI credentials:
    ```env
    AZURE_OPENAI_ENDPOINT=your_azure_openai_endpoint
    AZURE_OPENAI_API_KEY=your_azure_openai_api_key
    BACKEND_ENDPOINT=http://localhost:3000/api/chat
    ```

## Running the Application

1. Start the Express server:
    ```sh
    node server.js
    ```

2. Open `index.html` in your browser to interact with the chatbot.

## API Endpoints

- `POST /api/chat`: Sends a user message to the Azure OpenAI service and returns the chatbot's response.
- `GET /api/config`: Returns the backend endpoint configuration.

## Project Structure

- `server.js`: The Express server that handles API requests.
- `index.html`: The frontend of the chatbot application.
- `.env`: Environment variables for configuration.

## Usage

1. Enter your message in the input field.
2. The chatbot will respond with guidance on fulfilling IRS documents in Portuguese.
