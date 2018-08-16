
//弹窗内图片点击移动
var slideIndex = 1;

var plusDivs = function(n) {
	showDivs(slideIndex += n);
}
var showDivs = function(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	if (n > x.length) {slideIndex = 1}    
	if (n < 1) {slideIndex = x.length}
	for (i = 0; i < x.length; i++) {
	x[i].style.display = "none";  
	}
	x[slideIndex-1].style.display = "block";  
}
showDivs(slideIndex);

//弹窗内图片（max-width：768px)左右滑动
$(".popImg").on("touchstart", function(e) {
    // 判断默认行为是否可以被禁用
    if (e.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!e.defaultPrevented) {
            e.preventDefault();
        }
    }   
    startX = e.originalEvent.changedTouches[0].pageX,
    startY = e.originalEvent.changedTouches[0].pageY;
});
$(".popImg").on("touchend", function(e) {         
    // 判断默认行为是否可以被禁用
    if (e.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!e.defaultPrevented) {
            e.preventDefault();
        }
    }               
    moveEndX = e.originalEvent.changedTouches[0].pageX,
    moveEndY = e.originalEvent.changedTouches[0].pageY,
    X = moveEndX - startX,
    Y = moveEndY - startY;
    //左滑
    if ( X > 0 ) {    
        plusDivs(-1);             
    }
    //右滑
    else if ( X < 0 ) { 
        plusDivs(1);  
    }
});

//点击works弹窗出现，点击蒙版弹窗消失
$(document).ready(function(){

	$('.mask').click(function() {
		$('.popUp').hide();
		$('.mask').hide();
	})
	$('.workArea').click(function(e) {
        e.stopPropagation();
        
        var key = this.getAttribute('id')

        

        //加入Item
        

        var popUpImgs = JSON.parse(localStorage.getItem(key))
        
        var item = document.createElement('div')
        item.setAttribute('id','popUpImgs')
        item.setAttribute('class','popImg')

        for (var i =0;i<popUpImgs.length;i++){
            var img = document.createElement('img')
            img.setAttribute('src',popUpImgs[i])
            img.setAttribute('class','mySlides')
            if (i==0) {img.setAttribute('style','display:block')}
            else {
                img.setAttribute('style','display:none') 
            }
            item.appendChild(img);

        }
        var popUpImgDiv = document.getElementById('popUpImgs');

        var parentDiv = popUpImgDiv.parentNode;
        parentDiv.replaceChild(item,popUpImgDiv)

        

        $('.mask').show();
        

		$('.popUp').show();
	});

});

//移动端：当workArea距离顶部小于（px）时候变彩色

