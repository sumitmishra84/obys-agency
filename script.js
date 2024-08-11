document.addEventListener("DOMContentLoaded", function() {
    function LocomotiveAnimation() {
        gsap.registerPlugin(ScrollTrigger);

        // Ensure that the element with ID #main exists
        const mainElement = document.querySelector("#main");
        if (!mainElement) {
            console.error("ID #main wala element nahi mila.");
            return;
        }

        // Using Locomotive Scroll
        const locoScroll = new LocomotiveScroll({
            el: mainElement,
            smooth: true
        });

        // Ensure that the element with class .smooth-scroll exists
        const smoothScrollElement = document.querySelector(".smooth-scroll");
        if (!smoothScrollElement) {
            console.error("Class .smooth-scroll wala element nahi mila.");
            return;
        }

        // Sync Locomotive Scroll with ScrollTrigger
        locoScroll.on("scroll", ScrollTrigger.update);

        // Set ScrollTrigger proxy methods
        ScrollTrigger.scrollerProxy(".smooth-scroll", {
            scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
            pinType: smoothScrollElement.style.transform ? "transform" : "fixed"
        });

        // Refresh ScrollTrigger and update LocomotiveScroll
        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        ScrollTrigger.refresh();
    }

    var tl = gsap.timeline();
    tl.from(".line h1", {
        y: 150,
        stagger: 0.25,
        duration: 0.6,
        delay: 0.5
    });
    tl.from("#line-part1", {
        opacity: 0,
        onStart: function() {
            var h5timer = document.querySelector("#line-part1 h5");
            var grow = 0;
            var interval = setInterval(function() {
                if (grow < 100) {
                    h5timer.innerHTML = grow++;
                } else {
                    h5timer.innerHTML = grow;
                    clearInterval(interval);
                }
            }, 33);
        },
    });
    tl.to('.line h2', {
        animationName: "anime",
        opacity: 1
    });
    tl.to("#loader", {
        opacity: 0,
        duration: 0.2,
        delay: 0,
    });

    tl.from("#page1", {
        delay: 0.2,
        y: 1600,
        opacity: 0,
        duration: 0.6,
        ease: Power4,
    });
    tl.to("#loader", {
        display: "none",
    });
    tl.from("#nav", {
        opacity: 0
    });
    tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1", {
        y: 140,
        stagger: 0.2,
    });
    tl.from("#hero1, #page2", {
        opacity: 0,
    }, "-=1.2");

    function loadingAnimation() {
        // Add loading animation logic here
    }
    function cursorAnimation() {
        document.addEventListener("mousemove", function(dets) {
            gsap.to("#crsr", {
                left: dets.x,
                top: dets.y,
            });
        });
        Shery.makeMagnet("#nav-part2 h4");

        var videoContainer=document.querySelector("#video-container");
        var video=document.querySelector("#video-container video")
        videoContainer.addEventListener("#play-icone",function(){
        videoContainer.addEventListener("mousemove",function(dets){
                gsap.to(".mousefollower",{
                    opacity:0
                });
                gsap.to("#video-cursor",{
                    x:dets.x - 500,
                    y:dets.y - 100,
                });
            });
        }); 
        videoContainer.addEventListener("mouseleave",function(){
            gsap.to(".mousefollower",{
                opacity:1
            });
            gsap.to("#video-cursor",{
                left:"70",
                top:"-15%"
            });
        });


        var flag=0
        videoContainer.addEventListener("click", function() {
        if(flag==0){
            video.play()
            video.style.opacity = 1
            document.querySelector("#video-cursor").innerHTML=`<i class="ri-pause-mini-fill"></i>`
            gsap.to("#video-cursor",{
                scale:0.5
            })
            flag=1
        }else{
            video.pause();
            video.style.opacity = 0;
            document.querySelector("#video-cursor").innerHTML=`<i class="ri-pay-mini-fill"></i>`
            gsap.to("#video-cursor",{
                scale:1,
        }) 
        flag=0
    }
    })
         
}
        
    loadingAnimation(); 
    cursorAnimation();
    LocomotiveAnimation();

    // Ensure Shery is loaded and use the correct method
    if (window.Shery) {
        Shery.imageEffect(".image-div", {  // Correct function name here
            style: 5,
            gooey: true,
            config: {
                noiseDetail: { value: 7.44, range: [0, 100] },
                distortionAmount: { value: 2.98, range: [0, 10] },
                scale: { value: 36.36, range: [0, 100] },
                speed: { value: 0.61, range: [0, 1] },
                zindex: { value: "99", range: [-9999999, 9999999] },
                aspect: { value: 0.9840426539534833 },
                ignoreShapeAspect: { value: true },
                shapePosition: { value: { x: 0, y: 0 } },
                shapeScale: { value: { x: 0.5, y: 0.5 } },
                shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
                shapeRadius: { value: 0, range: [0, 2] },
                currentScroll: { value: 0 },
                scrollLerp: { value: 0.07 },
                gooey: { value: true },
                infiniteGooey: { value: false },
                growSize: { value: 4, range: [1, 15] },
                durationOut: { value: 1, range: [0.1, 5] },
                durationIn: { value: 1.5, range: [0.1, 5] },
                displaceAmount: { value: 0.5 },
                masker: { value: true },
                maskVal: { value: 1.39, range: [1, 5] },
                scrollType: { value: 0 },
                geoVertex: { range: [1, 64], value: 1 },
                noEffectGooey: { value: true },
                onMouse: { value: 0 },
                noise_speed: { value: 1.07, range: [0, 10] },
                metaball: { value: 0.31, range: [0, 2] },
                discard_threshold: { value: 0.5, range: [0, 1] },
                antialias_threshold: { value: 0, range: [0, 0.1] },
                noise_height: { value: 0.49, range: [0, 1] }
            }
        });
    } else {
        console.error("Shery.js library is not loaded.");
    }
});



document.addEventListener("mousemove", function(dets){
    gsap.to("#Flag",{
        x:dets.x,
        y:dets.y
    })
})


document.querySelector("#hero3").addEventListener("mouseenter",
    function(){
        gsap.to("#Flag",{
            opacity:1
        });
    });

    document.querySelector("#hero3").addEventListener("mouseleave",
        function(){
            gsap.to("#Flag",{
                opacity:0
            });
        });  







