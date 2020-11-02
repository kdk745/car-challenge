import { Router } from 'express';

import * as carController from '../controllers/cars';
import { findCar, carValidator } from '../validators/carValidator';

const router = Router();

/**
 * GET /api/cars.
 */
router.get('/', carController.fetchAll);

/**
 * GET /api/cars/:id.
 */
router.get('/:id', carController.fetchById);

/**
 * POST /api/cars.
 */
router.post('/', carValidator, carController.create);

/**
 * PUT /api/cars/:id.
 */
router.put('/:id', findCar, carValidator, carController.update);

/**
 * DELETE /api/cars/:id.
 */
router.delete('/:id', findCar, carController.deleteCar);

export default router;
