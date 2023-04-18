$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('header').addClass('header--active');
            $('.up-button').addClass('up-button--active');
        } else {
            $('header').removeClass('header--active');
            $('.up-button').removeClass('up-button--active');
        }
    });

    //スクロールエフェクト
    function fadeUpEffect() {
        $('.fadeUpEffect').each(function () {
            var elemPos = $(this).offset().top + 100;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                $(this).addClass('fadeUp');
            }
        });
    }
    $(window).scroll(function () {
        fadeUpEffect();
    });

    $tabs = $('.course-button');
    $('.course-button').on('click', function () {
        $('.course-button--active').removeClass('course-button--active');
        $(this).addClass('course-button--active');
        const index = $tabs.index(this);
        $('.course-contents').removeClass('show-contents').eq(index).addClass('show-contents');
    })


    // //====左に動くアニメーションここから===
    // $('.leftAnime').each(function () {
    //     var elemPos = $(this).offset().top - 50;
    //     var scroll = $(window).scrollTop();
    //     var windowHeight = $(window).height();
    //     if (scroll >= elemPos - windowHeight) {
    //         //左から右へ表示するクラスを付与
    //         //テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
    //         $(this).addClass("slideAnimeLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
    //         $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
    //     } else {
    //         //左から右へ表示するクラスを取り除く
    //         $(this).removeClass("slideAnimeLeftRight");
    //         $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");

    //     }
    // });

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
        var icon = $(this).find('span');
        console.log(icon);

        if ($(this).hasClass('close')) {//タイトル要素にクラス名closeがあれば
            $(this).removeClass('close');//クラス名を除去し
            $(icon).removeClass('close');
        } else {//それ以外は
            $(this).addClass('close');//クラス名closeを付与
            $(icon).addClass('close');//クラス名closeを付与
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

    $('.up-button').click(function () {
        $('html, body').animate({ scrollTop: 0 });
    });

    /*
背景色が伸びてテキストを表示
*/
    // 動きのきっかけの起点となるアニメーションの名前を定義
    function BgFadeAnime() {

        // 背景色が伸びて出現（左から右）
        $('.bgLRextendTrigger').each(function () { //bgLRextendTriggerというクラス名が
            var elemPos = $(this).offset().top - 50;//要素より、50px上の
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                $(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
            } else {
                $(this).removeClass('bgLRextend');// 画面外に出たらbgLRextendというクラス名を外す
            }
        });

        // 文字列を囲う子要素
        $('.bgappearTrigger').each(function () { //bgappearTriggerというクラス名が
            var elemPos = $(this).offset().top - 50;//要素より、50px上の
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                $(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
            } else {
                $(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
            }
        });
    }


    $(document).ready(function () {
        BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
    });
    // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function () {
        BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述


})