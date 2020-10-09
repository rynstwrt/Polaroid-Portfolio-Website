$(document).ready(() =>
{


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
		console.log(nextActive.length);
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
