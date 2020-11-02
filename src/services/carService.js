import Boom from '@hapi/boom';

import Car from '../models/car';

/**
 * Get all cars.
 *
 * @returns {Promise}
 */
export function getAllCars() {
  return Car.fetchAll();
}

/**
 * Get a car.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function getCar(id) {
  return new Car({ id })
    .fetch()
    .then((car) => car)
    .catch(Car.NotFoundError, () => {
      throw Boom.notFound('Car not found');
    });
}

/**
 * Create new car.
 *
 * @param   {Object}  car
 * @returns {Promise}
 */
export function createCar(car) {
  return new Car({
    make: car.make,
    model: car.model,
    package: car.package,
    color: car.color,
    year: car.year,
    category: car.category,
    mileage: car.mileage,
    price: car.price
  }).save();
}

/**
 * Update a car.
 *
 * @param   {Number|String}  id
 * @param   {Object}         car
 * @returns {Promise}
 */
export function updateCar(id, car) {
  return new Car({ id }).save({
    make: car.make,
    model: car.model,
    package: car.package,
    color: car.color,
    year: car.year,
    category: car.category,
    mileage: car.mileage,
    price: car.price
  });
}

/**
 * Delete a car.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function deleteCar(id) {
  return new Car({ id }).fetch().then((car) => car.destroy());
}
