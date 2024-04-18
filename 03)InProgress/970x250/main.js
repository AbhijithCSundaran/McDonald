// Banner duration timer start time
var startTime;


// Timeline reference
var tl;

// Init tricggered by onLoad in Body tag
function init() {
  // Set Banner duration timer
  startTime = new Date();

  // Set Global Timeline
  tl = new TimelineMax({ onComplete: endTime });
  // tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });

  animate();
  setRollover();
}

function animate() {
  tl.set(["#main"], { autoAlpha: 1, force3D: true });

  tl.addLabel('frame_1', 0)
    .to(logo, 0.5, { autoAlpha: 1, ease: "power2.inOut", }, "frame_1+=.5")
    .to(burger1, 0.5, { autoAlpha: 1, ease: "power2.inOut", }, "frame_1+=.5")
    .to(text1_f1, 0.5, { autoAlpha: 1, ease: "power2.inOut", }, "frame_1+=.5")
    .to(text2_f1, 0.5, { autoAlpha: 1, ease: "power2.inOut", }, "frame_1+=.5")
    .to(terms, 0.5, { autoAlpha: 1, ease: "power2.inOut", }, "frame_1+=.5");

  tl.addLabel('frame_2', 4)
    .to(text1_f1, 0.5, { autoAlpha: 0, ease: "power2.inOut", }, "frame_2")
    .to(burger1, 0.5, { scale: 0.805, x: 60, y: 22, ease: "linear", }, "frame_2+=.5")
    .to(burger2, 0.5, { scale: 1, x: 0, y: 0, autoAlpha: 1, ease: "linear", }, "frame_2+=.5")
    .to(text_f2, 0.5, { autoAlpha: 1, ease: "power2.inOut", }, "frame_2+=1")

  tl.addLabel('frame_3', 8)
    .to(text_f2, 0.5, { autoAlpha: 0, ease: "power2.inOut", }, "frame_3")
    .to(burger2, 0.5, { autoAlpha: 0, ease: "power2.inOut", }, "frame_3")
    .to(burger1, 1, { scale: 1, x: 0, y: 0, ease: "linear", }, "frame_3")
    .to(text_f3, 0.5, { autoAlpha: 1, ease: "power2.inOut", }, "frame_3+=1")

}

function endTime() {
  // show total banner animation time in browser console.
  var endTime = new Date();

  // console.log( "Animation duration: " + (endTime - startTime) / 1000 + " seconds");
}

// CTA grow on hover

function setRollover() {
  // document
  //   .getElementById("bgExit")
  //   .addEventListener("mouseover", default_over, false);
  // document
  //   .getElementById("bgExit")
  //   .addEventListener("mouseout", default_out, false);
}

function default_over(event) {
  // TweenMax.to(["#cta span"], 0.3, { scale: 1.1, ease: Power1.easeOut, delay: 0, backgroundColor: "#014732", color: "#fff" });
  // TweenMax.to(["#cta span svg"], 0.3, { fill: "#fff" }, "<");
}

function default_out(event) {
  // TweenMax.to(["#cta span"], 0.3, { scale: 1, ease: Power1.easeOut, delay: 0, backgroundColor: "inherit", color: "#000" });
  // TweenMax.to(["#cta span svg"], 0.3, { fill: "#000" }, "<");
}


