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

        //var price = $(`<p>&#8377;${amount}</p>`);

        var price=$(`
        
        <p>
            &#8377;${amount} per ticket <br/> <br/>
            <p>
                Tickets: 
                <input type="number" class="quantity" value="1">
            </p>
            <hr/>
            <p>Total Price: <span id='total'>${amount}</span>
        </p>
        
        `);

        // $(this).closest('.vacation').append(price);
        vacation.append(price);
        $(this).remove();

    });


    $(".vacation").on('keyup change','.quantity',function(e){
       // console.log($(this).val());
       var price=$(this).closest('.vacation').data('price');
       var quantity=$(this).val();

       $(this).parent().parent().find('#total').text(price*quantity);

       //$('#total').text(price*quantity);
    })


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









