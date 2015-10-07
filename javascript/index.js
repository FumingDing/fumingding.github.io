/*
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
*/

var pixcel=window.screen.width,scale=window.devicePixelRatio;
if(pixcel==1920&scale==1){
    //alert(scale);
    document.getElementById('html').style.fontSize="125%";
}
if(pixcel＜1300){
   alert("change backgroung image ratio")
}
