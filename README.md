# Weather Application 🌦️

A full stack weather application built using React, Vite, Node.js, Express, Oracle Database, and Docker.

This application allows users to:

- Search real-time weather information
- View weather details dynamically
- Store searched weather history in Oracle Database
- Connect frontend, backend, and database together

---

# Tech Stack

## Frontend

- React
- Vite
- CSS

## Backend

- Node.js
- Express.js

## Database

- Oracle Database XE
- Docker

---

# Features

- Real-time weather search
- Weather API integration
- Dynamic React UI
- Backend API integration
- Oracle database connection
- Store weather search history
- Full stack architecture

---

# Project Architecture

```txt
React Frontend
↓
OpenWeather API
↓
Node.js + Express Backend
↓
Oracle Database (Docker)
```

---

# Screenshots

Add your screenshots here later.

Example:

```md
![Weather App Screenshot](./screenshots/weather-app.png)
```

---

# Installation

## Clone Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

---

# Frontend Setup

Go to project folder:

```bash
cd weather-app
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

---

# Backend Setup

Go to backend folder:

```bash
cd backend
```

Install backend dependencies:

```bash
npm install
```

Run backend server:

```bash
node server.js
```

Backend runs on:

```txt
http://localhost:3001
```

---

# Oracle Database Setup

## Start Docker Container

```bash
docker start kallepallishivakumar
```

---

# Oracle Database Connection

- Host: localhost
- Port: 1521
- Username: system
- Password: oracle
- Service Name: XE

---

# Create Table

Run this SQL query:

```sql
CREATE TABLE weather_history(
  id NUMBER GENERATED ALWAYS AS IDENTITY,
  city VARCHAR2(100),
  temperature NUMBER,
  condition VARCHAR2(100)
);
```

---

# API Endpoints

## Save Weather Data

```http
GET /weather
```

Stores weather data into Oracle database.

---

# Weather API

This project uses:

OpenWeather API

https://openweathermap.org/api

---

# Database Query Example

```sql
SELECT
  id,
  city,
  ROUND(temperature, 2) AS temperature,
  condition
FROM weather_history
ORDER BY id;
```

---

# Folder Structure

```txt
weather-app/
│
├── backend/
│   ├── server.js
│   ├── db.js
│   └── package.json
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── public/
├── package.json
└── README.md
```

---

# Future Improvements

- Add weather forecast
- Add weather icons
- Add authentication
- Add search history UI
- Add delete history feature
- Deploy application
- Add responsive design improvements

---

# Learning Outcomes

This project helped in learning:

- React fundamentals
- API integration
- Async/Await
- Express.js backend
- REST APIs
- Oracle Database
- SQL
- Docker
- Full stack architecture

---

# Author

Kallepalli Shiva Kumar
