function getVendorPrefix() {
    // 使用body是为了避免在还需要传入元素
    var body = document.body || document.documentElement,
    style = body.style,
    vendor = ['webkit', 'khtml', 'moz', 'ms', 'o'],
    i = 0;
    while (i < vendor.length) {
    // 此处进行判断是否有对应的内核前缀
        if (typeof style[vendor[i] + 'Transition'] == 'string') {
             return vendor[i];
         }
         i++;
    }
};
if(getVendorPrefix()=="webkit"){
   //document.getElementById("html").style.transform="scale(0.5)";
}

var pixcel=window.screen.width,scale=window.devicePixelRatio;
           
//alert(window.screen.width);
//alert(window.devicePixelRatio);