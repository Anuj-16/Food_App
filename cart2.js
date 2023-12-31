console.log("dfgh")
let dataonly1=document.getElementById("dataonly1");

let dataObj=[
    {
      title:"Chocolate Gateau",
      price:345,
      description:"Preheat the oven to 180°C/350°F/Gas Mark 4. Grease and line the base of an 8 in round spring form cake tin with baking parchment\r\nBreak the chocolate into a heatproof bowl and place over a saucepan of gently simmering water and stir until it melts.",
      img:"https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg",
    },
    {
      title:"Chicken Enchilada Casserole",
      price:465,
      description:"Cut each chicken breast in about 3 pieces, so that it cooks faster and put it in a small pot. Pour Enchilada sauce over it and cook covered on low to medium heat until chicken is cooked through, about 20 minutes.",
      img:"https://www.themealdb.com/images/media/meals/qtuwxu1468233098.jpg",
    },
    {
      title:"Cream Cheese Tart",
      price:245,
      description:"Crust: make a dough from 250g flour (I like mixing different flours like plain and wholegrain spelt flour), 125g butter, 1 egg and a pinch of salt, press it into a tart form and place it in the fridge.",
      img:"https://www.themealdb.com/images/media/meals/wurrux1468416624.jpg",
    },
    {
      title:"Christmas Pudding Flapjack",
      price:645,
      description:"Preheat the oven to 180°C/fan 160°C/gas mark 4 and grease and line a 25cm x 20cm tin. Melt the butter, sugar, syrup and orange zest in a large saucepan over a medium heat.",
      img:"https://www.themealdb.com/images/media/meals/vvusxs1483907034.jpg",
    },
    {
      title:"Chicken Handi",
      price:890,
      description:"Take a large pot or wok, big enough to cook all the chicken, and heat the oil in it. Once the oil is hot, add sliced onion and fry them until deep golden brown. Then take them out on a plate and set aside.\r\nTo the same pot, add the chopped garlic and sauté for a minute.",
      img:"https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
    },
    {
      title:"Chicken Alfredo Primavera",
      price:805,
      description:"Heat 1 tablespoon of butter and 2 tablespoons of olive oil in a large skillet over medium-high heat. Season both sides of each chicken breast with seasoned salt and a pinch of pepper. Add the chicken to the skillet and cook for 5-7 minutes on each side, or until cooked through.",
      img:"https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg",
    },
    {
      title:"Cajun spiced fish tacos",
      price:799,
      description:"Cooking in a cajun spice and cayenne pepper marinade makes this fish super succulent and flavoursome. Top with a zesty dressing and serve in a tortilla for a quick, fuss-free main that's delightfully summery.",
      img:"https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
    },
    {
      title:"Crock Pot Chicken Baked Tacos",
      price:499,
      description:"Put the uncooked chicken breasts in the crock pot. Pour the full bottle of salad dressing over the chicken. Sprinkle the rest of the ingredients over the top and mix them in a bit with a spoon.\r\nCover your crock pot with the lid and cook on high for 4 hours.",
      img: "https://www.themealdb.com/images/media/meals/ypxvwv1505333929.jpg",
    },
    {
      title:"Chilli prawn linguine",
      price:345,
      description:"Mix the dressing ingredients in a small bowl and season with salt and pepper. Set aside.\r\n\r\nCook the pasta according to the packet instructions. Add the sugar snap peas for the last minute or so of cooking time.",
      img:"https://www.themealdb.com/images/media/meals/usywpp1511189717.jpg",
    },
    {
      title:"Clam chowder",
      price:245,
      description:"Rinse the clams in several changes of cold water and drain well. Tip the clams into a large pan with 500ml of water. Cover, bring to the boil and simmer for 2 mins until the clams have just opened. Tip the contents of the pan into a colander over a bowl to catch the clam stock.",
      img: "https://www.themealdb.com/images/media/meals/rvtvuw1511190488.jpg",
    },
    {
      title:"Creamy Tomato Soup",
      price:245,
      description:"Put the oil, onions, celery, carrots, potatoes and bay leaves in a big casserole dish, or two saucepans. Fry gently until the onions are softened – about 10-15 mins. Fill the kettle and boil it.\r\nStir in the tomato purée, sugar, vinegar, chopped tomatoes and passata, then crumble in the stock cubes.",
      img: "https://www.themealdb.com/images/media/meals/stpuws1511191310.jpg",
    },
    {
      title:"Chicken & mushroom Hotpot",
      price:782,
      description:"Heat oven to 200C/180C fan/gas 6. Put the butter in a medium-size saucepan and place over a medium heat. Add the onion and leave to cook for 5 mins, stirring occasionally. Add the mushrooms to the saucepan with the onions.",
      img:"https://www.themealdb.com/images/media/meals/uuuspp1511297945.jpg",
    },
    {
      title:"Chicken Couscous",
      price:705,
      description:"Heat the olive oil in a large frying pan and cook the onion for 1-2 mins just until softened. Add the chicken and fry for 7-10 mins until cooked through and the onions have turned golden. Grate over the ginger, stir through the harissa to coat everything and cook for 1 min more.",
      img: "https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg",
    },
    {
      title:"Chocolate Avocado Mousse",
      price:200,
      description:" Blend all the mousse ingredients together in your food processor until smooth. Add the cacao powder first and, as you blend, have all the ingredients to hand in order to adjust the ratios slightly as the size of avocados and bananas varies so much.",
      img: "https://www.themealdb.com/images/media/meals/uttuxy1511382180.jpg",
    },
    {
      title:"Choc Chip Pecan Pie",
      price:249,
      description:"First, make the pastry. Tip the ingredients into a food processor with 1 /4 tsp salt. Blend until the mixture resembles breadcrumbs. Drizzle 2-3 tsp cold water into the funnel while the blade is running – the mixture should start to clump together.",
      img:"https://www.themealdb.com/images/media/meals/rqvwxt1511384809.jpg",
    },
    {
      title:"Carrot Cake",
      price:199,
      description:"For the carrot cake, preheat the oven to 160C/325F/Gas 3. Grease and line a 26cm/10in springform cake tin.\r\nMix all of the ingredients for the carrot cake, except the carrots and walnuts, together in a bowl until well combined.",
      img:"https://www.themealdb.com/images/media/meals/vrspxv1511722107.jpg",
    },
   
]
console.log(dataObj);

function myButton(l){
  dataonly1.innerHTML=null;
  let h=l+4;
  for(var i=l;i<=h;i++){
    mydata(dataObj[i]);
  }
}

function mydata(el){
 
let div = document.createElement("div");
    div.setAttribute("id", "dataonly12");

    let div1 = document.createElement("div");
    div1.setAttribute("id", "dataonly121");
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
    btn.setAttribute("id", "btnOnlydata2");
    btn.addEventListener("click", () => {
      mystoreData(el);
    });

    div2.append(strMeal, price, btn);
    div.append(div1, div2);

    dataonly1.append(div);
}


let cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cart)


showMeData(cart);

// function showMeData(data){
//  for(var i=0;i<data.length;i++){
//   mystoreData(data[i]);
//  }
// }


function showMeData(data){
  item1.innerHTML=null;
  item1.innerHTML=data.length+1;
  console.log(data.length)
  priceData(data);
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
  console.log(btn5.innerHTML*el.price);
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
    priceDataDelete(el);
  }
  // if(btn5.innerHTML==1){

  //   btn2.disabled=true;
  // }
  
})
btn2.setAttribute("class", "plus");

let btn3 = document.createElement("button");
btn3.innerHTML = "Delete";
btn3.addEventListener("click",()=>{
//  cart.splice(idx,1)
//  localStorage.setItem("cart",JSON.stringify(cart))

deleteData1(el,idx)

  console.log(cart)

})
let btn4=document.createElement("button");
btn4.setAttribute("class", "plus");
  btn4.setAttribute("id","btn44");
  btn4.innerHTML="Buy"
  btn4.addEventListener("click", function(){
    window.location.href = "address.html"
  })

btn3.setAttribute("class", "plus");


div3.append(btn1,btn5,btn2,btn3,btn4)
   
    div2.append(strMeal,desc, price, div3);
    div.append(div1, div2);

    main1.append(div);
  });
}



function deleteData1(el,idx){
  cart.splice(idx,1);
  showMeData(cart)
  localStorage.setItem("cart",JSON.stringify(cart))
location.href="cart.html"

}




let paginationData = document.getElementById("pagination");
paginationData.innerHTML = null;
let count=1;
if(count=1){
  myButton(0);
  count=5;
}

for (let i = 0; i<3; i++) {
  let btn = document.createElement("button");
  btn.setAttribute("class", "pagination-button");

  btn.innerText = i+1;
  btn.addEventListener("click", () => {
   let l=i*5;
   myButton(l);
  })
  paginationData.append(btn);
}

