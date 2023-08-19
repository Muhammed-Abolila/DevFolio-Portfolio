// <===============Change Navbar background=================>
let aboutOffSet = $("#about").offset().top;
$(window).scroll(function() {
    let scrollTop = $(window).scrollTop()
    if (scrollTop > aboutOffSet - 40) {
        $("#navbar").css({ "backgroundColor": "rgba(0,123,255,0.7)" });
        $(".nav-link,.navbar-brand").css({ "color": "#fff" });
        $("#btnUp").fadeIn(500);
    } else {
        $("#navbar").css({ "backgroundColor": "#fff" });
        $(".nav-link,.navbar-brand").css({ "color": "#0078ff" });
        $("#btnUp").fadeOut(500)
    }
});


// <=================button to scroll top===================>
$("#btnUp").click(function() {
    $("html,body").animate({ scrollTop: 0 }, 1500)
})


// <===========sections==============>

$("a[href^='#']").click(function() {
    let ahref = $(this).attr("href");
    let sectionOffset = $(ahref).offset().top;
    $("html,body").animate({ scrollTop: sectionOffset - 35 }, 1500)
})



//<=============toggle color============>
let colorBox = $("#color-box");
let colorSpace = $(".color-space")
$("#icone").click(function() {
    let rightWidth = $("#rightSide").innerWidth();
    let x = colorBox.css("left")
    if (x == "0px") {
        colorBox.animate({ left: (-rightWidth) }, 1000)
    } else {
        colorBox.animate({ left: 0 }, 1000)
    }
});

colorSpace.eq(0).css("backgroundColor", "#ada74b");
colorSpace.eq(1).css("backgroundColor", "#09c");
colorSpace.eq(2).css("backgroundColor", "#0078ff");
colorSpace.eq(3).css("backgroundColor", "teal");
colorSpace.eq(4).css("backgroundColor", "#bf7eca");


colorSpace.click(function() {
    let bgColor = $(this).css("backgroundColor");
    $(".customBg").css({ "backgroundColor": bgColor })
})