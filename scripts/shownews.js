let data=JSON.parse(localStorage.getItem("data"));
console.log(data)

displayData(data)

function displayData(data){
    let container=document.querySelector("#detailed_news")
    let div=document.createElement("div")
   let image= document.createElement("img");
   image.src=data.urlToImage;
   let title=document.createElement("h3")
   title.innerText=data.title;
   let discreption=document.createElement("h4")
   discreption.innerText=data.description;
   let content=document.createElement("p");
   content.innerText=data.content;
   div.append(image,title,discreption,content)
   container.append(div)
}

//border niye kaj korte hobe


