import axios from 'axios';

export const getUsers = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users: ', error);
    throw error;
  }
};

export const getUserById = async (id) => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching user with id ${id}: `, error);
      throw error;
    }
  };