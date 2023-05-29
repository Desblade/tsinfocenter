import { $host } from './http';

const getFoodAPI = async () => {
  const { data } = await $host.get('/food/');

  return data;
};

const addFoodAPI = async (foodData) => {
  const { data } = await $host.post('/food/', foodData);

  return data;
}

export {
  getFoodAPI,
  addFoodAPI,
};
