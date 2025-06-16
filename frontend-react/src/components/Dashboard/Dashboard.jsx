import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axiosInstance';
import Button from '../UI/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
// import Background from './UI/Background'
import Background from '../UI/Background';

const Dashboard = () => {
  const [ticker, setTicker] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [plots, setPlots] = useState({});

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
    setPlots({});

    if (!ticker.trim()) {
      setError("Please enter a valid ticker.");
      return;
    }

    setLoading(true);
    try {
      const response = await axiosInstance.post('/predict/', { ticker });
      const backendRoot = import.meta.env.VITE_BACKEND_ROOT;

      if (response.data.error) {
        setError(response.data.error);
      } else {
        const {
          plot_img,
          plot_100_dma,
          plot_200_dma,
          ...otherData
        } = response.data;

        setPlots({
          plot_img: plot_img ? `${backendRoot}${plot_img}` : null,
          plot_100_dma: plot_100_dma ? `${backendRoot}${plot_100_dma}` : null,
          plot_200_dma: plot_200_dma ? `${backendRoot}${plot_200_dma}` : null,
        });

        setPrediction({ ticker, ...otherData });
      }
    } catch (err) {
      console.error('Prediction error:', err);
      setError('Something went wrong while fetching prediction.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Background />

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

      {/* {prediction && (
        <div className="alert alert-success mt-4 w-50 text-center">
          <div><strong>Status:</strong> {prediction.status}</div>
          <div><strong>Ticker:</strong> {prediction.ticker}</div>
        </div>
      )} */}

      {Object.values(plots).some(Boolean) && (
        <div className="mt-4 text-center w-75">
          <h5 className="mb-3">Prediction Plots</h5>

          {plots.plot_img && (
            <div className="mb-4">
              <h6>Closing Price</h6>
              <img
                src={plots.plot_img}
                alt="Closing Price"
                className="img-fluid rounded shadow mb-3"
                style={{ maxHeight: '500px', width: '100%', objectFit: 'contain' }}
              />
            </div>
          )}

          {plots.plot_100_dma && (
            <div className="mb-4">
              <h6>100-Day Moving Average</h6>
              <img
                src={plots.plot_100_dma}
                alt="100 DMA"
                className="img-fluid rounded shadow mb-3"
                style={{ maxHeight: '500px', width: '100%', objectFit: 'contain' }}
              />
            </div>
          )}

          {plots.plot_200_dma && (
            <div className="mb-4">
              <h6>200-Day Moving Average</h6>
              <img
                src={plots.plot_200_dma}
                alt="200 DMA"
                className="img-fluid rounded shadow mb-3"
                style={{ maxHeight: '500px', width: '100%', objectFit: 'contain' }}
              />
            </div>
          )}
        </div>
      )}
    </div>
    </>
  );
};

export default Dashboard;
