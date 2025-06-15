import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axiosInstance';
import Button from '../UI/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const [ticker, setTicker] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [plot, setPlot] = useState(null);

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        await axiosInstance.get('/protected-view/');
      } catch (error) {
        console.error('Error fetching protected data');
      }
    };
    fetchProtectedData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setPrediction(null);
    setPlot(null);

    if (!ticker.trim()) {
      setError("Please enter a valid ticker.");
      return;
    }

    setLoading(true);
    try {
      const response = await axiosInstance.post('/predict/', { ticker });
      const backendRoot = import.meta.env.VITE_BACKEND_ROOT;
      
      if (response.data.plot_img) {
        const plotUrl = `${backendRoot}${response.data.plot_img}`;
        setPlot(plotUrl);
      }

      if (response.data.error) {
        setError(response.data.error);
      } else {
        setPrediction(response.data);
      }
    } catch (err) {
      console.error('Prediction error:', err);
      setError('Something went wrong while fetching prediction.');
    } finally {
      setLoading(false);
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
        {error && <div className="text-danger mb-2">{error}</div>}
        <Button text={loading ? (
          <><FontAwesomeIcon icon={faSpinner} spin /> Predicting...</>
        ) : "See Prediction"} type="submit" disabled={loading} />
      </form>

      {prediction && (
        <div className="alert alert-success mt-4 w-50 text-center">
          <div><strong>Status:</strong> {prediction.status}</div>
          <div><strong>Ticker:</strong> {prediction.ticker}</div>
        </div>
      )}

      {plot && (
        <div className="mt-4 text-center w-75">
          <h5 className="mb-3">Prediction Plot</h5>
          <img
            src={plot}
            alt="Prediction Plot"
            className="img-fluid rounded shadow"
            style={{ maxHeight: '500px', width: '100%', objectFit: 'contain' }}
          />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
