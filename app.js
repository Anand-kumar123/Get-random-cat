cur_Url="https://api.thecatapi.com/v1/images/0XYvRd7oD";

const getFacts=async ()=>{
    console.log("getting data....")
 let promise= await fetch(cur_Url);
  console.log(promise);
};
