let parent=document.getElementById("parent")
let data;
let search=async ()=>{
    try{
   let response=await fetch("http://localhost:3000/foods")
  data=await response.json()
   console.log(data)
   display(data)
    }catch(err){
        console.log(err)
    }
}
search()

let display=(data)=>{

    parent.innerHTML = "";
data.map((ele)=>{
    let div=document.createElement("div")
    div.setAttribute("class","card")
  


    let img=document.createElement("img")
    img.src=ele.img
    img.setAttribute("class","image")
    let h31=document.createElement("h3")
    h31.textContent="Mr Chef's"
    let h3=document.createElement("h3")
    h3.textContent=ele.title
    let p=document.createElement("p")
    p.textContent="Rs"+" "+ ele.price
    let btn=document.createElement("button")
    btn.textContent="Add to Cart"
    btn.addEventListener("click",()=>{
        localStorage.setItem("cart",JSON.stringify(ele))

      
    })

  //hover data//
  let h3hover=document.createElement("h3")
  h3hover.textContent=ele.title
  let hr1=document.createElement("hr")
  let hr2=document.createElement("hr")
  let desc=document.createElement("p")
  desc.textContent=ele.description

  let key=document.createElement("h3")
  key.textContent=ele.key



//   div.addEventListener("click", function() {
    div.append(img,h31,h3,p,btn)
   
   
    // div.remove(h3hover,hr1,desc,hr2,key)
    // parent.append(div)
   
    //    });

    div.addEventListener("click", function() {
        div.removeChild(img)
        div.removeChild(h31)
        div.removeChild(h3)
        div.removeChild(p)
        div.removeChild(btn)
        div.append(h3hover,hr1,desc,hr2,key,btn)
       
       
           });

           div.addEventListener("dblclick", function() {
            div.removeChild(h3hover)
            div.removeChild(hr1)
            div.removeChild(desc)
            div.removeChild(hr2)
            div.removeChild(key)
            div.append(img,h31,h3,p,btn)
           
           
               });
           parent.append(div)

      

           

           


          
    
})




      
}

document.getElementById("Italian").addEventListener("click",()=>{
let newdata=data.filter((ele)=>{
return ele.key==="Italian"
})
console.log(newdata)
display(newdata)
})

document.getElementById("Chinese").addEventListener("click",()=>{
    let newdata=data.filter((ele)=>{
    return ele.key==="Chinese"
    })
    console.log(newdata)
    display(newdata)
    })

    document.getElementById("Deserts").addEventListener("click",()=>{
        let newdata=data.filter((ele)=>{
        return ele.key==="Desert"
        })
        console.log(newdata)
        display(newdata)
        })

        document.getElementById("Main-Course").addEventListener("click",()=>{
            let newdata=data.filter((ele)=>{
            return ele.key==="Main-Course"
            })
            console.log(newdata)
            display(newdata)
            })

            document.getElementById("all").addEventListener("click",()=>{
                
                display(data)
                })

                document.getElementById("Breads").addEventListener("click",()=>{
                    let newdata=data.filter((ele)=>{
                    return ele.key==="Breads"
                    })
                    console.log(newdata)
                    display(newdata)
                    })