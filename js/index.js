import { CardComponent} from "../components/components.js";

// document.addEventListener("DOMContentLoaded", () => {}

import { getData } from "../store/fatchApi.js";

let comments = await getData("comments");
let albums = await getData("albums");
console.log("comments", comments);
console.log("albums", albums);
const renderArea = document.getElementById("renderArea");
const BASE_URL = "http://127.0.0.1:5500/data/products.json";
fetch(BASE_URL)
  .then((a) => a.json())
  .then((data) => {
    let products = data.result.products;
    console.log(products);
    products.map((product) => (renderArea.innerHTML += CardComponent(product)));
  });
