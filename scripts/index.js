// Add the coffee to local storage with key "coffee"
const url=`https://masai-mock-api.herokuapp.com/coffee/menu`

fetch(url)
.then(function(res){
    return res.json();
})
.then(function(res){
    appendData(res.menu.data)
})
.catch(function(err){
    console.log(err)
})

let bucketData=JSON.parse(localStorage.localStorage("items")) || []
let count=document.getElementById("item_count")
  count.innerText=bucketData.length

 function appendData(data){
     data.forEach(function(el)
     {

     
  

  let box=document.createElement("div")
  box.setAttribute("class","coffeediv")

  let image=document.createElement("img")
  image.src=el.image

  let name=document.createElement("p")
  name.innerText=el.name

  let price=document.createElement("p")
  price.innerText=el.price

  let button=document.createElement("button")
  button.innerText="bucket"
  button.setAttribute("id","bucket")

  button.addEventListener("click",function(){
      button(el)
  })

  box.append(image,name,price,button)
  document.querySelector("#items").append(box)
})

function bucket(el){
    data.push(el)
    alert("item added to bucket")
    localStorage.setItem("items",JSON.stringify(bucketData))
    window.location.reload()
}


}