// script.js
console.log('Hello, world!');
document.addEventListener("DOMContentLoaded", function() {
    var status = false;
    var aboutMe = document.getElementById("about-me");
    aboutMe.addEventListener("click", function() {
        if(status){
            aboutMe.textContent = "My name is Camdon, I like to code :)";
            status = false;
        } else {
            aboutMe.textContent = "01001101 01111001 00100000 01101110 01100001 01101101 01100101 00100000 01101001 01110011 00100000 01000011 01100001 01101101 01100100 01101111 01101110 00101100 00100000 01001001 00100000 01101100 01101001 01101011 01100101 00100000 01110100 01101111 00100000 01100011 01101111 01100100 01100101 00100000 00111010 00101001";
            status = true;
        }
    });

});