$(document).ready(() =>
{

	const startPosition = $("#scroller").offset().left;
	const first = $($('.active').parent().children()[1]);
	const second = $($(first).parent().next().children()[1]);
	const offset = Math.abs(first.offset().left - second.offset().left);


	$('#rightarrow').click((e) =>
	{
		let currActive = $('.active');
		const nextActive = currActive.parent().next().children()[0];

		if (nextActive)
		{
			currActive.removeClass('active');
			$(nextActive).addClass('active');
			currActive = nextActive;
			delete nextActive;
			const scrollerPos = $('#scroller').offset().left;
			const newMargin = scrollerPos - (offset * 2);
			$("#scroller").css({marginLeft: newMargin});
		}
	});

	$('#leftarrow').click((e) =>
	{
		let currActive = $('.active');
		const nextActive = currActive.parent().prev().children()[0];

		if (nextActive)
		{
			currActive.removeClass('active');
			$(nextActive).addClass('active');
			currActive = nextActive;
			delete nextActive;
			const scrollerPos = $('#scroller').offset().left;
			const newMargin = scrollerPos + (offset * 2);
			$("#scroller").css({marginLeft: newMargin});
		}
	});





});
