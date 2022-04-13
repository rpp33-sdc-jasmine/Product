import http from "k6/http";
import { check, sleep } from "k6";
export let options = {
  vus: 300,
  duration: "30s"
};
/*export default function() {
  //or use product id 999999
  //const rnd = Math.floor(Math.floor(Math.random() * 1000000));
  let res = http.get('http://localhost:3000/products/999999');
  check(res, {
    "success": (r) => r.status == 200
  });
};*/

export default function() {
  //or use product id 999999
  //const rnd = Math.floor(Math.floor(Math.random() * 1000000));
  let res = http.get('http://localhost:3000/products/999998/styles');
  check(res, {
    "success": (r) => r.status == 200
  });
};