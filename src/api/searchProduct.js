const searchProduct = (key)=>{
  const url=`http://192.168.1.92:3000/search?key=${key}`;
  return fetch(url)
  .then(res =>  res.json())
};
export default searchProduct;
