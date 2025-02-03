import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001/api';

export const signupUser = async (data) => {
  return axios.post(`${API_BASE_URL}/signup`, data);
};

export const loginUser = async (data) => {
  return axios.post(`${API_BASE_URL}/login`, data);
};

export const getKanjiList = async () => {
  return axios.get(`${API_BASE_URL}/kanji`);
};

// Add additional functions for flashcard data, progress, etc.
