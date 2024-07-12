# wsd-text-analyzer


## Description
This project is a text analysis tool developed using Node.js, Express.js, TypeScript, MongoDB, Docker, Mocha for testing, and OAuth2 for authentication.


- **Text Analysis**: Perform various analyses on text inputs.
- **OAuth2 Authentication**: Secure authentication using OAuth2.
- **MongoDB Integration**: Store and manage data in MongoDB.
- **Docker Support**: Containerized application for easy deployment.
- **Unit Testing**: Includes comprehensive unit tests using Mocha.

## Setup

### Prerequisites
- Docker
- Docker Compose
- Node.js
- MongoDB
- Docker


## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd text-analysis-tool
   yarn install
   yarn dev
   docker run -d -p 27017:27017 --name wsd-mongodb mongo```
