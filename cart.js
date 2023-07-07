let item1=document.getElementById("items1");
let priceItems=document.getElementById("priceItems");
let cart1 = JSON.parse(localStorage.getItem("cart1")) || [];
let cartl2= JSON.parse(localStorage.getItem("cart")) || [];
localStorage.setItem("price",0);
let MyPrice=localStorage.getItem("price");
console.log(MyPrice);

console.log(cartl2.length);
let lh=cartl2.length;
showData(lh);
async function showData(lh){
  let result=await fetch("http://localhost:3000/Data");
  let data=await result.json();
  console.log(data);
  cart1=data;
  item1.innerHTML=data.length+lh;
  localStorage.setItem("cart1",JSON.stringify(data));
  priceData(data);
  Appendata(data);
  
}

// function lengthData(l){
//   let num=l;
//   num=num+lh;

// }
// console.log(data);


//  cartData1(cart);
//  function cartData1(cart){
//      PostData(cart)
//   // cart.forEach((el)=>{

//   // })
//  }
function Appendata(data){
  //item1.innerText=data.length;
  if (data.length==0&&cart.length==0) {
    console.log("empty");
  
    let main = document.getElementById("main1");
    let div1 = document.createElement("div");
    div1.setAttribute("class", "main11");
    let h1 = document.createElement("h1");
    h1.innerHTML = " Your Food Cart is empty";
    let p = document.createElement("p");
    p.innerHTML =
      "Your shopping cart is waiting. Give it purpose – fill it with Salad, Sandwich, Bread, Steak, Tuna Steak, Fish, Shrimp, Rice and more.";
    //    let br=document.createElement("br");
    //    br.innerHTML=br;
    let p1 = document.createElement("p");
    p1.innerHTML =
      " Continue shopping on the home page , learn about today's deals ,or visit your wish list.";
  
    div1.append(h1, p, p1);
    main.append(div1);
  } 
  else if (data.length != 0) {
    console.log("hii3");
    let main1 = document.getElementById("main1");
    data.forEach((el,idx) => {
   
      let div = document.createElement("div");
      div.setAttribute("id", "main11");
  
      let div1 = document.createElement("div");
      div1.setAttribute("id", "main111");
      let img = document.createElement("img");
      img.src = el.img;
      div1.append(img);
  
      let div2 = document.createElement("div");
  
      let strMeal = document.createElement("h2");
      strMeal.innerHTML = el.title;
      let desc=document.createElement("p")
      desc.innerHTML=el.description;
  
      let price = document.createElement("h4");
      price.setAttribute("id","priceNum")
      price.innerHTML = "₹"+el.price;
  let div3=document.createElement("div")
  
  let btn1 = document.createElement("button");
  btn1.innerHTML = "+";
  btn1.setAttribute("class", "plus");
  btn1.addEventListener("click",()=>{
      
    btn5.innerHTML = +(btn5.innerHTML)+1;
    // let p1=(btn5.innerHTML-1)*el.price;
    // console.log(p1);
    
    // totalPrice(p1);
    priceData1(el);
  })

  let btn5 = document.createElement("button");
  btn5.innerHTML ="1";
  btn5.setAttribute("class", "plus");
  

  let btn2 = document.createElement("button");
  btn2.innerHTML = "-";
  btn2.addEventListener("click",()=>{
    if( btn5.innerHTML>1){
      btn5.innerHTML = +(btn5.innerHTML)-1;
    }
    priceDataDelete(el);
  })
  btn2.setAttribute("class", "plus");
  let btn3 = document.createElement("button");
  btn3.innerHTML = "Delete";
  btn3.addEventListener("click",()=>{
   
    deleteData(el.id)
    console.log(el.id)

  })

  let btn4=document.createElement("button");
  btn4.setAttribute("class", "plus");
    btn4.setAttribute("id","btn44");
    btn4.innerHTML="Buy"
    btn4.addEventListener("click",()=>{
      
    })
  
  btn3.setAttribute("class", "plus");
  
  
  div3.append(btn1,btn5,btn2,btn3,btn4)
     
      div2.append(strMeal,desc, price, div3);
      div.append(div1, div2);
  
      main1.append(div);
      console.log(btn5.innerHTML);
    });
  }
}

let cartData =[
            
  {
      title: "Baingan Bharta",
      img: "https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg",
      idMeal: "52807",
      price:750,
      description:"Baingan bharta is a popular north Indian dish where fire roasted eggplant is mashed and cooked with spices."
    },
    {
      title: "Chicken Handi",
      img: "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
      idMeal: "52795",
      price:899,
      description:" Handi chicken is a delicious dish made with chicken cooked on a low flame for a long time."
    },
    {
      title: "Dal fry",
      img: "https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg",
      idMeal: "52785",
      price:670,
      description:"Dal Fry is a delicious and popular Indian lentil recipe that is made with tuvar dal (pigeon pea lentils), onions, tomatoes and spices."
    },
    {
      title: "Kidney Bean Curry",
      img: "https://www.themealdb.com/images/media/meals/sywrsu1511463066.jpg",
      idMeal: "52868",
      price:234,
      description:"This delicious vegetarian stew is made in the pressure cooker, using dried kidney beans and a spice paste with garlic, ginger, and onion."
    }
  ]
 console.log(cartData);
  showDetails22(cartData);
 
function showDetails22(data) {
  let main221 = document.getElementById("main221");
  main221.innerHTML = null;
  data.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("id", "main2212");

    let div1 = document.createElement("div");
    div1.setAttribute("id", "main2211");
    let img = document.createElement("img");
    img.src = el.img;
    div1.append(img);

    let div2 = document.createElement("div");

    let strMeal = document.createElement("p");
    strMeal.innerHTML = el.title;

    let price = document.createElement("p");
    price.innerHTML = "₹"+el.price;

    let btn = document.createElement("button");
    btn.innerHTML = "Add to cart";
    btn.setAttribute("id", "btnMain2");
    btn.addEventListener("click", () => {
      mystoreData(el);
    });

    div2.append(strMeal, price, btn);
    div.append(div1, div2);

    main221.append(div);
  });
}

 async function mystoreData(el) {
  
  let storeProduct = cart1.filter((elm) => {
    return elm.img == el.img;
  });

  if (storeProduct.length > 0) {
    alert("This product already in cart.");
  } else {
    try{
      let new_obj = {
        img: el.img,
        title: el.title,
        description:el.description,
        price: el.price,
      };
      
      let response = await fetch("http://localhost:3000/Data", {
        method: "POST",
        body: JSON.stringify(new_obj),
        headers: {
          "Content-type": "application/json",
        },
      });
    
      let data = await response.json();
      console.log(data);
    }catch (error) {
      console.log(error);
    }
  }
}

// async function PostData(el){

//   try{
//     let new_obj = {
//       img: el.img,
//       title: el.title,
//       description:el.description,
//       price: el.price,
//     };
    
//     let response = await fetch("http://localhost:3000/Data", {
//       method: "POST",
//       body: JSON.stringify(new_obj),
//       headers: {
//         "Content-type": "application/json",
//       },
//     });
  
//     let data = await response.json();
//     console.log(data);
//   }catch (error) {
//     console.log(error);
//   }
// }

async function deleteData(id,idx){

  let dataId=id;
    try{
  
      let result=await fetch(`http://localhost:3000/Data/${dataId}`,{
        method:"DELETE",
        headers:{
          "Content-type": "application/json"
        },
      })
      let data=await result.json();
      console.log(data);
  
  
    }catch(error){
      console.log(error);
    }
  
  
  }
  
function priceData(data){
  console.log(data)
  data.forEach((el)=>{
   console.log(typeof el.price)
    priceItems.innerHTML=+(priceItems.innerHTML)+el.price;
 })

}
//let newPrice=document.getElementById("priceNum")
//console.log(newPrice.innerHTML)
function priceData1(el){
  priceItems.innerHTML=+(priceItems.innerHTML)+el.price;
  // price.innerHTML=+(priceItems.innerHTML)+el.price;
    
}



function priceDataDelete(el){
  if(priceItems.innerHTML>=el.price){
   let dt=+(priceItems.innerHTML)-el.price;
   if(dt<el.price){
    priceItems.innerHTML=dt+el.price;
   }
   else{
    priceItems.innerHTML=dt;
   }
  }
 
  
}
// let myP=localStorage.getItem("price");
 
    

// function totalPrice(p){
//   myP=+(myP)+p;
//   localStorage.setItem("price",myP);
// }

// function dataCount(l){
//  return count1
  
// }
