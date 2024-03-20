function  locoMotiveScroll(){
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,

    tablet: { smooth: true },

    smartphone: { smooth: true }
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    }

  });


  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

// locoMotiveScroll();

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });


let tl = gsap.timeline();

tl.from(".page1>nav>.logo, .page1>nav>.list>a, .page1>nav>.menu>input, .page1>nav>.menu>i",{
    x: 50,
    opacity: 0,
    duration: 1.7,
    delay: .2,
    stagger: .1,
    ease: "elastic.out(.5,0.3)",
  },"anime")
tl.from(".page1>.hero>.left>.top",{
    x: -100,
    opacity: 0,
    duration: .7,
    delay: 1.5,
    scale: .8,
    // ease: "elastic.out(1,0.3)",
    ease: "back.out(1.7)",
},"anime")
tl.from(".page1>.hero>.left>.bottom>.box",{
    y: 100,
    opacity: 0,
    duration: .7,
    delay: 1.8,
    stagger: .3,
    scale: .8,
    ease: "back.out(1.7)",
},"anime")
tl.from(".page1>.hero>.right",{
    x: 100,
    opacity: 0,
    duration: .7,
    delay: 2.1,
    scale: .8,
    ease: "back.out(1.7)",
},"anime")

// gsap.from(".page2>h1, #img1, #img2, #img3",{
//   scrollTrigger: {
//     scroller:  ".main",
//     trigger: ".page2>h1",
//     start: "top 80%",
//     end: "bottom bottom",
//     // markers: true
//   },
//   y: 100, 
//   opacity: 0, 
//   scale: .8,
//   // stagger: .3
// })

gsap.set(".page2>h1", {y: 100, opacity: 0, scale: .8});

ScrollTrigger.batch(".page2>h1", {
  start: "100px bottom",
  onEnter: elements => gsap.to(elements, {y: 0, opacity: 1, scale: 1}),
//   onLeaveBack: elements => gsap.set(elements, {y: 100, opacity: 0, scale: .9, overwrite: true})
});

gsap.set("#img1, #img2, #img3", {x: 100, opacity: 0, scale: 0});

ScrollTrigger.batch("#img1, #img2, #img3", {
  start: "100px bottom",
  onEnter: elements => gsap.to(elements, {x: 0, opacity: 1, scale: 1, duration: 1, ease: "elastic.out(.5,0.3)",  stagger: 0.2}),
//   onLeaveBack: elements => gsap.set(elements, {x: 100, opacity: 0, scale: 0, overwrite: true})
});

// gsap.from(".page3 .top h2, .page3 .top .buttons button",{
//   scrollTrigger: {
//     scroller:  ".main",
//     trigger: ".page3 .top h2",
//     start: "top 80%",
//     end: "bottom bottom",
//     // markers: true
//   },
//   x: 100, 
//   opacity: 0,
//   stagger: .2
// })

gsap.set(".page3 .top h2, .page3 .top .buttons button", {x: 100, opacity: 0});

ScrollTrigger.batch(".page3 .top h2, .page3 .top .buttons button", {
  start: "100px bottom",
  onEnter: elements => gsap.to(elements, {x: 0, opacity: 1,  stagger: 0.2}),
//   onLeaveBack: elements => gsap.set(elements, {x: 100, opacity: 0, overwrite: true})
});

// gsap.from(".page4 .left, .page4 .right",{
//   scrollTrigger: {
//     scroller:  ".main",
//     trigger: ".page4 .left",
//     start: "top 80%",
//     end: "bottom bottom",
//     // markers: true
//   },
//   x: 100, 
//   scale: .6, 
//   opacity: 0,
//   // stagger: .3
// })

gsap.set(".page4 .left, .page4 .right", {x: 100, scale: .6, opacity: 0});

ScrollTrigger.batch(".page4 .left, .page4 .right", {
  start: "100px bottom",
  onEnter: elements => gsap.to(elements, {x: 0, opacity: 1, scale: 1, stagger: 0.3}),
  // onLeaveBack: elements => gsap.set(elements, {x: 100, opacity: 0, scale: .6, overwrite: true})
});

// gsap.from(".page4 .right h1, .details, .sustainability, .mission",{
//   scrollTrigger: {
//     scroller:  ".main",
//     trigger: ".page4 .right h1",
//     start: "top 80%",
//     end: "bottom bottom",
//     // markers: true
//   },
//   x: -50, 
//   opacity: 0,
//   // stagger: .3
// })

gsap.set(".page4 .right h1, .details, .sustainability, .mission", {x: -50, opacity: 0});

ScrollTrigger.batch(".page4 .right h1, .details, .sustainability, .mission", {
  start: "-100px bottom",
  onEnter: elements => gsap.to(elements, {x: 0, opacity: 1, stagger: .1}),
//   onLeaveBack: elements => gsap.set(elements, {x: 100, opacity: 0, overwrite: true})
});

// gsap.from(".page5>h1",{
//   scrollTrigger: {
//     scroller:  ".main",
//     trigger: ".page5>h1",
//     start: "top 80%",
//     end: "bottom bottom",
//     // markers: true
//   },
//   y: 100, 
//   opacity: 0,
//   // stagger: .3
// })

gsap.set(".page5>h1", {y: 100, opacity: 0});

ScrollTrigger.batch(".page5>h1", {
  start: "100px bottom",
  onEnter: elements => gsap.to(elements, {y: 0, opacity: 1, stagger: .2}),
//   onLeaveBack: elements => gsap.set(elements, {x: 100, opacity: 0, overwrite: true})
});

// gsap.from(".page5 .learn",{
//   scrollTrigger: {
//     scroller:  ".main",
//     trigger: ".page5 .learn",
//     start: "top 80%",
//     end: "bottom bottom",
//     // markers: true
//   },
//   y: 100, 
//   scale: .7, 
//   opacity: 0,
// })

gsap.set(".page5 .learn", {y: 100, scale: .7, opacity: 0});

ScrollTrigger.batch(".page5 .learn", {
  start: "100px bottom",
  onEnter: elements => gsap.to(elements, {y: 0, opacity: 1, scale: 1, stagger: .2}),
  // onLeaveBack: elements => gsap.set(elements, {x: 100, opacity: 0, scale: .7, overwrite: true})
});

// gsap.from(".page5 .learn .learnMore .btn",{
//   scrollTrigger: {
//     scroller:  ".main",
//     trigger: ".page5 .learn .learnMore .btn",
//     start: "top 80%",
//     end: "bottom bottom",
//     // markers: true
//   },
//   y: 50, 
//   scale: .8, 
//   opacity: 0,
// })


gsap.set(".page5 .learn .learnMore .btn", {y: 50, scale: .8, opacity: 0});

ScrollTrigger.batch(".page5 .learn .learnMore .btn", {
  start: "100px bottom",
  onEnter: elements => gsap.to(elements, {y: 0, opacity: 1, scale: 1, stagger: .2}),
//   onLeaveBack: elements => gsap.set(elements, {x: 100, opacity: 0, overwrite: true})
});

// gsap.from("footer .one, footer .two, footer .three, footer .four, footer .five",{
//   scrollTrigger: {
//     scroller:  ".main",
//     trigger: "footer",
//     start: "top 80%",
//     end: "bottom bottom",
//     // markers: true
//   },
//   y: 50, 
//   scale: .8, 
//   opacity: 0,
//   stagger: .2
// })

gsap.set("footer .one, footer .two, footer .three, footer .four, footer .five", {y: 50, scale: .8, opacity: 0});

ScrollTrigger.batch("footer .one, footer .two, footer .three, footer .four, footer .five", {
  start: "100px bottom",
  onEnter: elements => gsap.to(elements, {y: 0, opacity: 1, scale: 1, stagger: .2}),
//   onLeaveBack: elements => gsap.set(elements, {x: 100, opacity: 0, overwrite: true})
});




let buttons = document.querySelector(".buttons");
let page3Cards = document.querySelector("#cards");

let cards = [
    {img: "1.png", title: "cord shirt", price: 100, tag: "new arrival"},
    {img: "2.png", title: "cpo shirt", price: 90, tag: "get of 20%"},
    {img: "3.png", title: "summer t-shirt", price: 60, tag: ""},
    {img: "4.png", title: "t-shirts", price: 98, tag: ""},
    {img: "5.png", title: "cardigan", price: 120, tag: ""},
    {img: "6.png", title: "jacket casualy", price: 88, tag: ""},
]

function addCards(){
    let clutter = ""

    cards.forEach(function(card, index){
        clutter += `<div id=${index} class="card transition duration-1000 relative flex flex-col justify-between w-[23%] h-[70vh]">
                      <div class="top w-full h-[85%] bg-[url('imgs/${card.img}')] p-4 bg-cover bg-top bg-no-repeat rounded-3xl" style="background-image: url(imgs/${card.img}); background-repeat: no-repeat; background-position: top; background-size: cover;">
                          <div class="tag uppercase px-4 py-1 inline-block rounded-full bg-gray-300 text-sm font-[clashMedium]">${card.tag}</div>
                      </div>
                      <div class="bottom w-full h-[15%] flex flex-col gap-2 leading-none pt-3 justify-end ">
                          <h2 class="w-full h-1/2 font-[clashSemiBold] uppercase text-3xl">${card.title}</h2>
                          <div class="priceTag w-full h-1/2 flex justify-between"> 
                            <h3 class="font-[clashSemiBold] text-xl opacity-50">$${card.price}</h3>
                            <div class="count flex w-1/3 h-full justify-evenly rounded-lg overflow-hidden">
                              <div id="${index}" class="minus font-[clashMedium] cursor-pointer text-2xl w-1/3 h-full flex justify-center items-center bg-gray-200 p-2">-</div>
                              <div id="${index}" class="num font-[clashMedium] text-xl w-1/3 h-full flex justify-center items-center bg-gray-100 p-2">0</div>
                              <div id="${index}" class="plus font-[clashMedium] cursor-pointer text-2xl w-1/3 h-full flex justify-center items-center bg-gray-200 p-2">+</div>
                            </div>
                          </div>
                      </div>
                    </div>`

                    
    })

    page3Cards.innerHTML = clutter;
}

addCards();



// gsap.from("#cards .card",{
//   scrollTrigger: {
//     scroller:  ".main",
//     trigger: "#cards .card",
//     start: "top 80%",
//     end: "bottom bottom",
//     // markers: true
//   },
//   y: 100, 
//   opacity: 0,
//   scale: .9,
//   // stagger: .2
// })

gsap.set("#cards .card", {y: 100, opacity: 0, scale: .9});

ScrollTrigger.batch("#cards .card", {
  start: "100px bottom",
  onEnter: elements => gsap.to(elements, {y: 0, opacity: 1, scale: 1, stagger: 0.2}),
//   onLeaveBack: elements => gsap.set(elements, {y: 100, opacity: 0, scale: .9, overwrite: true})
});


