const app = require('./index.js');
const supertest = require('supertest');

beforeAll(() => jest.setTimeout(20000))

describe('/products', () => {
  it('should return an array', async () => {
    const res = await supertest(app).get('/products');
    expect(res.statusCode).toEqual(200);
    expect(res.body instanceof Array).toBeTruthy();
  });

  it('should take page and count as query params', async() => {
    res = await supertest(app).get('/products')
    .query({page:1, count: 5});
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBe(5);
  });

  it('should retrun data in objects', async() => {
    const res = await supertest(app).get('/products');
    expect(res.statusCode).toEqual(200);
    expect(res.body[0]).toBeInstanceOf(Object);
  });
});

describe('/products/:product_id', () => {
  it('should return info of a specified product', async () => {
    const res = await supertest(app).get('/products/3');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeDefined();
    expect(res.body).toHaveProperty('category', 'Pants');
    expect(res.body).toHaveProperty('id', 3);
    expect(res.body).toHaveProperty('name', 'Morning Joggers');
  });

  it('should return data in the correct format', async() => {
    const res = await supertest(app).get('/products/3');
    expect(res.body.features).toBeInstanceOf(Array);
    expect(res.body.features[0]).toBeInstanceOf(Object);
  });
});

describe('/products/:product_id/styles', () => {
  jest.setTimeout(20000);
  it('should return style info in the correct format', async () => {
    const res = await supertest(app).get('/products/3/styles');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeDefined();
    expect(res.body).toBeInstanceOf(Object);
    expect(res.body).toHaveProperty('product_id');
    expect(res.body).toHaveProperty('results');
    expect(res.body.results).toBeInstanceOf(Array);
    let results = res.body.results[0];
    expect(results).toBeInstanceOf(Object);
    expect(results).toHaveProperty('photos');
    expect(results).toHaveProperty('skus');
    expect(results.skus).toBeInstanceOf(Object);

  });
});

describe('/products/:product_id/related', () => {
  it('should return style info in the correct format', async () => {
    const res = await supertest(app).get('/products/3/related');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeDefined();
    expect(res.body).toBeInstanceOf(Array);
  });
});