$(document).ready(function() {
    //Slider

    //References
    var prevBtn = $("div.prev");
    var nextBtn = $("div.next");
    var circles = $(".nav i");
    var images = $(".images img");
    var circles = $(".nav i");

    //On Click
    //Previous
    prevBtn.click(function(){
        nextPrevSlide("prev");
    });

    //Next
    nextBtn.click(function() {
        nextPrevSlide("next");
    });

    //On Keydown
    //Previous
    $(document).keydown(function(event){
        if(event.keyCode == 37) {
            nextPrevSlide("prev");
        } else if(event.keyCode == 39) {
            nextPrevSlide("next");
        }
    });

    //BONUS
    console.log(images[0]);
    circles.click(function(){
        var index = circles.index(this);

        circles.removeClass("active");
        images.removeClass("active");

        $(images[index]).addClass("active");
        $(circles[index]).addClass("active");
    });




//End doc ready
});

/**********************************************
 * FUNCTIONS
***********************************************/

//Carousel
function nextPrevSlide(direction) {
    var activeImg = $(".images img.active");
    var activeCircle = $(".nav i.active");

    //Reset
    activeImg.removeClass("active");
    activeCircle.removeClass("active");
    
    if(direction === "prev") {
        if(activeImg.hasClass("first")) {
            $(".images img.last").addClass("active")
            $(".nav i.last").addClass("active")
        }
        activeImg.prev().addClass("active");
        activeCircle.prev().addClass("active");

    } else if(direction === "next") {
        if(activeImg.hasClass("last")) {
            $(".images img.first").addClass("active");
            $(".nav i.first").addClass("active");
        }
        activeImg.next().addClass("active");
        activeCircle.next().addClass("active");
    }
};
