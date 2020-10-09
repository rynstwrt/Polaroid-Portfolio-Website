//Ryan Stewart 10/08/2020
$(document).ready(() =>
{

	function updateSize()
	{
		let vh = window.innerHeight * .01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	}
	updateSize();

	window.addEventListener('resize', () =>
	{
		updateSize();
	});


	$('#rightarrow').click((e) =>
	{
		let currActive = $('.active');
		const nextActive = currActive.next();
		if (nextActive.length != 0)
		{
			$(currActive).removeClass('active');
			$(nextActive).addClass('active');
			prevActive = currActive.next();
			const diff = Math.abs(prevActive.offset().left - currActive.offset().left);
			$.each($('#scroller').children(), (i, v) =>
			{
				const currentPosition = $(v).offset();
				$(v).offset({top: currentPosition.top, left: (currentPosition.left - diff)});
			});
		}
	});

	$('#leftarrow').click((e) =>
	{
		let currActive = $('.active');
		const nextActive = currActive.prev();
		if (nextActive.length != 0)
		{
			$(currActive).removeClass('active');
			$(nextActive).addClass('active');
			prevActive = currActive.prev();
			const diff = Math.abs(prevActive.offset().left - currActive.offset().left);
			$.each($('#scroller').children(), (i, v) =>
			{
				const currentPosition = $(v).offset();
				$(v).offset({top: currentPosition.top, left: (currentPosition.left + diff)});
			});
		}
	});
});
