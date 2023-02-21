var qr_btn=document.querySelector("#Qr-btn");
var qr_img=document.querySelector("#Qr-img");
var loader=document.querySelector("#loading");
var qr_input=document.querySelector("#input");

qr_btn.addEventListener("click",()=>{
    loader.style.display="block"
    qr_img.onload=function(){
        loader.style.display="none";
    }
    var sos = document.querySelector("#input").value;
    var ApiUrl= "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data="
    +qr_input.value;
    qr_img.src=ApiUrl; 
})
