let myImg = document.getElementsByTagName("img");

for (let i=0; i<5 ; i++) {
    if (myImg[i].hasAttribute("alt")) {
        myImg[i].setAttribute("alt", "Old")
    }else{
        myImg[i].alt = "Elzero New";
    }
}