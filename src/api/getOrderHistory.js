const getOrderHistory = (token) => (
  fetch("http://192.168.1.92:3000/order_history",
  {
    method: "POST",
    headers:{
      "Accept" : "application/json",
      "Content-Type": "application/json",
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'
    },
    body: JSON.stringify({token})
  })
  .then(res => res.json())
);

module.exports = getOrderHistory;
