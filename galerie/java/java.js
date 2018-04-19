console.log ("test");


/**********************  FUNKCJA DO PRZISKÓW ******************/

$("document").ready(function(){
    $("#push").click(function(){
        $("#most").hide(1000);
    });
});

$("document").ready(function(){
    $("#push2").click(function(){
        $("#most").show(1000);
    });
});



/*********************  FUNCKJA DO NAPISÓW  ************************/


$(document).ready(function(){
    $("#warszawa").mouseover(function(){
        $("#popup1").show(0);
    });
        
    $("#warszawa").mouseout(function(){
        $("#popup1").hide(0);
    });
    
});


$(document).ready(function(){
    $("#tokio").mouseover(function(){
        $("#popup2").show(0);
    });
        
    $("#tokio").mouseout(function(){
        $("#popup2").hide(0);
    });
    
});