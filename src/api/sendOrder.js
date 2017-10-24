const sendOrder = (token, bill_detail) => (
  fetch('http://192.168.1.92:3000/cart',
  {
    method: 'POST',
    headers:{
      'Accept' : 'application/json',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
      'Content-Type': 'application/json'

    },
    body: JSON.stringify({token,bill_detail})
  })
  .then(res => res.text())
);

module.exports = sendOrder;
