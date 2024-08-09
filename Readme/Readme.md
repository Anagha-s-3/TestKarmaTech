# Karma Technology Test Project

This project is a simple Angular application with a Spring Boot backend. The application serves as an example of a full-stack web application using Angular for the frontend and Spring Boot for the backend.

## Table of Contents

- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Details](#project-details)
- [Contact](#contact)

## Project Structure

Karma_Technology_Test/
│
├── backend/
│ ├── src/
│ ├── pom.xml
│ └── ...
│
├── frontend/
│ ├── src/
│ ├── angular.json
│ └── ...
│
├── README.md
└── ...
- **backend/**: Contains the Spring Boot backend code.
- **frontend/**: Contains the Angular frontend code.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Java 22 ](https://www.oracle.com/java/technologies/javase-downloads.html)
- [Maven](https://maven.apache.org/install.html)
- [Node.js and npm](https://nodejs.org/en/download/)
- [Angular CLI 18.1.3](https://angular.io/cli)

## Installation

### Backend

1. Navigate to the backend directory:

    ```sh
    cd backend
    ```

2. Install the backend dependencies and build the project:

    ```sh
    mvn clean install
    ```

### Frontend

1. Navigate to the frontend directory:

    ```sh
    cd frontend
    ```

2. Install the frontend dependencies:

    ```sh
    npm install
    ```

## Running the Application

### Running the Backend

1. Navigate to the backend directory if you haven't already:

    ```sh
    cd backend
    ```

2. Run the Spring Boot application:

    ```sh
    mvn spring-boot:run
    ```

   The backend server will start on port `8080`.

### Running the Frontend

1. Navigate to the frontend directory if you haven't already:

    ```sh
    cd frontend
    ```

2. Start the Angular application:

    ```sh
    ng serve
    ```

   The frontend server will start on port `4200`. You can access the application by navigating to `http://localhost:4200` in your web browser.

## Project Details

This project includes the following features:

- **Angular Frontend**: Developed using Angular CLI with a simple sales list component.
- **Spring Boot Backend**: Developed using Spring Boot, providing RESTful APIs for the frontend.
- **Port Configuration**: Backend runs on port `8080` and frontend runs on port `4200`.

Note: Since I was using Angular 18, the HttpClientModule was unable to use, eventhough I tried changing the version of angular, I got some issues. 

## Contact

If you have any questions or need further assistance, please feel free to contact:

- **Name**: Anagha Swaminathan
- **Email**: [mail2anagha.s003@gmail.com](mailto:mail2anagha.s003@gmail.com)
- **Phone**: +971 503 903 806
