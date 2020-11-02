import db from '../db';

const TABLE_NAME = 'cars';

/**
 * Car model.
 */
class Car extends db.Model {
  /**
   * Get table name.
   */
  get tableName() {
    return TABLE_NAME;
  }

  /**
   * Table has timestamps.
   */
  get hasTimestamps() {
    return true;
  }
}

export default Car;
