function textscrooling(){
    if(document.body.scrollTop>100 || document.documentElement.scrollTop>100){
        document.getElementById("text-zoom").style.fontSize = "200px";
        document.body.style.color = "red";
        document.body.style.backgroundColor = "aqua";
    }else{
        document.getElementById("text-zoom").style.fontSize = "100px";
        document.body.style.backgroundColor = "white";
    }
}
window.onscroll = function(){
    textscrooling();
}



// document.body.scrollTop is intially is been 0 and document.documentElement.scrollTop is like it also zero but when 
// we scroll it giving pixel in this condition if the pixel is above 100 then its become true and condition satified