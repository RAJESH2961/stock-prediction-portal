# 📈 Stock Prediction Portal

An intelligent, full-stack web application for predicting future stock prices using machine learning models, built with **React**, **Django REST Framework**, **LSTM**, and **JWT authentication**.

<div align="center">
  <img src="https://img.shields.io/badge/frontend-react-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/backend-django-brightgreen?style=flat-square" />
  <img src="https://img.shields.io/badge/authentication-jwt-orange?style=flat-square" />
  <img src="https://img.shields.io/badge/ML-LSTM-success?style=flat-square" />
  <img src="https://img.shields.io/badge/data-yahoo%20finance-yellow?style=flat-square" />
</div>

---

## 🧠 About

**Stock Prediction Portal** is a full-stack web app that brings together **AI/ML**, **React**, and **Django** to help users explore and predict stock market trends. It allows users to:

- 🔍 Search for stock data using **ticker symbols**
- 📊 Visualize historical data with interactive charts
- 🤖 Predict **100-day or 200-day** stock trends using an **LSTM-based** model
- 🔐 Securely access features with JWT-based auth system

Built for students, developers, and financial enthusiasts to explore practical AI in finance.

---

## ✨ Feature Highlights

- ✅ **LSTM (Long Short-Term Memory)** model for sequential stock forecasting
- ✅ Fetches historical data using **Yahoo Finance API**
- ✅ Predicts **100-day** and **200-day** future stock prices
- ✅ Real-time interactive charts
- ✅ JWT authentication for secure access
- ✅ Admin panel to manage user roles and data
- ✅ Modern UI with React + Axios

---

## 🔧 Tech Stack

### Frontend
- **React** (with Hooks + Router)
- **Axios** for RESTful API calls
- **TailwindCSS** 

### Backend
- **Django REST Framework**
- **Simple JWT** for user auth
- **SQLite** or **PostgreSQL**
- **CORS headers** for cross-origin support

### Machine Learning
- **LSTM model** for time-series forecasting
- Implemented using **TensorFlow** / **Keras**
- Data pulled from **Yahoo Finance** using `yfinance`
- Outputs both **100-day** and **200-day** forecasts

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

git clone https://github.com/RAJESH2961/stock-prediction-portal.git
cd stock-prediction-portal

cd backend-drf

# Create and activate virtual environment
python -m venv venv
source venv/bin/activate      # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Apply migrations
python manage.py makemigrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Start development server
python manage.py runserver

cd ../frontend-react

# Install frontend dependencies
npm install

# Start frontend server
npm start

