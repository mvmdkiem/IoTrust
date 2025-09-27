import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,          // 동시에 10명 가상 사용자
  duration: '30s',  // 30초 동안 부하
};

export default function () {
  const res = http.get('http://localhost:3000/orders?userId=1');
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}
