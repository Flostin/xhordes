// ==UserScript==
// @name         XHordes
// @namespace    http://tampermonkey.net/
// @version      0.18.2
// @description  A modded version of the Hordes.io client
// @author       LegusX and CampFire
// @match        https://hordes.io/*
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// @connect      hordes.io
// ==/UserScript==
(function(){
    window.stop();
    GM_xmlhttpRequest({
        method: 'GET',
        url: "http://hordes.io",
        onload: function(ev) {
            document.open();
            let index = ev.responseText.replace('<script async="async" src="script/dist.min.js"></script>', '<script async = "async" src="https://cdn.jsdelivr.net/gh/LegusX/xhordes/src/antialias/aahordes.min.js"></script>');
            index = index.replace('<link href="/styles/game.css" rel="stylesheet">', '<link href="https://cdn.jsdelivr.net/gh/LegusX/xhordes/src/antialias/aahordes.min.css" rel="stylesheet">');
            document.write(index);
            document.close();
        }
    });
})();

//Make the DIV element draggagle: (Ignore this, it isn't finished)
// var script = document.createElement("script");
// script.textContent = 'function dragElement(e){var t=0,n=0,o=0,d=0;function m(e){e=e||window.event,o=e.clientX,d=e.clientY,document.onmouseup=u,document.onmousemove=i}function i(m){m=m||window.event,t=o-m.clientX,n=d-m.clientY,o=m.clientX,d=m.clientY,e.offsetTop-n<0||e.offsetLeft-t<0||e.offsetLeft-t+e.getBoundingClientRect().width-15>document.body.clientWidth||e.getBoundingClientRect().bottom-n>window.innerHeight||(document.getElementById("x").textContent=e.getBoundingClientRect().bottom,document.getElementById("y").textContent=e.getBoundingClientRect().bottom-n,e.style.top=e.offsetTop-n+"px",e.style.left=e.offsetLeft-t+"px")}function u(){document.onmouseup=null,document.onmousemove=null,document.getElementById("x").textContent=e.getBoundingClientRect().bottom,document.getElementById("y").textContent=window.innerHeight}document.getElementById(e.id+"header")?document.getElementById(e.id+"header").onmousedown=m:e.onmousedown=m}dragElement(document.getElementById("ui_chat")),dragElement(document.getElementById("ui_inventory")),dragElement(document.getElementById("ui_char"));';
// document.body.appendChild(script);
