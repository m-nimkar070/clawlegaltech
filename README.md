# Resignation Management System

The Resignation Management System is a full-stack web application built with Node.js/Express.js for the backend and React.js for the frontend. It allows employees to submit resignation requests, HR admins to manage these requests, and employees to complete exit questionnaires.

## Features

### User Authentication:
- Employees and HR admins can register and log in.
- JWT-based authentication for secure access.

### Resignation Management:
- Employees can submit resignation requests with a last working day and reason.
- HR admins can approve or reject resignation requests and set the exit date.

### Exit Questionnaire:
- Employees can submit responses to an exit questionnaire after their resignation is approved.
- HR admins can view all submitted exit questionnaires.

### Email Notifications:
- Employees receive email notifications when their resignation is approved or rejected.

### Holiday Validation:
- Resignation requests are rejected if the last working day falls on a weekend or a public holiday (using the Calendarific API).

## Technologies Used

### Backend:
- Node.js
- Express.js
- MongoDB (Database)
- Mongoose (ODM)
- JWT (Authentication)
- Nodemailer (Email Notifications)
- Calendarific (Check Country Holidays )
- Axios (Calendarific API Integration)
- Cors (Cross Origin Access)

### Frontend:
- React.js
- React Router (Routing)
- Axios (API Calls)
- CSS (Styling)

### APIs:
- Calendarific (Public Holidays)

## Setup Instructions

### 1. Backend Setup

#### Clone the repository:
```bash
git clone https://github.com/your-username/resignation-system.git
cd resignation-system/backend
```

#### Install dependencies:
```bash
npm install
```

#### Create a `.env` file in the backend folder and add the following environment variables:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/resignation_system
JWT_SECRET=your_jwt_secret
CALENDARIFIC_API_KEY=your_calendarific_api_key
GMAIL_PWD=your_email_password
```

#### Start the backend server:
```bash
npm start
```

### 2. Frontend Setup

#### Navigate to the frontend folder:
```bash
cd ../frontend
```

#### Install dependencies:
```bash
npm install
```

#### Start the React development server:
```bash
npm start
```

#### Open the application in your browser:
```
http://localhost:3000
```

## API Endpoints

### Authentication

#### Register User:
**POST** `/api/auth/register`

**Request Body:**
```json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "role": "employee" | "hr",
  "country": "string"
}
```

#### Login User:
**POST** `/api/auth/login`

**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

### Resignation

#### Submit Resignation:
**POST** `/api/user/resign`

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "lwd": "string", // Last working day (YYYY-MM-DD)
  "reason": "string"
}
```

#### Get User Resignations:
**GET** `/api/user/resignations`

**Headers:** `Authorization: Bearer <token>`

### Admin

#### Get All Resignations:
**GET** `/api/admin/resignations`

**Headers:** `Authorization: Bearer <token>`

#### Approve/Reject Resignation:
**PUT** `/api/admin/conclude_resignation`

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "resignationId": "string",
  "approved": boolean,
  "lwd": "string" // Updated last working day (YYYY-MM-DD)
}
```

### Exit Questionnaire

#### Submit Exit Questionnaire:
**POST** `/api/user/responses`

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "resignationId": "string",
  "responses": [
    {
      "questionText": "string",
      "response": "string"
    }
  ]
}
```

#### Get All Exit Responses:
**GET** `/api/admin/exit_responses`

**Headers:** `Authorization: Bearer <token>`

## Frontend Routes

| Route             | Description            |
|------------------|----------------------|
| `/`              | Home                  |
| `/login`         | Login Page            |
| `/register`      | Register Page         |
| `/dashboard`     | Employee Dashboard    |
| `/admin`         | HR Admin Dashboard    |

## Environment Variables

| Variable                | Description                                  |
|-------------------------|----------------------------------------------|
| `PORT`                  | Backend server port (default: 5000)         |
| `MONGO_URI`             | MongoDB connection string                   |
| `JWT_SECRET`            | Secret key for JWT authentication           |
| `CALENDARIFIC_API_KEY`  | API key for Calendarific                     |
| `GMAIL_PASS`            | Email password for Nodemailer                |

---

This README provides all the necessary details for setting up and running the Resignation Management System. 🚀

