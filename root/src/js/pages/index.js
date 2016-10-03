var sysLan = window.navigator.language;

$('#lang-cn').click(function() {
	sysLan = 'zh-CN';
});

$('#lang-de').click(function() {
	sysLan = 'de-DE';
});

if(sysLan === 'zh-CN') {
	// 轮播框
	$.getJSON('http://47.90.202.48:8080/vcwss/f/carouselContents?lang=0', function(carousel) {
		if (carousel.success) {
			$.each(carousel.data.list, function(i,list){
				var id = '#carousel-'+i;
				$(id+' .carousel-title').text(list.title);
				$(id+' .carousel-text p').text(list.subtitle);
				$(id+' .carousel-text a').attr('href', list.url);
				$(id+' img').attr('src', list.img);
			});
		}
	});

	// 近期活动
	$.getJSON('http://47.90.202.48:8080/vcwss/f/recentEvents?lang=0', function(recentEvents){
		if(recentEvents.success) {
			$.each(recentEvents.data.list, function(i, list) {
				var id = '#event-'+i;
				$(id+' .title-block a').text(list.title);
				$(id+' a').attr('href', list.url);
				$(id+' img').attr('src', list.img);
				$(id+' .time-block').text(list.eventTime);
				$(id+' .location-block').text(list.eventAddress);
			});
		};
	});

	// 近期新闻
	$.getJSON('http://47.90.202.48:8080/vcwss/f/recentNews?lang=0', function(recentNews) {
		if(recentNews.success) {
			$.each(recentNews.data.list, function(i, list) {
				var id = '#news-'+i;
				$(id+' .title-block a').text(list.title);
				$(id+' a').attr('href', list.url);
				$(id+' img').attr('src', list.img);
				$(id+' .time-block-news').text(list.releaseTime);
			});
		};
	});

	// 广告框
	$.getJSON('http://47.90.202.48:8080/vcwss/f/ads/?lang=0', function(ads) {
		if(ads.success) {
			$.each(ads.data.list, function(i,list) {
				$('.parallax .heading h2').text(list.title);
				$('.parallax .subheading h4').text(list.subtitle);
				$('#inner-section').css('background', 'url('+list.img+') center no-repeat');
			});
		}
	});

	// 画廊
	$.getJSON('http://47.90.202.48:8080/vcwss/f/galleries?lang=0', function(galleries) {
		if (galleries.success) {
			$.each(galleries.data.list, function(i,list){
				var id = '#gallery-'+i;
				$(id+' .work-desc a').text(list.thema);
				$(id+' .img').attr('src', list.coverImg);
				$(id+' .item-img-overlay a').attr('href', list.coverImg);
				$(id+' .work-desc a').attr('href', list.url);
			});
		}
	});
};

