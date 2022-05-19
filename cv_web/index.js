let compBtn = document.getElementById("compBtn")
let comp = document.getElementById ("comp")

compBtn.onclick = function () {
    if (comp.style.right == "-60%") {
        comp.style.right = "0"
        compBtn.style.left = "10%"
        // pourquoi ca ne marche pas avec "right= "60%"? "
        compBtn.innerHTML = `<img id="close" src="images/blackclose.png" alt="">`
     
 // roues dentée 
 document.getElementById('rouecomp').innerHTML = `<img src="images/roues2.gif" alt="">`;
 setTimeout(function() {
 document.getElementById('rouecomp').innerHTML = `<img src="images/roues2.png" alt="">`;
 },1000);

    }
    else {
        comp.style.right = "-60%";
        compBtn.style.left = "50%";
        compBtn.innerHTML= "COMPETENCES"

 // roues dentée 
 document.getElementById('rouecomp').innerHTML = `<img src="images/roues2.gif" alt="">`;
 setTimeout(function() {
 document.getElementById('rouecomp').innerHTML = `<img src="images/roues2.png" alt="">`;
 },1000);

    };
}


let formBtn = document.getElementById("formBtn")
let form = document.getElementById ("form")


formBtn.onclick = function () {
    if (form.style.top == "-50vh") {
        form.style.top = "30vh"
        formBtn.style.top = "85vh"
        formBtn.innerHTML = `<img id="close" src="images/blackclose.png" alt="">`

         // roues dentée 
 document.getElementById('roueform').innerHTML = `<img src="images/roues2.gif" alt="">`;
 setTimeout(function() {
 document.getElementById('roueform').innerHTML = `<img src="images/roues2.png" alt="">`;
 },1000);  
    }
    else {
        form.style.top = "-50vh";
        formBtn.style.top = "35vh"
        formBtn.innerHTML = `FORMATIONS`

 // roues dentée 
 document.getElementById('roueform').innerHTML = `<img src="images/roues2.gif" alt="">`;
 setTimeout(function() {
 document.getElementById('roueform').innerHTML = `<img src="images/roues2.png" alt="">`;
 },1000);

    };
}

let expBtn = document.getElementById("expBtn")
let exp = document.getElementById ("exp")

expBtn.onclick = function () {
    if (exp.style.bottom == "-80vh") {
        exp.style.bottom = "0" 
        expBtn.style.top = "12vh"
        // pourquoi je ne peux pas faire "bottom = "80vh"? 
        expBtn.innerHTML = `<img id="close" src="images/blackclose.png" alt="">`


 // roues dentée 
 document.getElementById('roueexp').innerHTML = `<img src="images/roues2.gif" alt="">`;
 setTimeout(function() {
 document.getElementById('roueexp').innerHTML = `<img src="images/roues2.png" alt="">`;
 },1000);

        }

    else {
        exp.style.bottom = "-80vh";
        expBtn.style.top = "60vh"
        expBtn.innerHTML = "EXPERIENCES PROFESSIONNELLES"


 // roues dentée 
 document.getElementById('roueexp').innerHTML = `<img src="images/roues2.gif" alt="">`;
 setTimeout(function() {
 document.getElementById('roueexp').innerHTML = `<img src="images/roues2.png" alt="">`;
 },1000);

    };
}



