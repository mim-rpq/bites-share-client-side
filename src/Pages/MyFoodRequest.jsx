import React, { useEffect, useState } from 'react';
import MyFoodRequestList from './MyFoodRequestList';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import axios from 'axios';
import Spinner from '../Components/Spinner';

const MyFoodRequest = () => {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user?.accessToken) return;

    setLoading(true);
    axios
      .get(`http://localhost:5000/foodRequests`, {
        headers: { Authorization: `Bearer ${user.accessToken}` }
      })
      .then(res => {
        setRequests(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [user]);

  if (loading) return <Spinner />;
  if (error) return <div>Error: {error}</div>;

  return <MyFoodRequestList requests={requests} />;
};

export default MyFoodRequest;
