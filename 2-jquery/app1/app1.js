//let para1=document.querySelector("#p1");

//para1.innerHTML="Hello JS";

// load jquery here
/*
$(document).ready(function(){
    console.log(">>>> jquery is ready to searve");
    $("p").text("Hello from jquery");
    $("h2").text("Hello from jquery-h1");
})

*/

$(document).ready(() => {

    var price = $("<p class='text-success text-center'>From $399.99</p>");

    $('.vacation').on('click', 'button', (e) => {

        var vacation = $(this).closest('.vacation');
       //$(this).before('.vacation');
        // price.appendTo($('.vacation'));    
        vacation.append(price);    

    })



})