window.onload = function () {
    var change2 = document.querySelector('#change2') ; 
    var change1  =document.querySelector('#change1') ; 
    var change3 = document.querySelector('#change3') ; 
    var bg = document.querySelector('.banner_btn') ; 
    var bgItem =document.querySelector('.banner_item ') ;
    change2.onclick = function() {
        bg.style.backgroundColor ='#D9B44A' ;
        bgItem.style.backgroundColor='#acd0c0' ; 
        change2.style.borderColor='white' ;
        change1.style.borderColor='#B3C4D7' ;
        change3.style.borderColor='#B3C4D7' ;
    }
    change1.onclick = function() {
        bg.style.backgroundColor ='#a9d9d4' ;
        bgItem.style.backgroundColor='#466e73' ;
        change1.style.borderColor='white' ;
        change2.style.borderColor='#B3C4D7' ;
        change3.style.borderColor='#B3C4D7' ;
    }
    change3.onclick = function() {
        bg.style.backgroundColor ='#f52549' ;
        bgItem.style.backgroundColor='#ffd64d' ;
        change3.style.borderColor='white' ;
        change2.style.borderColor='#B3C4D7' ;
        change1.style.borderColor='#B3C4D7' ;
    }

    
    
}