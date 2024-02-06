var AdressDetails=JSON.parse(localStorage.getItem("address"))|| [];
console.log(AdressDetails);
let p1 = localStorage.getItem("price")

let cart = JSON.parse(localStorage.getItem('cart'))
console.log(cart)

AdressDetails.map((elem)=>{
    document.getElementById("delivery_div").textContent=`${elem.fullName},${elem.home},${elem.area},${elem.num},`;

    let br  = document.createElement('br')
    let div = document.createElement("div")
    let h2=document.createElement("h2")
    h2.innerHTML= `Total Price: ₹${p1}`
    div.append(h2);
    div.setAttribute("class","priceArra");
    
    document.getElementById("delivery_div").append(br, div)
})


localStorage.setItem("price1",p1);
let MyPrice=localStorage.getItem("price");
console.log(MyPrice);

var price= document.getElementById("items_price");








// var credit=document.getElementById("credit_card");
// credit.addEventListener("click",creditFn);

// var paymentShow1=document.getElementById("payment_divShow");

// function creditFn(){
//     paymentShow1.innerHTML=` 
//     <div id="box1">
//     <p>One card for all apps</p>
// </div>
// <hr>
// <div id="box2">
//     <div>
//     <div>
//         <p>WE ACCEPT</p>

//         <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,e_trim/Visa_lztyeu" alt="visa">
//         <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,e_trim/Mastercard_wqoea2" alt="master">
//         <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,e_trim/RuPayColoured_oyd73s_soebkd" alt="rupay">
//         <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,e_trim/Amex_ozga1w" alt="american"><br>
//     </div>
//         <input type="number" class="card_input" id="number" placeholder="Enter Card Number" required><br>
//         <input type="password" class="card_input" id="cvv" placeholder="CVV" required><br>
//         <input type="checkbox" id="checkbox">Save this card securely for future

//         <span id="span">Know More</span><br>
//         <button onclick="creditSuc()">Verify & Pay</button>
//     </div>

// </div>`;

// }

// var paytmWallet=document.getElementById("wallet");
// paytmWallet.addEventListener("click",walletFn);

// var paymentShow2=document.getElementById("payment_divShow");

// function walletFn(){
//     paymentShow2.innerHTML=`
//     <div id="wallet_main">
//     <div id="top">
//         <p>Pay with Paytm</p>
//     </div>
//     <hr>
//     <div id="wallet_inp">
//         <input type="number" name="" id="number2" placeholder="Enter Your number">
//     </div>
//     </div>
//     <button id="wall_btn" onclick="WalletPay()">Link</button>`;

// }



