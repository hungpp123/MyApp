const ChangeInfo = (token, name, phone, address) => (
  fetch("http://192.168.1.92:3000/change_info",
  {
    method: "POST",
    headers:{
      "Content-Type": "application/json",
      "Accept" : "application/json"
    },
    body: JSON.stringify({token, name, phone, address})
  })
  .then(res => res.json())
);

module.exports = ChangeInfo;
