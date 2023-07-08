let parent=document.getElementById("parent")
let data;
let newdata;
let check=0;
let arr=JSON.parse(localStorage.getItem("cart"))||[]
let search=async (order)=>{
    // if(order==undefined){
    try{
   let response=await fetch("http://localhost:3000/foods")
  data=await response.json()
   console.log(data)
   check=0;
   display(data)
    }catch(err){
        console.log(err)
    }
}
// else{
//     try{
//         let response=await fetch('http://localhost:3000/foods?_sort=price&_order=${order}')
//        data=await response.json()
//         console.log(data)
//         display(data)
//          }catch(err){
//              console.log(err)
//          } 
// }

search()

let display=(data)=>{
console.log(check)
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
    btn.setAttribute("class", "addtoCart")
    btn.textContent="Add to Cart"
    btn.addEventListener("click",()=>{
        arr.push(ele)
        localStorage.setItem("cart",JSON.stringify(arr))

      
    })

  //hover data//
  let h3hover=document.createElement("h3")
  h3hover.textContent=ele.title
  let hr1=document.createElement("hr")
  let hr2=document.createElement("hr")
  let desc=document.createElement("p")
  desc.setAttribute("class","desc")
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
check=1
display(newdata)
})

document.getElementById("Chinese").addEventListener("click",()=>{
    newdata=data.filter((ele)=>{
    return ele.key==="Chinese"
    })
    console.log(newdata)
    check=1;
    display(newdata)
    })

    document.getElementById("Deserts").addEventListener("click",()=>{
      newdata=data.filter((ele)=>{
        return ele.key==="Desert"
        })
        console.log(newdata)
        check=1;
        display(newdata)
        })

        document.getElementById("Main-Course").addEventListener("click",()=>{
           newdata=data.filter((ele)=>{
            return ele.key==="Main-Course"
            })
            console.log(newdata)
            check=1;
            display(newdata)
            })

            document.getElementById("all").addEventListener("click",()=>{
                check=0
                display(data)
                })

                document.getElementById("Breads").addEventListener("click",()=>{
                   newdata=data.filter((ele)=>{
                    return ele.key==="Breads"
                    })
                    console.log(newdata)
                    check=1;
                    display(newdata)
                    })



                    document.getElementById("lowtohigh").addEventListener("click",()=>{
                          if(check==1){
                            newdata.sort(ascending)
                            console.log(newdata)
                            display(newdata)
                          }else{
                            data.sort(ascending)
                            console.log(data)
                            display(data)
                          }
                    })
                    document.getElementById("hightolow").addEventListener("click",()=>{
                        if(check==1){
                          newdata.sort(descending)
                          console.log(newdata)
                          display(newdata)
                        }else{
                          data.sort(descending)
                          console.log(data)
                          display(data)
                        }
                  })


                    function ascending(a, b) {
                        return a.price - b.price;
                      }

                      function descending(a, b) {
                        return b.price - a.price;
                      }