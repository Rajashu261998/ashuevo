// On clicking remove button the item should be removed from DOM as well as localstorage.
let bucketData=JSON.parse(localStorage.getItem("items"))


bucketData.map(function(el,index)
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
  button.innerText="remove_to_bucket"
  button.setAttribute("id","remove")

  button.addEventListener("click",function(){
      remove_to_bucket(el,index)
  })

  box.append(image,name,price,button)
  document.querySelector("#items").append(box)
})

function remove_to_bucket(el,index)
{
    bucketData.splice(index,1)
    localStorage.setItem("items",JSON.stringify(bucketData))
    window.location.reload()
}

let total =bucketData.reduce(function(sum,el,index,arr){
    return sum+Number(el.price)
},0)
document.querySelector("#bucket_total").innerText=total

