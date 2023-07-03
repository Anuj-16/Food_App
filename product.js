let parent=document.getElementById("parent")
let search=async ()=>{
    try{
   let response=await fetch("http://localhost:3000/foods")
   let data=await response.json()
   console.log(data)
   display(data)
    }catch(err){
        console.log(err)
    }
}
search()

let display=(data)=>{
data.map((ele)=>{
    parent.innerHtml=""
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.src=ele.img
    let h3=document.createElement("h3")
    h3.textContent=ele.title
    let p=document.createElement("p")
    p.textContent=ele.price
    div.append(img,h3,p)
    parent.append(div)

})

}