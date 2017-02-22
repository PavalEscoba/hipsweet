$(document).ready(function(){
	$('.bxslider').bxSlider();
	$('.form__submit').on('click', function(e){
		e.preventDefault();
	});
	(function(){
		$(".form-trigger").on('click', function(e){
			e.preventDefault();

			var $this = $(this),
			target = $this.attr('href').replace('#',''),
			reqSection = {};

			$('[data-target]').each(function(){
				var $this = $(this),
				trigger = $this.data('target');
				if( target==trigger){
					reqSection = $this;
				}
			});

			var reqScroll = reqSection.offset().top;

			$('html, body').animate({
				scrollTop: reqScroll
			}, 1000);  

		});		
	}());

	//acc
	(function(){	
		$('.faq__accordeon-trigger').on('click', function(e){
			e.preventDefault();

			var $this    = $(this),

			item    	 = $this.closest('.faq__accordeon-item'),
			list    	 = $this.closest('.faq__accordeon'),
			links 		 = list.find('.faq__accordeon-trigger'),
			items 		 = list.find('.faq__accordeon-item'),
			content 	 = item.find('.faq__accordeon-content'),
			otherContent = list.find('.faq__accordeon-content') 
			duration	 = 300;


			if(!item.hasClass('active')){
				items.removeClass('active');
				item.addClass('active');
				links.removeClass('active');
				$this.addClass('active');

				otherContent.stop(true, true).slideUp(duration);
				content.stop(true, true).slideDown(duration);
			}
			else{
				content.stop(true, true).slideUp(duration);
				item.removeClass('active');
				$this.removeClass('active');
			}
			

		});

	}());
	//tabs
	(function(){
		$('.team__tabs-link').on('click', function(e){
			e.preventDefault();


			var $this = $(this),			
			item = $this.closest('.team__tabs-item'), 
			content= $('.team__tabs-content'),
			itemPosition = item.data('class');


			content.filter('.team__tabs-content-' + itemPosition)
			.add(item)
			.addClass('active')
			.siblings()
			.removeClass('active');
		});
	}());
	//map
	(function(){
		ymaps.ready(init);
		var myMap,
		myPlacemark;

		function init(){     
			myMap = new ymaps.Map("map", {
				center: [53.92535502, 27.59036039],
				zoom: 18
			});
			myPlacemark = new ymaps.Placemark([53.92535502, 27.59036039], 

			{ 
				balloonContentHeader: '<img src="/img/logo/logo-big.png" alt="" class="map__logo"/><span class="map__color">HipSweet</span>',
				balloonContentBody: 'The Best Bakery',
				balloonContentFooter: 'Any Baking',
				hintContent: 'HipSweet is Here!!!' 
			},
			{
				iconLayout: 'default#image',
				iconImageHref: '/img/map/pointer.png',
				iconImageSize: [21, 30],
				iconImageOffset: [-3, -42]
			});

			myMap.geoObjects.add(myPlacemark);
			myMap.behaviors.disable(['drag', 'rightMouseButtonMagnifier', 'scrollZoom']);
			myMap.controls
			.remove('geolocationControl')
			.remove('searchControl')
			.remove('trafficControl')
			.remove('typeSelector')
			.remove('fullscreenControl')    	
			.remove('rulerControl')

		}
	})();
	//telephone mask	
	(function(){
		$('#phone').mask('+8 - (000)-000-00-00');
	}());
	
	
	


});




