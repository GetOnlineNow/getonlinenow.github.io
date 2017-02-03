// Loading jQuery Easing plugin asynchronously  (thanks to http://idiallo.com/javascript/async-jquery)
<script>
(function () {
    var done = false;
    var script = document.createElement("script"),
    head = document.getElementsByTagName("head")[0] || document.documentElement;
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js';
    script.type = 'text/javascript'; 
    script.async = true;
    script.onload = script.onreadystatechange = function() {
        if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
            done = true;
            // Process async variable
            var async = async || [];
            while(async.length) { // there is some syncing to be done
                var obj = async.shift();
                if (obj[0] =="ready") {
                    $(obj[1]);
                }else if (obj[0] =="load"){
                    $(window).load(obj[1]);
                }
            }
            async = {
                push: function(param){
                    if (param[0] =="ready") {
                        $(param[1]);
                    }else if (param[0] =="load"){
                        $(window).load(param[1]);
                    }
                }
            };
            // End of processing
            script.onload = script.onreadystatechange = null;
            if (head && script.parentNode) {
                head.removeChild(script);
            }
        }
    };
head.insertBefore(script, head.firstChild);
})();
</script>
// end Loading jQuery Easing plugin asynchronously

function collapseNavbar(){if($(".navbar").offset().top>50){$(".navbar-fixed-top").addClass("top-nav-collapse");}else{$(".navbar-fixed-top").removeClass("top-nav-collapse");}}$(window).scroll(collapseNavbar);$(document).ready(collapseNavbar);$(function(){$('a.page-scroll').bind('click',function(event){var $anchor=$(this);$('html, body').stop().animate({scrollTop:$($anchor.attr('href')).offset().top},1500,'easeInOutExpo');event.preventDefault();});});$('.navbar-collapse ul li a').click(function(){$(this).closest('.collapse').collapse('toggle');});var myLat;var myLon;$(function(){$.getJSON('https://ipinfo.io/geo',function(response){var loc=response.loc.split(',');var coords={latitude:loc[0],longitude:loc[1]};myLat=coords.latitude;myLon=coords.longitude;});});var map=null;google.maps.event.addDomListener(window,'load',init);google.maps.event.addDomListener(window,'resize',function(){map.setCenter(new google.maps.LatLng(myLat,myLon));});function init(){var mapOptions={zoom:12,center:new google.maps.LatLng(myLat,myLon),disableDefaultUI:true,scrollwheel:false,draggable:false,styles:[{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]};var mapElement=document.getElementById('map');map=new google.maps.Map(mapElement,mapOptions);var image='img/map-marker.svg';var myLatLng=new google.maps.LatLng(myLat,myLon);var beachMarker=new google.maps.Marker({position:myLatLng,map:map,icon:image});}