//Ryan Stewart 10/08/2020
$(document).ready(() =>
{
	const debounceTime = 300;
	let canClick = true;
	function debounce()
	{
		canClick = true;
	}

	function changeTitle(currPolaroid)
	{
		$('#text-container h1').text($($($(currPolaroid.children()[1]).children()[0]).children()[1]).attr('alt'));
	}
	const scroller = $('#scroller');
	const numPolaroids = Math.ceil(scroller.children().length / 2);
	changeTitle($(scroller.children()[numPolaroids - 1]));


	$('#rightarrow').click((e) =>
	{
		if (!canClick) return;
		canClick = false;
		setTimeout(debounce, debounceTime);
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
			changeTitle(nextActive);
		}
	});

	$('#leftarrow').click((e) =>
	{
		if (!canClick) return;
		canClick = false;
		setTimeout(debounce, debounceTime);
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
			changeTitle(nextActive);
		}
	});
});
