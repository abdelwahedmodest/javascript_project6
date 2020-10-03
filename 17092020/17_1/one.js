

function   add_ten_inputs(){
    var  i ;
    for(i=0 ; i<10 ;i++){

        var btn =  document.createElement('button') ;
        btn.name= 'input' +  i ;
        btn.style.type = "button" ;
        btn.onclick =  function(){
            alert('input' + i)
        };
    
        window.document.body.appendChild(btn);
    }
}

add_ten_inputs();