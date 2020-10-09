$(document).ready(() =>
{



	$('#rightarrow').click((e) =>
	{
		let currActive = $('.active');
		const nextActive = currActive.parent().next().children()[0];

		if (nextActive)
		{
			currActive.removeClass('active');
			$(nextActive).addClass('active');
			const currPos = currActive.offset().left
			const nextPos = $(nextActive).offset().left
			currActive = nextActive;
			delete nextActive;
			offset = Math.abs(nextPos - currPos);
			const scrollerPos = $('#scroller').offset().left;
			const newMargin = (scrollerPos - offset * 2);
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
			const currPos = currActive.offset().left
			const nextPos = $(nextActive).offset().left
			currActive = nextActive;
			delete nextActive;
			offset = Math.abs(nextPos - currPos);
			const scrollerPos = $('#scroller').offset().left;
			const newMargin = (scrollerPos + offset * 2);
			$("#scroller").css({marginLeft: newMargin});
		}
	});





});
