var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-877593-4']);
_gaq.push(['_trackPageview']);

(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript';
	ga.async = true;
	ga.src = 'https://ssl.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

var Analytics = {
};
Analytics.trackEvent = function (key, value)
{
	_gaq.push(['_trackEvent', key, value]);
};