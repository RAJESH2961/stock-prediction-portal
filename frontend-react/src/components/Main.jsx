import React from 'react';
import Button from './UI/Button';


const Main = () => {
  return (
    <>
    <div className="container">
        <div className='p-5 text-center bg-light-dark rounded'>
            <h1 className='text-light'>Stock Prediction Portal</h1>
            <p className='text-light lead'>📊 Welcome to the Stock Prediction Portal!
Stay ahead of the market with smart, data-driven insights. Our portal uses advanced machine learning to analyze historical trends and forecast future stock prices. Simply enter a stock symbol to view predictions, interactive charts, and key insights — all designed to help you make informed investment decisions with confidence.</p>
            <Button text="Login"/>
        </div>
    </div>
    </>
  )
};

export default Main;
