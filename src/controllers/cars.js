import HttpStatus from 'http-status-codes';

import * as carService from '../services/carService';

/**
 * Get all cars.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchAll(req, res, next) {
  carService
    .getAllCars()
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}

/**
 * Get a car by its id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchById(req, res, next) {
  carService
    .getCar(req.params.id)
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}

/**
 * Create a new car.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function create(req, res, next) {
  carService
    .createCar(req.body)
    .then((data) => res.status(HttpStatus.CREATED).json({ data }))
    .catch((err) => next(err));
}

/**
 * Update a car.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function update(req, res, next) {
  carService
    .updateCar(req.params.id, req.body)
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}

/**
 * Delete a car.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function deleteCar(req, res, next) {
  carService
    .deleteCar(req.params.id)
    .then((data) => res.status(HttpStatus.NO_CONTENT).json({ data }))
    .catch((err) => next(err));
}
