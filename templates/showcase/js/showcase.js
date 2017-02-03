//<!-- Loading jQuery Easing plugin asynchronously (thanks to http://idiallo.com/javascript/async-jquery) -->
//<script>
//(function () {
function () {
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
};
//})();
//</script>
//<!-- end Loading jQuery Easing plugin asynchronously -->
