import http from "k6/http";
import { check, sleep } from "k6";
export let options = {
  vus: 10,
  duration: "10s"
};
export default function() {
  //or use product id 999999
  const rnd = Math.floor(Math.floor(Math.random() * 1000000));
  let res = http.get(`http://localhost:3000/products/${rnd}`);
  check(res, {
    "success": (r) => r.status == 200
  });
};