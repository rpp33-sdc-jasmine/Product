const {Pool, Client} = require('pg');
const {key} = require('../config.js')

// connet with a connection pool
describe('testing postgres', () => {
  let pool;

  beforeAll(() => {
    pool = new Pool({
      user:'root',
      host: 'localhost',
      database: 'sdc',
      password: key,
      port: 5432,
    });
  })

  afterAll(async() => {
    await pool.end();
  })

  it('Test product table with query', async() => {
    const client = await pool.connect();
    try{
      await client.query('BEGIN');

      const {rows} = await client.query('SELECT name FROM product WHERE id = 1');
      expect(rows[0]["name"]).toBe('Camo Onesie');
    } catch(err) {
      throw err;
    } finally {
      client.release();
    }
  })
})


