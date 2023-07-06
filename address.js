 

function addressFn(){
    var Store=document.getElementById("store2_address");
    Store.innerHTML=`
    <div id="body1">
     <div class="store_div">
         <p>Address</p>
         <p><input type="number" placeholder="Pincode" class="input_store" required></p>
         <p><input type="text" placeholder="House/Flate/Office No" class="input_store" required></p>
         <p><input type="text" placeholder="Road Name/ Area/ Colony" class="input_store" required></p>
 
     </div>
     <div class="store_div">
         <p>Contact</p>
         
         <p>Information provided here will be used to contact you for delivery updates</p>
        
         <p><input type="text" placeholder="Full name" class="input_store" required></p>
         <p><input type="number" placeholder="Mobile number" class="input_store" required></p>
         <p><input type="email" placeholder="Email" class="input_store" required></p>
 
     </div>
     <a href="payment.html">
         <button id="address_btn">Ship to this address</button>
     </a> </div>`

}