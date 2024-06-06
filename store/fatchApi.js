const BASE_URL=" https://jsonplaceholder.typicode.com/";
export async function getdata(endpoint){
    // fetch(`${BASE_URL}${endpoint}`)
    // .then((res)=>res.json())
    // .then((data)=>console.log(data))
   
    try{
         const data=await fetch(`${BASE_URL}${endpoint}`);
        const res=await data.json();
        // console.log(res);
        return res;
    }
    catch(error){
        console.log("Error please check it again",error);
    }
}