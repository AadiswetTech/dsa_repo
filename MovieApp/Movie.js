document.addEventListener("DOMContentLoaded", function () {
         let APIkey="8c24a997";
         let searchInput = document.getElementById("searchInput");
         let searchBtn = document.getElementById("searchBtn");
const getData=async (movie)=>
{
         let fetchData=await fetch(`http://www.omdbapi.com/?apikey=${APIkey}&t=${movie}`);
        let jsonData= await fetchData.json()
       console.log(jsonData)

       let div=document.createElement("div");
       div.classList.add("moviecard");
       div.innerHTML=`
       <img src=${jsonData.Poster}>
              <div class="cardText">
       <h1>${jsonData.Title}</h1>
       <a href=""></a>
       <p><span>${jsonData.Released}</span></p>
       <p>${jsonData.Director}</p>
       <p><span>${jsonData.Genre}</span></p>
       <p><span></span></p>
      
</div>`
document.querySelector(".card").appendChild(div)
       
}
searchBtn.addEventListener("click",function()
{
         let movieName=searchInput.value;
         if(movieName !="")
         {
          getData(movieName);
         }else{
                  document.querySelector(".card").innerHTML="<h1>first search movie name</h1>"
         }


})
getData()
 


})