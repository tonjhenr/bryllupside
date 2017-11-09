
    $(document).ready(function() {
        $('.container').carousel({
            num: 5,
            maxWidth: 450,
            maxHeight: 300,
            distance: 50,
            scale: 0.6,
            animationTime: 1000,
            showTime: 4000
        });
        $('#container2').carousel({
            num: 5,
            maxWidth: 200,
            maxHeight: 100,
            showTime: 5000
        });

        $('#container3').carousel({
            num: 5,
            maxWidth: 300,
            maxHeight: 250,
            distance: 30,
            autoPlay: false
        });
    });
	
	  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

