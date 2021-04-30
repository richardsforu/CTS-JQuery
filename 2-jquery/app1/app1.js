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

$(document).ready(function () {
    $(".price").on("click", function () {
        var vacation = $(this).closest('.vacation');

        var amount = vacation.data('price');

        var price = $(`<p>&#8377;${amount}</p>`);

        console.log(amount);
        // $(this).closest('.vacation').append(price);
        vacation.append(price);
        $(this).remove();

    });


    //-------------

    $('#filters').on('click','.btn-success',function () {
       // console.log('On sale');'
       $('.bg-warning').removeClass("bg-warning");
       $('.vacation').filter('.onsale').addClass('bg-info');
    })


    $('#filters').on('click','.btn-danger',function () {
        //console.log('Expiring soon');    
        $('.bg-info').removeClass("bg-info");
   
        $('.vacation').filter('.expiring').addClass('bg-warning');


    })



})









