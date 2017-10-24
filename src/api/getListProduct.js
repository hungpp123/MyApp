const getListProduct = (idType, page)=>{
  let url;
  if(idType !== 'COLLECTION'){
    url=`http://192.168.1.92:3000/product_by_type?id_type=${idType}&page=${page}`;
  }else{
    url=`http://192.168.1.92:3000/get_collection?page=${page}`;
  }

  return fetch(url)
  .then(res =>  res.json())
};
export default getListProduct;
