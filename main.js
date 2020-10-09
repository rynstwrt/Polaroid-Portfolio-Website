$(document).ready(() =>
{


	$('#rightarrow').click((e) =>
	{
		let currActive = $('.active');
		const nextActive = currActive.parent().next().children()[0];

		if (nextActive)
		{
			$(currActive).removeClass('active');
			$(nextActive).addClass('active');

			currActive = $('.active').parent();
			prevActive = currActive.prev();

			const diff = Math.abs($(prevActive).offset().left - $(currActive).offset().left);
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
		const nextActive = currActive.parent().prev().children()[0];

		if (nextActive)
		{
			$(currActive).removeClass('active');
			$(nextActive).addClass('active');

			currActive = $('.active').parent();
			prevActive = currActive.next();

			const diff = Math.abs($(prevActive).offset().left - $(currActive).offset().left);
			$.each($('#scroller').children(), (i, v) =>
			{
				const currentPosition = $(v).offset();
				$(v).offset({top: currentPosition.top, left: (currentPosition.left + diff)});
			});
		}
	});
});
