/*스크롤 생기면 메뉴 fixed*/

$(window).scroll(function () {
    var height = $(document).scrollTop(); //실시간으로 스크롤의 높이를 측정

    console.log(height);

    if (height > 6) {
        $('.header').addClass('scroll');
        $('.topimg').css({
            display: "none"
        });
        $('.scrollimg').css({
            display: "block"
        });
        $('.ham').css({
            padding: "20px",
            transition: "all .5s ease-in-out",
            backgroundColor: "rgba(255, 255, 255, 1)",
            marginRight: "20px",
            boxShadow: "0 0 30px rgba(0,0,0,.09)",
            
        });//////// css ///////////////////
    
    } else if (height == 0) {
        $('.header').removeClass('scroll');
        $('.topimg').css({
            display: "block"
        });
        $('.scrollimg').css({
            display: "none"
        });
        $('.ham').css({
            padding: "0px",
            transition: "all .5s ease-in-out",
            backgroundColor: "rgba(255, 255, 255, 0)",
            marginRight: "20px",
            boxShadow: "none"
        })
    }
});
