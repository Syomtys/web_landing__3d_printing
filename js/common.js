document.addEventListener('DOMContentLoaded', function() {

	function TogleMenu(){
        $(".menu-togle").toggleClass("menu-togle_active")
        $(".top-menu").toggleClass("top-menu_active")
    };
    $(".menu-togle").click(function(){TogleMenu()});
    function CloseMenu(){
        $(".menu-togle").removeClass("menu-togle_active")
        $(".top-menu").removeClass("top-menu_active")
    }

    $(document).click(function(e){
        if ($(e.target).closest(".menu-container").length) return
        CloseMenu()
    })

    const homeSlider = new Swiper(".home-slider",{
        speed: 800,
        effect: "fade",
        centeredSlides: true,
        pagination:{
            el:".home-slider-pagination",
            type:"custom",
            renderCustom: function (swiper, current, total) {
                let indT = total >=10 ? total: `0${total}`
                let indC = total >=10 ? current: `0${current}`
                return `<b>${indC}</b><span></span>${indT}`
            }
        },
        scrollbar:{
            el:'.home-slider-scrollbar',
            draggable: true
        },
        navigation:{
            prevEl: ".home-slider-prev",
            nextEl: ".home-slider-next"
        },
        keyboard:{
            enable: true,
            OnliInViewport: false
        },
        runCallbackonIniy: true
    })

})
