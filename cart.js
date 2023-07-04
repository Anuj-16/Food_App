let cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length == 0) {
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
} else if (cart.length != 0) {
  console.log("not empty");
}

detailMain22();

async function detailMain22() {
  let result = await fetch(`  http://localhost:3000/cartData`);
  let data = await result.json();
  console.log(data);
  showDetails22(data);
}

function showDetails22(data) {
  let main221 = document.getElementById("main221");
  main221.innerHTML = null;
  data.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("id", "main2212");

    let div1 = document.createElement("div");
    div1.setAttribute("id", "main2211");
    let img = document.createElement("img");
    img.src = el.strMealThumb;
    div1.append(img);

    let div2 = document.createElement("div");

    let strMeal = document.createElement("p");
    strMeal.innerHTML = el.strMeal;

    let price = document.createElement("p");
    price.innerHTML = el.cost;

    let btn = document.createElement("button");
    btn.innerHTML = "Add to cart";
    btn.setAttribute("id", "btnMain2");

    div2.append(strMeal, price, btn);
    div.append(div1, div2);

    main221.append(div);
  });
}
