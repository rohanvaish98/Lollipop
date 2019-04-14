$(document).ready(function(){
	var LOLAnually = 0.5;
	var LOLMonthly = 1;
	var IceAnually = 1;
	var IceMonthly = 2;

	var radioValue = $("input[name='switch']:checked").val();
	var serving = $('.active').attr('id');
	if(radioValue == 'Anually'){
		var LOL = LOLAnually;
		var Ice = IceAnually;
	}
	else{
		var LOL = LOLMonthly;
		var Ice = IceMonthly;
	}

	var resultLOL = $("#lollipop").text((serving*LOL));
	var resultIce = $("#icecandy").text((serving*Ice));
	var LOLServing = $("#lolserving").text((serving));
	var IceServing = $("#iceserving").text((serving));
	var result = $("#result").text((serving * Ice - serving * LOL));


	$(".box").click(function () {
        $(".box").removeClass("active");
        $(this).addClass("active");   
        var serving = $(this).attr('id');
        var radioValue = $("input[name='switch']:checked").val();
        if(radioValue == 'Anually'){
            var LOL = LOLAnually;
            var Ice = IceAnually;
        }else{
            var LOL = LOLMonthly;
            var Ice = IceMonthly;
        }
        var resultLOL = $("#lollipop").text((serving * LOL)); 
        var resultIce = $("#icecandy").text((serving * Ice)); 
        var LOLServing = $("#lolserving").text((serving));
        var IceServing = $("#iceserving").text((serving));
   
        var result = $("#result").text((serving * Ice - serving * LOL));  
    });

	$("input[type='radio']").click(function(){
		var radioValue = $("input[name='switch']:checked").val();
		var serving = $('.active').attr('id');
		if(radioValue == 'Anually'){
			var LOL = LOLAnually;
			var Ice = IceAnually;
		}
		else{
			var LOL = LOLMonthly;
			var Ice = IceMonthly;
		}
		var resultLOL = $("#lollipop").text((serving * LOL)); 
        var resultIce = $("#icecandy").text((serving * Ice));  
        var result = $("#result").text((serving * Ice - serving * LOL));  

	});
});