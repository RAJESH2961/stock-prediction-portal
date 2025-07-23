# 📈 Stock Prediction Portal

An intelligent, full-stack web application for predicting future stock prices using machine learning models, built with **React**, **Django REST Framework**, and **JWT authentication**.

<div align="center">
  <img src="https://img.shields.io/badge/frontend-react-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/backend-django-brightgreen?style=flat-square" />
  <img src="https://img.shields.io/badge/authentication-jwt-orange?style=flat-square" />
  <img src="https://img.shields.io/badge/machine%20learning-integrated-success?style=flat-square" />
</div>

---

## 🧠 About

**Stock Prediction Portal** is a powerful and educational web app that merges **machine learning** with modern **web development**. It enables users to:

- 🔍 Search and visualize historical stock data
- 📊 Generate predictive analytics using AI/ML models
- 🤖 Forecast stock prices via integrated ML model
- 🔐 Access protected routes with secure JWT-based authentication

Whether you're a student, data scientist, or investor, this project demonstrates how machine learning can be used in real-world financial applications.

---

## ✨ Feature Highlights

- ✅ Secure **JWT Authentication** system (login, signup, token refresh)
- ✅ React-based dynamic **frontend UI**
- ✅ **ML prediction API** to forecast future stock prices
- ✅ Real-time **charts** and **data visualization**
- ✅ Modular design for adding new stocks or models
- ✅ Admin panel for managing users and permissions
- ✅ Clean separation of frontend and backend (API-first)

---

## 🔧 Tech Stack

### Frontend
- **React** (Hooks, Router)
- **Axios** for HTTP requests
- **TailwindCSS** (optional)

### Backend
- **Django + Django REST Framework**
- **Simple JWT** for authentication
- **SQLite** or **PostgreSQL**
- **CORS support** for frontend-backend integration

### Machine Learning
- Time-series forecasting model
- Uses **pandas**, **NumPy**, and optionally **scikit-learn** or **Prophet**
- Returns predictions via API to frontend

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository


git clone https://github.com/RAJESH2961/stock-prediction-portal.git
cd stock-prediction-portal

cd backend-drf

# Create and activate a virtual environment
python -m venv venv
source venv/bin/activate      # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Apply migrations
python manage.py makemigrations
python manage.py migrate

# Create a superuser (admin panel access)
python manage.py createsuperuser

# Run the backend server
python manage.py runserver


cd ../frontend-react

# Install frontend dependencies
npm install

# Start the React development server
npm start

