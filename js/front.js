(function(){
    $(document).ready(function(){
        console.log("!!!");
    })
    window.yeet = {},
    window.yeet.main = function(element){
        console.log(element)
        // slideType: {
        //     visual:{
        //         spaceBetween: 30,
        //         centeredSlides: true,
        //         autoplay: {
        //           delay: 2500,
        //           disableOnInteraction: false,
        //         },
        //         pagination: {
        //           el: ".swiper-pagination",
        //           clickable: true,
        //         },
        //         navigation: {
        //           nextEl: ".swiper-button-next",
        //           prevEl: ".swiper-button-prev",
        //         },
        //     }
        // },
        swiper : {
            console.log("!!!!")
            var swiper = new Swiper(".mySwiper", {
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: {
                  delay: 2500,
                  disableOnInteraction: false,
                },
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                },
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
              });
        }
    }


})
