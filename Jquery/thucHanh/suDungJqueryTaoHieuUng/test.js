$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide();
    });
    $("#show").click(function(){
        $("p").show();
    });


        var i = 0;
    $("button").click(function(){
        var div = $("div");
        div.animate({left: 100 + i}, "slow");
        div.animate({fontSize: '100px'}, "slow");
       i += 100;
    });
});