import axios from 'axios';

//const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api/v1';
const baseURL = 'http://localhost:8080/api/v1';

const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, 
});

// To test, use localStorage.removeItem('readbrew_token') in console 
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('readbrew_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

apiClient.interceptors.response.use(
  (response) => {
    return response; 
  },
  (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      
      localStorage.removeItem('readbrew_token');
      
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export const registerUser = async (username, email, password) => {
  try {
    const response = await apiClient.post('/auth/register', { 
      username, 
      email, 
      password,
      agreedToTerms: true
    });
    
    return response.data; 
  } catch (error) {
    if (error.response && error.response.data && typeof error.response.data === 'string') {
      throw new Error(error.response.data);
    }
    throw new Error('Não foi possível registrar no momento. A taverna está cheia!');
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await apiClient.post('/auth/login', { 
      email, 
      password 
    });
    
    const token = response.data;
    localStorage.setItem('readbrew_token', token);
    
    return token;
  } catch (error) {
    if (error.response && (error.response.status === 403 || error.response.status === 401)) {
        throw new Error('E-mail ou senha incorretos. Tente de novo!');
    }
    throw new Error('Erro ao tentar sentar na mesa. Verifique a conexão.');
  }
};

export const logoutUser = () => {
  localStorage.removeItem('readbrew_token');
  window.location.href = '/login';
};