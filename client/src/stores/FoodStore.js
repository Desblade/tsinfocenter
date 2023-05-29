import { makeAutoObservable } from 'mobx';
import { addFoodAPI, getFoodAPI } from '../utils/http/foodAPI';

class FoodStore {
  constructor() {
    this._food = [];

    makeAutoObservable(this);
  }
  setFood(food) {
    this._food = food;
  }

  async getFoodFromAPI() {
    const dataFromAPI = await getFoodAPI();

    this.setFood(dataFromAPI);
  }

  async addFoodFromAPI(dataFood) {
    try {
      const data = await addFoodAPI(dataFood);

      this.setFood([...this.food, data]);
    } catch (e) {
      throw { error: e.response.data.message };
    }
  }

  get food() {
    return this._food;
  }
}

export {
  FoodStore,
};
