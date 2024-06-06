
import { CardComponent } from "../components/components.js";
import { getdata } from "../store/fatchApi.js";
document.addEventListener("DOMContentLoaded", () => {
  const renderArea = document.getElementById("renderArea");
  // products.forEach((product) => {
  //   const productCardHTML = CardComponent(product);
  //   renderArea.innerHTML += productCardHTML;
  // });
  const BASE_URL="http://127.0.0.1:5500/data/products.json";
  fetch(BASE_URL).then((res)=>res.json()).then((data)=>{
    let products=data.products;
    console.log("product ",products)
    products.map((product)=>renderArea.innerHTML+=CardComponent(product));
  });
  console.log("This is print");
  // fetch (BASE_URL
    
  // ).then((res)=>res.json).then((data)=>{console.log(data);})
});
let comment =await getdata("comments");
console.log("Comment:",comment);
let album =await getdata("albums");
console.log("Album:",album);