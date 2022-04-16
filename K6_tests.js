import http from "k6/http";
import { check, sleep } from "k6";
export let options = {
  vus: 1000,
  duration: "10s",
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(95)<2000'], // 95% of requests should be below 2000ms
  }
};

/*export default function() {
  const rnd =Math.floor(Math.random() * (1000000 - 900000) + 900000);
  const before = new Date().getTime();
  const T = 1; // time needed to complete a VU iteration

  let res = http.get(`http://localhost:3000/products/${rnd}`);
  check(res, {
    "success": (r) => r.status == 200
  });

  const after = new Date().getTime();
  const diff = (after - before) / 1000;
  const remainder = T - diff;
  if (remainder > 0) {
    sleep(remainder);
  } else {
    console.warn(`Timer exhausted! The execution time of the test took longer than ${T} seconds`);
  }

};*/

/*export default function() {
  const rnd =Math.floor(Math.random() * (1000000 - 900000) + 900000);
  const before = new Date().getTime();
  const T = 1; // time needed to complete a VU iteration

  let res = http.get(`http://localhost:3000/products/${rnd}/styles`);
  check(res, {
    "success": (r) => r.status == 200
  });

  const after = new Date().getTime();
  const diff = (after - before) / 1000;
  const remainder = T - diff;
  if (remainder > 0) {
    sleep(remainder);
  } else {
    console.warn(`Timer exhausted! The execution time of the test took longer than ${T} seconds`);
  }
};*/

export default function() {
  const rnd =Math.floor(Math.random() * (1000000 - 900000) + 900000);
  const before = new Date().getTime();
  const T = 1; // time needed to complete a VU iteration

  let res = http.get(`http://localhost:3000/products/${rnd}/related`);
  check(res, {
    "success": (r) => r.status == 200
  });

  const after = new Date().getTime();
  const diff = (after - before) / 1000;
  const remainder = T - diff;
  if (remainder > 0) {
    sleep(remainder);
  } else {
    console.warn(`Timer exhausted! The execution time of the test took longer than ${T} seconds`);
  }

};