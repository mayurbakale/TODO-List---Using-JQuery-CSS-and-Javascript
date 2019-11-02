// Check of specific Todos by Clicking
$("ul").on("click","li", function() {
    $(this).toggleClass("completed");
    
    //If li is gray
      // turn it black
    // else
      // turn it gray

    /*if($(this).css("color") === "rgb(128, 128, 128)") {
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    } else {
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
        });
    }*/
    
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    if(event.which === 13) { 
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class'fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function() {
   $("input[type='text']").fadeToggle(); 
});