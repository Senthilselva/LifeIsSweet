$('.purchaseCoupon').on('click', function(e){
	e.preventDefault();

	var thisForm = $(this).parent();

	var couponid = thisForm.data('couponid');
	var quant = $(this).siblings().eq(0).val();

	var data = {
		coupon_id: couponid,
		quantity: quant
	}

	$.post("/coupons/users/create", data, function(response){
		alert("the response from the server is: " + response + ". If 200 then that's good. If 500 then there was something wrong.");
	});
});



//Create user client side validation

$('create-user-form').on('click', function(){
	e.preventDefault();

	var email = $('#email').val().trim();
	var userName = $('#userName').val.trim();
})