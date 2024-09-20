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
    {img: "1.png", title: "cord shirt", price: 100, quantity: 8, tag: "new arrival"},
    {img: "2.png", title: "cpo shirt", price: 90, quantity: 15, tag: "get of 20%"},
    {img: "3.png", title: "summer t-shirt", price: 60, quantity: 3, tag: ""},
    {img: "4.png", title: "t-shirts", price: 98, quantity: 6, tag: ""},
    {img: "5.png", title: "cardigan", price: 120, quantity: 10, tag: ""},
    {img: "6.png", title: "jacket casualy", price: 88, quantity: 7, tag: ""},
]

function addCards(){
    let clutter = ""

    cards.forEach(function(card, index){
        clutter += `<div id=${index} class="card transition duration-1000 relative flex flex-col justify-between gap-3 w-[23%] h-[70vh]">
                      <div class="top cursor-pointer w-full h-[75%] bg-[url('imgs/${card.img}')] p-4 bg-cover bg-top bg-no-repeat rounded-3xl" style="background-image: url(imgs/${card.img}); background-repeat: no-repeat; background-position: top; background-size: cover;">
                          <div class="tag uppercase px-4 py-1 inline-block rounded-full bg-gray-300 text-sm font-[clashMedium]">${card.tag}</div>
                      </div>
                      <div class="bottom pointer-events-none relative w-full h-[25%] flex flex-col gap-2 leading-none pt-1 justify-end ">
                          <h2 class="w-full pointer-events-none h-[25%] font-[clashSemiBold] uppercase text-2xl">${card.title}</h2>
                          <div class="priceTag pointer-events-none w-full h-[25%] flex justify-between"> 
                            <h3 class="font-[clashSemiBold] pointer-events-none text-xl text-gray-500">$${card.price} &nbsp; &nbsp; <span class=" text-base tracking-wider text-red-500">(${card.quantity}pcs. left)</span></h3>
                            <div class="count pointer-events-none flex w-1/3 h-full justify-evenly rounded-lg overflow-hidden">
                              <div id="minus" class="minus ${index} active:scale-90 pointer-events-auto font-[clashMedium] cursor-pointer text-2xl w-1/3 h-full flex justify-center items-center bg-gray-200 p-2">-</div>
                              <div  class="num ${index} active:scale-90 pointer-events-none font-[clashMedium] text-xl w-1/3 h-full flex justify-center items-center bg-gray-100 p-2">0</div>
                              <div id="plus" class="plus ${index} active:scale-90 pointer-events-auto font-[clashMedium] cursor-pointer text-2xl w-1/3 h-full flex justify-center items-center bg-gray-200 p-2">+</div>
                            </div>
                          </div>
                          <div class="cart relative w-full h-[50%] gap-2 flex justify-between items-center">
                            <button class="w-full p-3 h-full active:scale-95 transition duration-500 hover:bg-black  pointer-events-auto cursor-pointer text-white font-semibold flex justify-center items-center rounded-lg bg-gray-700">
                              Add to Cart
                            </button>
                          </div>
                      </div>
                    </div>`

                    
    })

    page3Cards.innerHTML = clutter;
}

addCards();

let minus = document.querySelectorAll("#minus");
let plus = document.querySelectorAll("#plus");
let num = document.querySelectorAll(".num");

    
// console.log(minus)

minus.forEach((el,index)=>{
  el.addEventListener("click", function(e){

    let m = num[index].innerText;
    if(m>0){
      m--;
      num[index].innerText = m
    } 

  })
})

plus.forEach((el, index)=>{
  el.addEventListener("click", function(e){

    let p = num[index].innerText;
    console.log(cards[index].quantity);
    if(p<cards[index].quantity){
      p++;
      num[index].innerText = p;
    }

  })
})

  




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


