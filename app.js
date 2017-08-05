$(function () {
    loadScript();
});

function initialize() {
    var map = new BMap.Map('container');
    var point = new BMap.Point(109.701910, 26.579520);
    map.centerAndZoom(point, 18);
    var sizeValue = new BMap.Size(35, 49);
    var anchorValue = new BMap.Size(22, 66);
    if(platform.isMobile){
        sizeValue = new BMap.Size(28, 39);
        anchorValue = new BMap.Size(19, 56);
    }
    var myIcon = new BMap.Icon('./../../img/contact/mapaddress.png', sizeValue, {
        anchor: anchorValue,
    });
    var marker = new BMap.Marker(point, {icon: myIcon});    
    map.addOverlay(marker);   
    var timer = null;
    $(window).on('resize',function(){
        clearTimeout(timer);
        timer = setTimeout(function() {
            map.centerAndZoom(point, 18); 
            map.addOverlay(marker);
        }, 100);
    });
}

function loadScript() {
    var script = document.createElement("script");
    script.src = "http://api.map.baidu.com/api?v=2.0&ak=hvvXZsTnqy0LFrSX74x8KysKGNGxLZXj&callback=initialize"; //此为v2.0版本的引用方式
    document.body.appendChild(script);
}