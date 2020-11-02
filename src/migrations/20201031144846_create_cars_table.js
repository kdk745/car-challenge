/**
 * Create table `cars`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function up(knex) {
  return knex.schema.createTable('cars', (table) => {
    table.increments();
    table.string('make');
    table.string('model');
    table.string('package');
    table.string('color');
    table.integer('year');
    table.string('category');
    table.integer('mileage');
    table.integer('price');
    table.timestamp('created_at').notNull().defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNull();
  });
}

/**
 * Drop `cars`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable('cars');
}
