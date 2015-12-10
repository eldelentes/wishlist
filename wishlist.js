var h = window.innerHeight;
var link = "widget.html";
var iframe = document.createElement('iframe');
iframe.frameBorder=0;
iframe.width="300px";
iframe.height=h;
iframe.style.float = "right";
iframe.id="wish-list";
iframe.setAttribute("src", link);

var x = document.getElementsByTagName("body")[0];
x.appendChild(iframe);