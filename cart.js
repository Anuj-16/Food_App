let cart=JSON.parse(localStorage.getItem("cart"))||[];

if(cart.length==0){
    console.log("empty");

    let main=document.getElementById("main1");
   let div1=document.createElement("div")
   div1.setAttribute("class","main11")
   let h1=document.createElement("h1")
   h1.innerHTML=" Your Food Cart is empty";
   let p=document.createElement("p");
   p.innerHTML="Your shopping cart is waiting. Give it purpose – fill it with Salad, Sandwich, Bread, Steak, Tuna Steak, Fish, Shrimp, Rice and more.";
//    let br=document.createElement("br");
//    br.innerHTML=br;
   let p1=document.createElement("p")
   p1.innerHTML=" Continue shopping on the home page , learn about today's deals ,or visit your wish list."

div1.append(h1,p,p1);
main.append(div1);



}
else if(cart.length!=0){
    console.log("not empty")
}
