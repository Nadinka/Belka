/**
 * Created with JetBrains RubyMine.
 * User: root
 * Date: 6/28/13
 * Time: 7:47 AM
 * To change this template use File | Settings | File Templates.
 */
var _gaq = _gaq || []; _gaq.push(['_setAccount', 'UA-16876640-1']); _gaq.push(['_trackPageview']);
  (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();

(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter18085276 = new Ya.Metrika({id:18085276, enableAll: true, trackHash:true, webvisor:true});
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");

window.jQuery || document.write('<script src="http://cdn.gophotoweb.com/saas-v2/prod/oliver/site/scripts/vendor/jquery-1.8.0.min.js"><\/script>');

CoreModel._setHost("http://demo.oliver-2.gophotoweb.com/");
CoreModel.options.crossColor = '#f7be23';
CoreModel.options.previewCrossColor = '#f7be23';
CoreModel.options.previewIconColor = '#8f8f8f';
CoreModel.options.previewArrowsColor = '#5c5c5c';


$(document).ready(function(){
    CoreModel.init('n');
});



