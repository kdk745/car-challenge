/**
 * Delete existing entries and seed values for `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function seed(knex) {
  return knex('cars')
    .del()
    .then(() => {
      return knex('cars').insert([
        {
          make: 'Ford',
          model: 'F10',
          package: 'Base',
          color: 'Silver',
          year: '2010',
          category: 'Truck',
          mileage: 120123,
          price: 1999900,
          updated_at: new Date()
        },
        {
          make: 'Toyota',
          model: 'Camry',
          package: 'SE',
          color: 'White',
          year: '2019',
          category: 'Sedan',
          mileage: 3999,
          price: 2899000,
          updated_at: new Date()
        },
        {
          make: 'Toyota',
          model: 'Rav4',
          package: 'SE',
          color: 'Red',
          year: '2018',
          category: 'SUV',
          mileage: 24001,
          price: 2275000,
          updated_at: new Date()
        },
        {
          make: 'Ford',
          model: 'Bronco',
          package: 'Badlands',
          color: 'Burnt Orange',
          year: '2022',
          category: 'SUV',
          mileage: 1,
          price: 4499000,
          updated_at: new Date()
        }
      ]);
    });
}
