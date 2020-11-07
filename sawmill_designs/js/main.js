///// 모바일 코드 만들기 ///
var mob = 0;
if ($(window).width() < 990) {
    mob = 1;
} ///// 모바일코드발급 /////
console.log("모바일?" + mob);


$(function () { //////jQB//////////////////////////////
    console.log("로딩완료!");


    // 패럴렉스
    $("selector").enllax();

    $("body").css({
        overflowX: "hidden",
        overflowY: "auto"
    })

    // 모바일이 아닐때만 작동
    if (!mob) {
        /*쇼핑아이콘 호버*/
        //        $(".shopping_icon").hover(
        //            function () { //over
        //                $(".shopping_icon .shop_over").css({
        //                    opacity: 1,
        //                    transition: "all .5s ease"
        //                });
        //                $(".shopping_icon .shop_out").css({
        //                    opacity: 0,
        //                    transition: "all .5s ease"
        //                })
        //
        //
        //            },
        //            function () { //out
        //
        //                $(".shopping_icon .shop_over").css({
        //                    display: "none",
        //                    transition: "all .5s ease"
        //                });
        //                $(".shopping_icon .shop_out").css({
        //                    display: "block",
        //                    transition: "all .5s ease"
        //                })
        //
        //
        //            }); /////// hover ////////////////





        /*메인영상 버튼 호버*/
        $(".go_explorepro.onbtn").hover(
            function () { //over
                $(".out_img").css({
                    display: "none"
                });
                $(".hover_img").css({
                    display: "block"
                });

            },
            function () { //out
                $(".out_img").css({
                    display: "block"
                });
                $(".hover_img").css({
                    display: "none"
                });
            }); /////// main_btn_hover ////////////////






        /*Our Products 버튼 호버*/
        $(".ourpro_li>a").hover(
            function () { //over
                $(this).addClass("onpro");
            },
            function () { //out
                $(this).removeClass("onpro");
            }); /////// hover ////////////////


        /*공통버튼 호버*/
        /******************view_all******************/
        $(".view_all").hover(
            function () { //over
                $(this).addClass("comon");
                $(".out_varrow").css({
                    display: "none"
                });
                $(".hover_varrow").css({
                    display: "block"
                });
            },
            function () { //out
                $(this).removeClass("comon");
                $(".out_varrow").css({
                    display: "block"
                });
                $(".hover_varrow").css({
                    display: "none"
                });
            }); /////// hover ////////////////

        /******************shop_now******************/
        $(".shop_now").hover(
            function () { //over
                $(this).addClass("comon");
                $(".out_varrow1").css({
                    display: "none"
                });
                $(".hover_varrow1").css({
                    display: "block"
                });
            },
            function () { //out
                $(this).removeClass("comon");
                $(".out_varrow1").css({
                    display: "block"
                });
                $(".hover_varrow1").css({
                    display: "none"
                });
            }); /////// hover ////////////////

        /******************about_us******************/
        $(".about_us").hover(
            function () { //over
                $(this).addClass("comon");
                $(".out_varrow2").css({
                    display: "none"
                });
                $(".hover_varrow2").css({
                    display: "block"
                });
            },
            function () { //out
                $(this).removeClass("comon");
                $(".out_varrow2").css({
                    display: "block"
                });
                $(".hover_varrow2").css({
                    display: "none"
                });
            }); /////// hover ////////////////

        /******************inspirations******************/
        $(".inspirations").hover(
            function () { //over
                $(this).addClass("comon");
                $(".out_varrow3").css({
                    display: "none"
                });
                $(".hover_varrow3").css({
                    display: "block"
                });
            },
            function () { //out
                $(this).removeClass("comon");
                $(".out_varrow3").css({
                    display: "block"
                });
                $(".hover_varrow3").css({
                    display: "none"
                });
            }); /////// hover ////////////////

        /******************learn_more******************/
        $(".learn_more").hover(
            function () { //over
                $(this).addClass("comon");
                $(".out_varrow4").css({
                    display: "none"
                });
                $(".hover_varrow4").css({
                    display: "block"
                });
            },
            function () { //out
                $(this).removeClass("comon");
                $(".out_varrow4").css({
                    display: "block"
                });
                $(".hover_varrow4").css({
                    display: "none"
                });
            }); /////// hover ////////////////
        
         /******************learn_more******************/
        $(".learn_more2").hover(
            function () { //over
                $(this).addClass("comon");
                $(".out_varrow4-2").css({
                    display: "none"
                });
                $(".hover_varrow4-2").css({
                    display: "block"
                });
            },
            function () { //out
                $(this).removeClass("comon");
                $(".out_varrow4-2").css({
                    display: "block"
                });
                $(".hover_varrow4-2").css({
                    display: "none"
                });
            }); /////// hover ////////////////


        /******************our_story******************/
        $(".video_our_story_box").hover(
            function () { //over
                $(this).addClass("comon");
                $(this).addClass("comvideo_on");

            },
            function () { //out
                $(this).removeClass("comon");
                $(this).removeClass("comvideo_on");


            }); /////// hover ////////////////

        /******************ex_box******************/
        $(".ex_box").hover(
            function () { //over
                $(this).addClass("comon");
                $(this).addClass("comvideo_on");

            },
            function () { //out
                $(this).removeClass("comon");
                $(this).removeClass("comvideo_on");


            }); /////// hover ////////////////
    } ////////// if :  // 모바일이 아닐때만 작동 ////////

    /*햄버거 버튼 클릭시 효과*/
    $(".ham").click(function () {
        $(this).toggleClass("active");
    });

    /*스크롤바 막기*/
    $('.menu').on('scroll touchmove mousewheel', function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    });


    /*클릭시 페이드인 아웃*/
    $('.menu_toggle').click(function (e) {


        console.log($('.table_cont').css("display"));
        var csts = "visible";
        if ($('.table_cont').css("display") === "none") csts = "hidden";

        $('.table_cont').fadeToggle(300);
        $('body').css({
            overflow: csts

        });


    }); /////////////// click //////////////





    ///// 모바일일때 사진넘기기 동영상 대체 /////
    /*//////////////////////////////////////////////////
                    함수명: arrImg
                    기능: 연속장면 이미지를 순서대로 선택요소 내부에 추가함
                */ /////////////////////////////////////////////////
    var arrImg = function () {
        // 1. 함수호출확인
        //console.log("함수호출!");

        //비우기
        $("#ani").html("");

        // 2. 애니메이션 할 이미지 셋팅
        for (var i = 0; i < 141; i++) {
            $("#ani")
                .append('<li style="background-image: url(images/new_seq/seq' + i + '.jpg)"></li>');
        } ///// for문 ///////////////

        // for문 셋팅 후 첫장면은 보이고 나머지 이미지 숨기기
        $("#ani li").hide().first().show();

    }; /////// arrImg 함수 ////////////////////////////
    //////////////////////////////////////////////////


    // 이미지셋팅함수 호출!
    arrImg();

    /*//////////////////////////////////////////////////
        함수명: nextFrame
        기능: 순서대로 다음 이미지를 한장씩 보이게함
    */ //////////////////////////////////////////////////
    // 장면번호
    var fnum = 0;
    // 장면개수
    var fcnt = $("#ani li").length;
    //console.log("장면개수:" + fcnt);

    var nextFrame = function () {
        //console.log("함수호출!");

        // 1. 장면번호 증가하기
        fnum++;
        if (fnum > fcnt - 1) fnum = 0;
        // 장면번호가 증가하다가 끝번호보다 커지면 처음으로(0번)

        // 2. 보이는 장면은 숨기고
        //:visible은 display:none이 아닌것을 선택함
        $("#ani li:visible").hide();
        // 3. 순번에 해당하는 이미지는 보이게한다!
        $("#ani li").eq(fnum).show();

    }; /////// nextFrame 함수 //////////////////////////////
    ////////////////////////////////////////////////////

    /// 장면넘기기 호출!
    setInterval(nextFrame, 90);





}) ///////////////////jQB////////////////////////////
////////////////////////////////////////////////////
