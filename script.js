var umbrella ="rainy"

$("button").click(function(){
    if($("input").val()===umbrella) {
   $("h3").html("Don't forget to bring an umbrella");

  } else
   $("h3").html("There's no need for an umbrella today. Please, check agin tomorrow.");

});