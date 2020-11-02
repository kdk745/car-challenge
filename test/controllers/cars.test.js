import { expect } from 'chai';
import request from 'supertest';
import app from '../../src/index';
import bookshelf from '../../src/db';

/**
 * Tests for '/api/cars'.
 */
describe('Cars Controller Test', () => {
  before((done) => {
    bookshelf
      .knex('cars')
      .truncate()
      .then(() => done());
  });

  it('should return list of cars', (done) => {
    request(app)
      .get('/api/cars')
      .end((err, res) => {
        expect(res.status).to.be.equal(200);
        expect(res.body.data).to.be.an('array');
        expect(res.body.data).to.have.lengthOf(0);

        done();
      });
  });

  it('should create a new car with valid data', (done) => {
    const car = {
      make: 'Toyota',
      model: 'Rav4',
      package: 'XSE',
      color: 'Red',
      year: '2018',
      category: 'SUV',
      mileage: 24001,
      price: 2275000
    };

    request(app)
      .post('/api/cars')
      .send(car)
      .end((err, res) => {
        const { data } = res.body;

        expect(res.status).to.be.equal(201);
        expect(data).to.be.an('object');
        expect(data).to.have.property('id');
        expect(data).to.have.property('make');
        expect(data).to.have.property('created_at');
        expect(data).to.have.property('updated_at');
        expect(data.make).to.be.equal(car.make);

        done();
      });
  });

  it('should get information of car', (done) => {
    request(app)
      .get('/api/cars/1')
      .end((err, res) => {
        const { data } = res.body;

        expect(res.status).to.be.equal(200);
        expect(data).to.be.an('object');
        expect(data).to.have.property('id');
        expect(data).to.have.property('make');
        expect(data).to.have.property('model');
        expect(data).to.have.property('package');
        expect(data).to.have.property('color');
        expect(data).to.have.property('year');
        expect(data).to.have.property('category');
        expect(data).to.have.property('mileage');
        expect(data).to.have.property('price');
        expect(data).to.have.property('created_at');
        expect(data).to.have.property('updated_at');
        done();
      });
  });

  it('should respond with not found error if random car id is provided', (done) => {
    request(app)
      .get('/api/cars/1991')
      .end((err, res) => {
        const { code, message } = res.body.error;

        expect(res.status).to.be.equal(404);
        expect(code).to.be.equal(404);
        expect(message).to.be.equal('Car not found');

        done();
      });
  });

  it('should update a car', (done) => {
    const car = {
      make: 'Toyota',
      model: 'Rav4',
      package: 'XSE',
      color: 'Red',
      year: '2018',
      category: 'SUV',
      mileage: 24005,
      price: 2275000
    };

    request(app)
      .put('/api/cars/1')
      .send(car)
      .end((err, res) => {
        const { data } = res.body;

        expect(res.status).to.be.equal(200);
        expect(data).to.be.an('object');
        expect(data).to.have.property('id');
        expect(data).to.have.property('make');
        expect(data).to.have.property('model');
        expect(data).to.have.property('package');
        expect(data).to.have.property('color');
        expect(data).to.have.property('year');
        expect(data).to.have.property('category');
        expect(data).to.have.property('mileage');
        expect(data).to.have.property('price');
        expect(data).to.have.property('created_at');
        expect(data).to.have.property('updated_at');
        expect(data.mileage).to.be.equal(car.mileage);

        done();
      });
  });

  it('should delete a car if valid id is provided', (done) => {
    request(app)
      .delete('/api/cars/1')
      .end((err, res) => {
        expect(res.status).to.be.equal(204);

        done();
      });
  });

  it('should respond with not found error if random car id is provided for deletion', (done) => {
    request(app)
      .delete('/api/cars/1991')
      .end((err, res) => {
        const { code, message } = res.body.error;

        expect(res.status).to.be.equal(404);
        expect(code).to.be.equal(404);
        expect(message).to.be.equal('Car not found');

        done();
      });
  });

  it('should respond with bad request for empty JSON in request body', (done) => {
    const car = {};

    request(app)
      .post('/api/cars')
      .send(car)
      .end((err, res) => {
        const { code, message } = res.body.error;

        expect(res.status).to.be.equal(400);
        expect(code).to.be.equal(400);
        expect(message).to.be.equal('Empty JSON');

        done();
      });
  });
});
