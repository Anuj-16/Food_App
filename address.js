 document.getElementById("form").addEventListener("submit",getAddress);
 var arrAdress=JSON.parse(localStorage.getItem("address"))|| [];
 
function getAddress(event){
    event.preventDefault();
    var num=document.getElementById("num").value;
    var home=document.getElementById("home").value;
    var area=document.getElementById("area").value;
    var fullName=document.getElementById("name").value;
    var Mobile=document.getElementById("mobile").value;
    var email=document.getElementById("email").value;

    var status=true;

    var obj={
        num:num,
        home:home,
        area:area,
        fullName:fullName,
        Mobile:Mobile,
        email:email,
    }
    console.log(obj);
    arrAdress.push(obj);
    console.log(arrAdress);

    localStorage.setItem("address",JSON.stringify(arrAdress));

    fetch(`http://localhost:8080/address`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
       
        body: JSON.stringify(obj), // body data type must match "Content-Type" header
      })
      .then((res) => res.json())
      window.location.href='./payment.html';
      alert("Address added")
      
            .then((res) =>{ 
              console.log(res)
              
              
            }
              )
            .catch((err) => console.log(err)) 


   


}

// function addressFn(){
//     var Store=document.getElementById("store2_address");
//     Store.innerHTML=`
    
//     <div id="body1">
//      <div class="store_div">
//          <p>Address</p>
//          <p><input type="number" placeholder="Pincode" id="num" class="input_store" required></p>
//          <p><input type="text" placeholder="House/Flate/Office No" id="home" class="input_store" required></p>
//          <p><input type="text" placeholder="Road Name/ Area/ Colony" id="area" class="input_store" required></p>
 
//      </div>
//      <div class="store_div">
//          <p>Contact</p>
         
//          <p>Information provided here will be used to contact you for delivery updates</p>
        
//          <p><input type="text" placeholder="Full name" id="name" class="input_store" required></p>
//          <p><input type="number" placeholder="Mobile number" id="mobile" class="input_store" required></p>
//          <p><input type="email" placeholder="Email" id="email" class="input_store" required></p>
 
//      </div>
//      <a href="payment.html">
//          <button id="address_btn">Ship to this address</button>
//      </a> </div>`

// }


