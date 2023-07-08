function creditSuc(){
    var body=document.querySelector("body");
    var number=document.getElementById("number").value;
    var cvv=document.getElementById("cvv").value;
    var checkbox=document.getElementById('checkbox').value;

    if(number.length!=0 && cvv.length!=0 && checkbox.length!=0){
        var otp=prompt("Enter Otp");

        if(otp.length>4){
            let div=document.createElement("div");
            div.setAttribute("class","paymentSucc");
            let image=document.createElement("img");
            image.setAttribute("src","https://momentumacademy.net/wp-content/uploads/2020/05/Paymentsuccessful21.png");

            div.appendChild(image);
            body.innerHTML=``;
            // body.style.border="1px solid";
            // body.style.alignItems="center";
            // body.style.margin="auto";
            // body.style.paddingRight="50px";

            body.append(div);

        }else{
            alert("Please enter correct otp number");
        }
    }else{
        if(number.length==0){
            alert("Please enter the card number");
        }
        else if(cvv.length==0){
            alert("Please enter CVV ");
        }
        else if(checkbox.length==0){
            alert("tick the box");
        }
    }

}


function WalletPay(){
    var body=document.getElementById("payment_divShow");
    var num=document.getElementById("number2").value;

    if(num.length==10){
        body.innerHTML=`
        <div id="wallet_div">
        <div id="wallet_child1">
            <img src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/Zest_Simpl/Simpl.svg" alt="">
        </div>
        <div id="wallet_child2">
            <h3>SIMPLE</h3>
            <p>You are not eligible for this payment option</p>
        </div>
    </div>`;
    }else{
        alert("Please enter correct number");
    }
}