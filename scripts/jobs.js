
   //9e9b7d1c2042476586e5d3584b6e7cab
   //d4ac6b2fbad9403e8172211680d85d0d

   let url=`https://newsapi.org/v2/everything?q=startup&apiKey=0ba8779ea8f04790a88db597c15778eb`;
   let url1=`https://newsapi.org/v2/everything?q=service&apiKey=0ba8779ea8f04790a88db597c15778eb`;
   let url2=`https://newsapi.org/v2/everything?q=jobs&apiKey=0ba8779ea8f04790a88db597c15778eb`;
   
    fetch(url).then(function(res){
        return res.json();
    }).then(function(res){
        console.log(res)
        append(res.articles)
    })

    fetch(url1).then(function(res){
        return res.json();
    }).then(function(res){
        console.log(res)
        append1(res.articles)
    })

    fetch(url2).then(function(res){
        return res.json();
    }).then(function(res){
        console.log(res)
        append2(res.articles)
    })


  let left= document.getElementById("left");
  let middle= document.getElementById("middle");
  let right= document.getElementById("right");

   function append(data){
    data.forEach(function(el){
          let div=document.createElement("div");
          div.id="div";
          let title=document.createElement("p")
          let image=document.createElement("img");
          let description=document.createElement("h5");
          title.innerText=el.title;
            image.src=el.urlToImage;
            description.innerText=el.description;

            div.append(image,title,description)
            div.addEventListener("click",function(){
            fulldata(el)
        })
            left.append(div);
            
       })  
   }

   function append1(data)
{
    data.forEach(function(el){
          let div=document.createElement("div");
          div.id="div";
          let title=document.createElement("p")
          let image=document.createElement("img");
          let description=document.createElement("h5");
          title.innerText=el.title;
            image.src=el.urlToImage;
            description.innerText=el.description;

            div.append(image,title,description)
            div.addEventListener("click",function(){
            fulldata(el)
        })
            middle.append(div);
       })

}

function append2(data){

    data.forEach(function(el){
          let div=document.createElement("div");
          div.id="div";
          let title=document.createElement("p")
          let image=document.createElement("img");
          let description=document.createElement("h5");
          title.innerText=el.title;
            image.src=el.urlToImage;
            description.innerText=el.description;

            div.append(image,title,description)
            div.addEventListener("click",function(){
            fulldata(el)
        })
            right.append(div);
       })

}

function  fulldata(ele){
    localStorage.setItem("data",JSON.stringify(ele))
    window.location.href="shownews.html";
}


let flag = true;

function dikhaobar() {

    if(flag == true) {
    let side_div = document.getElementById("side-div")

    side_div.style.display = "block"

    let videos = document.getElementById("popular-videos")

    videos.style.width="85%"
    videos.style.marginLeft = "15%"
    flag = false
    }else {
    
    let side_div = document.getElementById("side-div")
    side_div.style.display = "none"
    let videos = document.getElementById("popular-videos")
    videos.style.width="95%"
    videos.style.marginLeft = "5%"
    flag = true
    }
}