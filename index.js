$(function () {
    const swiper = new Swiper(".swiper", {
        loop: true,
        // ページネーションが必要なら追加
        pagination: {
            el: ".swiper-pagination"
        },
        // ナビボタンが必要なら追加
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });

    //アコーディオンをクリックした時の動作
    $('.faq-title-wrap').on('click', function () {//タイトル要素をクリックしたら
        var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
        $(findElm).slideToggle();//アコーディオンの上下動作

        if ($(this).hasClass('close')) {//タイトル要素にクラス名closeがあれば
            $(this).removeClass('close');//クラス名を除去し
        } else {//それ以外は
            $(this).addClass('close');//クラス名closeを付与
        }
    });

    //ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
    $(window).on('load', function () {
        $('.accordion-area li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
        $(".open").each(function (index, element) { //openクラスを取得
            var Title = $(element).children('.faq-title-wrap'); //openクラスの子要素のtitleクラスを取得
            $(Title).addClass('close');       //タイトルにクラス名closeを付与し
            var Box = $(element).children('.box'); //openクラスの子要素boxクラスを取得
            $(Box).slideDown(500);          //アコーディオンを開く
        });
    });
})