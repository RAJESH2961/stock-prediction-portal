import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axiosInstance';
import Button from '../UI/Button';

const Dashboard = () => {
  const [ticker, setTicker] = useState('');
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const response = await axiosInstance.get('/protected-view/');
        // console.log("Success", response.data);
      } catch (error) {
        console.error('Error Fetching data');
      }
    };
    fetchProtectedData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/predict/', { ticker });
      setPrediction(response.data);
      console.log('Prediction response:', response.data);

    } catch (error) {
      console.error('Prediction error:', error);
    }
  };

  return (
    <div className='container text-light d-flex flex-column justify-content-center align-items-center' style={{ minHeight: '75vh' }}>
      <h2>Dashboard</h2>
      <form onSubmit={handleSubmit} className="w-50 mt-4">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Ticker"
            value={ticker}
            onChange={(e) => setTicker(e.target.value)}
          />
        </div>
        <Button text="See Prediction" type="submit" />
      </form>

      {prediction && (
  <div className="alert alert-success mt-4 w-50 text-center">
    <div><strong>Status:</strong> {prediction.status}</div>
    <div><strong>Ticker:</strong> {prediction.ticker}</div>
  </div>
)}

    </div>
  );
};

export default Dashboard;
