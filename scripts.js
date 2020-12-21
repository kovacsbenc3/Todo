

$("#button").click(()=>{
    var str = $("#text").val();
    $("ul").append("<li></li>");
    $("ul").append(str);
});



//"<li>input#text</li>"
//$("ul").append(str);