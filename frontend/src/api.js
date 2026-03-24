const API_URL = process.env.REACT_APP_API_URL;

export const getMessage = async () => {
  const response = await fetch(`${API_URL}/health`);
  return response.json();
};
