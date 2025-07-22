function genTicket(n) {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 10); // 0–9
  }
  return arr;
}

function sum(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

export { sum, genTicket };
