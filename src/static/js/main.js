// поддежрка подключения svg во всех браузерах
$(document).ready(function () {
	svg4everybody();
	var sandwichClick = function() {
		$(document).on('click', '.catalog-nav__header', function(){
			var sandwich = $(this).find('.sandwich');
			sandwich.toggleClass('is-active')
		})
	}
	sandwichClick();
});