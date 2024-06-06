import { CardComponent } from "../components/components.js";
const Base_Url=" https://jsonplaceholder.typicode.com/users";

export async function getData(enpoint){
    try{
        const data =await fetch (`${Base_Url}${enpoint}`);
        const res=await data.json();
        return res;
    }
    catch(error){
        console.log("error" ,error);
    }
}