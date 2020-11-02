import Joi from '@hapi/joi';

import validate from '../utils/validate';
import * as carService from '../services/carService';

// Validation schema
const schema = Joi.object({
  make: Joi.string().label('Make').max(90).required(),
  model: Joi.string().label('Model').max(90).required(),
  package: Joi.string().label('Package').max(90).required(),
  color: Joi.string().label('Color').max(90).required(),
  year: Joi.number().label('Year').required(),
  category: Joi.string().label('Category').max(90).required(),
  mileage: Joi.number().label('Mileage').required(),
  price: Joi.number().label('Price').required()
});

/**
 * Validate create/update car request.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */
function carValidator(req, res, next) {
  return validate(req.body, schema)
    .then(() => next())
    .catch((err) => next(err));
}

/**
 * Validate cars existence.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */
function findCar(req, res, next) {
  return carService
    .getCar(req.params.id)
    .then(() => next())
    .catch((err) => next(err));
}

export { findCar, carValidator };
