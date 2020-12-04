window.onload = function () {
    var nav3 = document.getElementsByClassName('ct_b_nav')[0];
    var nav_a3 = nav3.getElementsByTagName('a');
    var ct_b_mc = document.getElementsByClassName('ct_b_mc')[0];
    var ct_b_ul3 = ct_b_mc.getElementsByTagName('ul');
    //中间的第三个板块
    for (var i = 0; i < nav_a3.length; i++) { //用for循环给每个栏目加上鼠标移入事件
        nav_a3[i].index = i;
        nav_a3[i].onmouseover = function () {
            for (var j = 0; j < nav_a3.length; j++) { //先将所有栏目样式清空
                nav_a3[j].className = 'none';
                ct_b_ul3[j].style.display = 'none';
            }
            this.className = 'current';
            ct_b_ul3[this.index].style.display = 'block';
        }
    }
    //中间轮播图的实现
    var show = document.getElementById('show');
    show.className = 'tran'; //过渡样式
    var timer = setInterval(function () {
        if (show.offsetLeft <= -918) {
            show.style.left = 0; //ul滚到最左边时跳回右边原始状态
            show.className = 'none';
        } else {
            show.className = 'tran';
            show.style.left = show.offsetLeft - 306 + 'px';
        }
    }, 3000);
    //搜索栏
    var search = document.getElementById("search");
    search.onkeydown = function (event) {
        event = event || window.event;
        if (event.keyCode == 13) {
            var wd=search.value;
            window.open("https://www.baidu.com/s?ie=UTF-8&wd="+wd);
            search.value='';
        }
    }
}