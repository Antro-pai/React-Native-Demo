const button=document.getElementById("search-button")
const input=document.getElementById("city-input");

const userName=document.getElementById("user-name");
const cityName=document.getElementById("city-name")
const zipcode=document.getElementById("city-zipcode")


async function getData(name){
    const promise=await fetch(`https://jsonplaceholder.typicode.com/users/${name}`);
return await promise.json()
}
button.addEventListener("click",async ()=>{
   const value=input.value;
   const result= await getData(value);
   userName.innerText=`${result.username}`;

});