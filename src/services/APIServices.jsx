import axios from 'axios';

const API_BASE_URL = 'https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne';

export const sendPhaseOneData = async (userData) => {
  try {
    const response = await axios.post(API_BASE_URL, userData);
    return response.data;
  } catch (error) {
    console.error('Failed to send user data:', error);
    throw error;
  }
};
