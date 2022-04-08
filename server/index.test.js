const app = require('./index.js');
const supertest = require('supertest');


describe('/products', () => {
  it('should return an array', async () => {
    const res = await supertest(app).get('/products');
    expect(res.statusCode).toEqual(200);
    expect(res.body instanceof Array).toBeTruthy();
  });
})

