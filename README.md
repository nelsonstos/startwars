# StarWars Challenge

This project is a serverless API built with Node.js and TypeScript, designed to manage and retrieve data related to Star Wars characters and films. It employs AWS services such as AWS Lambda and DynamoDB for scalability and efficient data storage. The architecture follows a multi-layered approach, incorporating various components, including controllers, models, repositories, services, utils, mappers, and Data Transfer Objects (DTOs).

## Key Features

- **Serverless Architecture**: Utilizes AWS Lambda for executing functions in response to events, allowing for a pay-as-you-go pricing model.
- **Database Integration**: Implements DynamoDB as the NoSQL database, leveraging the Dynamoose ORM for seamless interaction.
- **OpenAPI Documentation**: Provides comprehensive API documentation using OpenAPI (Swagger), ensuring clarity in endpoint usage and data formats.
- **Modular Design**: Adopts a clean architecture with a separation of concerns, facilitating easier maintenance and scalability.

## Prerequisites

- **Node.js** (v18 or higher)
- **Docker** (if running DynamoDB locally)
- **Typescript** (Last version)
- **Serverless Framework** (v3)
- **AWS Services** (Lambda, APIGateway, DynamoDB, AIM, SQS and SNS)
- **Dynamoose ORM** (Las Version)
- **Postman** (for testing API requests)

## Disign and Architecture
This project implements a serverless architecture using AWS Lambda, API Gateway, DynamoDB, following a REST architectural style. The system is designed to manage characters and film Star Wars also registers and get clients. Additionally, design patterns such as Singleton and dependency injection have been applied, along with a layered architecture, which contributes to the system's modularity and scalability.

```bash

    +------------------------+
    |  Amazon API Gateway     |
    |  (Gestiona las APIs)    |
    +------------------------+
                |
                v
    +------------------------+             +------------------------+
    | AWS Lambda Functions    |            |  AWS DynamoDB          |
    | (Lógica de negocio)     |<---------->|  (Base de Datos NoSQL) |
    +------------------------+             +------------------------+
           
    

```

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Run DynamoDB Locally (Optional)
If you want to run DynamoDB locally using Docker, execute the following command:

```bash
docker run -d -p 4200:8000 amazon/dynamodb-local

```
### 3. Environment Configuration
Create a .env´ file based on .env.example and configure the following:

```bash
AWS_REGION=us-west-2
DYNAMODB_ENDPOINT=http://localhost:4200
AWS_ACCESS_KEY_ID=j4sb5n
AWS_SECRET_ACCESS_KEY=ja0e54
STAGE=dev

DYNAMODB_CLIENTS_TABLE=challengeapp-dev-clients

```

### 4. Running the Application
To start the application, run:
```bash
npm run build
```
The API will be available at http://localhost:3000.

## API Endpoints

### 1. Get Characters

Request:
```bash
curl --location 'http://localhost:3000/dev/characters/Leia Organa'
```
Response:
```bash
{
    "status": 200,
    "message": "Character updated obtained",
    "character": {
        "nombre": "Leia Organa",
        "altura": "150",
        "masa": "49",
        "colorCabello": "brown",
        "colorPiel": "light",
        "colorOjos": "brown",
        "anoNacimiento": "19BBY",
        "genero": "female",
        "planetaNatal": "https://swapi.py4e.com/api/planets/2/",
        "peliculas": [
            "https://swapi.py4e.com/api/films/1/",
            "https://swapi.py4e.com/api/films/2/",
            "https://swapi.py4e.com/api/films/3/",
            "https://swapi.py4e.com/api/films/6/",
            "https://swapi.py4e.com/api/films/7/"
        ],
        "especies": [
            "https://swapi.py4e.com/api/species/1/"
        ],
        "vehiculos": [
            "https://swapi.py4e.com/api/vehicles/30/"
        ],
        "navesEstelares": [],
        "creado": "2014-12-10T15:20:09.791000Z",
        "editado": "2014-12-20T21:17:50.315000Z",
        "url": "https://swapi.py4e.com/api/people/5/"
    }
}
```


### 2. Get Films
Request:
```bash
curl --location 'http://localhost:3000/dev/films/5'
```
Response: 

```bash
{
    "status": 200,
    "message": "Film successfully obtained",
    "film": {
        "titulo": "Attack of the Clones",
        "episodioId": 2,
        "introduccion": "There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\npeace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo, is returning\r\nto the Galactic Senate to vote\r\non the critical issue of creating\r\nan ARMY OF THE REPUBLIC\r\nto assist the overwhelmed\r\nJedi....",
        "director": "George Lucas",
        "productor": "Rick McCallum",
        "fechaEstreno": "2002-05-16",
        "personajes": [
            "https://swapi.py4e.com/api/people/2/",
            "https://swapi.py4e.com/api/people/3/",
            "https://swapi.py4e.com/api/people/6/",
            "https://swapi.py4e.com/api/people/7/",
            "https://swapi.py4e.com/api/people/10/",
            "https://swapi.py4e.com/api/people/11/",
            "https://swapi.py4e.com/api/people/20/",
            "https://swapi.py4e.com/api/people/21/",
            "https://swapi.py4e.com/api/people/22/",
            "https://swapi.py4e.com/api/people/33/",
            "https://swapi.py4e.com/api/people/35/",
            "https://swapi.py4e.com/api/people/36/",
            "https://swapi.py4e.com/api/people/40/",
            "https://swapi.py4e.com/api/people/43/",
            "https://swapi.py4e.com/api/people/46/",
            "https://swapi.py4e.com/api/people/51/",
            "https://swapi.py4e.com/api/people/52/",
            "https://swapi.py4e.com/api/people/53/",
            "https://swapi.py4e.com/api/people/58/",
            "https://swapi.py4e.com/api/people/59/",
            "https://swapi.py4e.com/api/people/60/",
            "https://swapi.py4e.com/api/people/61/",
            "https://swapi.py4e.com/api/people/62/",
            "https://swapi.py4e.com/api/people/63/",
            "https://swapi.py4e.com/api/people/64/",
            "https://swapi.py4e.com/api/people/65/",
            "https://swapi.py4e.com/api/people/66/",
            "https://swapi.py4e.com/api/people/67/",
            "https://swapi.py4e.com/api/people/68/",
            "https://swapi.py4e.com/api/people/69/",
            "https://swapi.py4e.com/api/people/70/",
            "https://swapi.py4e.com/api/people/71/",
            "https://swapi.py4e.com/api/people/72/",
            "https://swapi.py4e.com/api/people/73/",
            "https://swapi.py4e.com/api/people/74/",
            "https://swapi.py4e.com/api/people/75/",
            "https://swapi.py4e.com/api/people/76/",
            "https://swapi.py4e.com/api/people/77/",
            "https://swapi.py4e.com/api/people/78/",
            "https://swapi.py4e.com/api/people/82/"
        ],
        "planetas": [
            "https://swapi.py4e.com/api/planets/1/",
            "https://swapi.py4e.com/api/planets/8/",
            "https://swapi.py4e.com/api/planets/9/",
            "https://swapi.py4e.com/api/planets/10/",
            "https://swapi.py4e.com/api/planets/11/"
        ],
        "navesEstelares": [
            "https://swapi.py4e.com/api/starships/21/",
            "https://swapi.py4e.com/api/starships/32/",
            "https://swapi.py4e.com/api/starships/39/",
            "https://swapi.py4e.com/api/starships/43/",
            "https://swapi.py4e.com/api/starships/47/",
            "https://swapi.py4e.com/api/starships/48/",
            "https://swapi.py4e.com/api/starships/49/",
            "https://swapi.py4e.com/api/starships/52/",
            "https://swapi.py4e.com/api/starships/58/"
        ],
        "vehiculos": [
            "https://swapi.py4e.com/api/vehicles/4/",
            "https://swapi.py4e.com/api/vehicles/44/",
            "https://swapi.py4e.com/api/vehicles/45/",
            "https://swapi.py4e.com/api/vehicles/46/",
            "https://swapi.py4e.com/api/vehicles/50/",
            "https://swapi.py4e.com/api/vehicles/51/",
            "https://swapi.py4e.com/api/vehicles/53/",
            "https://swapi.py4e.com/api/vehicles/54/",
            "https://swapi.py4e.com/api/vehicles/55/",
            "https://swapi.py4e.com/api/vehicles/56/",
            "https://swapi.py4e.com/api/vehicles/57/"
        ],
        "especies": [
            "https://swapi.py4e.com/api/species/1/",
            "https://swapi.py4e.com/api/species/2/",
            "https://swapi.py4e.com/api/species/6/",
            "https://swapi.py4e.com/api/species/12/",
            "https://swapi.py4e.com/api/species/13/",
            "https://swapi.py4e.com/api/species/15/",
            "https://swapi.py4e.com/api/species/28/",
            "https://swapi.py4e.com/api/species/29/",
            "https://swapi.py4e.com/api/species/30/",
            "https://swapi.py4e.com/api/species/31/",
            "https://swapi.py4e.com/api/species/32/",
            "https://swapi.py4e.com/api/species/33/",
            "https://swapi.py4e.com/api/species/34/",
            "https://swapi.py4e.com/api/species/35/"
        ],
        "creado": "2014-12-20T10:57:57.886000Z",
        "editado": "2014-12-20T20:18:48.516000Z",
        "url": "https://swapi.py4e.com/api/films/5/"
    }
}

```

### 3. Create a Client
Request
```bash
curl --location 'http://localhost:3000/dev/clients' \
--header 'Content-Type: application/json' \
--data-raw '{
  "clientId": "12345",
  "name": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "555-1234",
  "address": "123 Main St, Cityville"
}
'
```
Response:

```bash
{
    "status": 201,
    "message": "Succcessfully registered Client",
    "client": {
        "clientId": "12345",
        "name": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "phone": "555-1234",
        "address": "123 Main St, Cityville",
        "createdAt": 1729483367326,
        "updatedAt": 1729483367326
    }
}

```

### 4. Get Cliente

Request:

```bash
curl --location 'http://localhost:3000/dev/clients/12345' \
--header 'Content-Type: application/json'
```
Response:

```bash
{
    "status": 200,
    "message": "Client successfully obtained",
    "client": {
        "lastName": "Doe",
        "createdAt": "2024-10-21T04:02:47.326Z",
        "clientId": "12345",
        "address": "123 Main St, Cityville",
        "phone": "555-1234",
        "name": "John",
        "email": "john.doe@example.com",
        "updatedAt": "2024-10-21T04:02:47.326Z"
    }
}

```

# Key Points of the README:
- **Introduction**: Explains the project's purpose.
- **Prerequisites**: Lists necessary software like Node.js and Docker.
- **Setup**: Instructions for setting up the project locally.
- **API Endpoints**: Sample requests for creating doctors and appointments.
- **Database Schema**: Describes the Dynamoose schemas for `Doctor` and `Appointment`.
- **Testing**: How to test the API using Postman or cURL.
- **Docker with DynamoDB**: Instructions for running DynamoDB locally with Docker.

This **README** should provide clear guidance for setting up and using your medical appointment scheduling system.



