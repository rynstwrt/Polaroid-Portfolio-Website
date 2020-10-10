//Ryan Stewart 10/09/2020
const browswertransitionevents = 'transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd';
let hasLoaded = false;

$(document).ready(() =>
{
	console.log('a');
	$('#content h1').css({'opacity': '1'});
	$('#underline').css({'width': '100%'});

	$('#underline').on(browswertransitionevents, () =>
	{
		function checkIfDone()
		{
			if (hasLoaded)
			{
				clearInterval(interval);
				$('#underline').css({'width': '0%'});
				$('#content h1').css({'opacity': '0'});

				$('#underline').on(browswertransitionevents, () =>
				{
					$('#scrollercontainer').css({'opacity': '1'});
					$('#loadingscreen').css({'opacity': '0'});

					$('#loadingscreen').on(browswertransitionevents, () =>
					{
						$('#loadingscreen').remove();
					});
				});
			}
		}

		const interval = setInterval(checkIfDone, 1000);
	});
});


// fires when images are done loading
$(window).on('load', () =>
{
	hasLoaded = true;
});
