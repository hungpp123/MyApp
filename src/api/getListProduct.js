const getListProduct = (idType, page)=>{
  const url=`http://192.168.1.92:3000/product_by_type?id_type=${idType}&page=${page}`;
  return fetch(url)
  .then(res =>  res.json())
};
export default getListProduct;
