const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => 1 - Math.pow(1 - t, 4),
  smoothWheel: true,
  smoothTouch: true,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

function menu() {
  let menu = document.querySelector("#menu");
  let ul = document.querySelector("#nav-inner-ul");
  let windowWidth = window.innerWidth;

  if (windowWidth > 600) {
    menu.addEventListener("click", function () {
      gsap.to(menu, { y: 22 });
      gsap.to(ul, { y: 22 });
    });
    if (windowWidth>= 1440) {
      menu.addEventListener("click", function () {
        gsap.to(menu, { y: 30 });
        gsap.to(ul, { y: 30 });
      });
    }
  } else {
    let navUl = document.querySelector("#nav-inner-ul");
    navUl.style.display = "none";
    let extra = document.querySelector("#extra");
    extra.style.display = "flex";
    let slider = document.querySelector("#mobile-slide");

    extra.addEventListener("click", function () {
      gsap.to(slider, {
        display: "inline",
        y: 950,
      });

 document.body.style.overflow = "hidden";
  lenis.stop();
      let slideNav = document.querySelector("#slide-nav");
      let slideMenu = document.querySelectorAll("#slide-nav-menu li");
      let slideFoot = document.querySelector("#slide-foot");

      let timel = gsap.timeline();
      timel.from(slideNav, { opacity: 0, delay: 0.5 });
      slideMenu.forEach(function (s) {
        timel.from(s, { opacity: 0, stagger: 0.5, duration: 0.3 });
      });
      timel.from(slideFoot, { opacity: 0 });
    });
  }

  let slide = document.querySelector("#mobile-slide");
  let close = document.querySelector("#close");

  close.addEventListener("click", function () {
    gsap.to(slide, { y: "-100vh" });
document.body.style.overflow = "auto";
  lenis.start();
  });
}

menu();

let ele = document.querySelectorAll(".page2-ele");
function Ani() {
  ele.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      let h1 = event.currentTarget.querySelector("h1");
      gsap.to(h1, {
        x: "4vw",
        opacity: 0.4,
        duration: 0.8,
        ease: "power2.out",
      });
    });
    e.addEventListener("mouseleave", function () {
      let h1 = event.currentTarget.querySelector("h1");
      gsap.to(h1, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      });
    });

    e.addEventListener("mouseenter", function () {
      let h6 = event.currentTarget.querySelector(".page2-ele h6");
      gsap.to(h6, {
        opacity: 0.4,
        ease: "power2.out",
      });
    });
    e.addEventListener("mouseleave", function () {
      let h6 = event.currentTarget.querySelector(".page2-ele h6");
      gsap.to(h6, {
        opacity: 1,
        ease: "power2.out",
      });
    });
  });
}
Ani();


let miniCircle = document.querySelector("#move-circle");
miniCircle.innerHTML = "";

function pic() {
  let elements = document.querySelectorAll(".page2-ele");

  elements.forEach(function (e) {
    let image = e.querySelector("img");

    gsap.set(image, { xPercent: -50, yPercent: -25 });
    // ye line origin center sy set krygi image ka 

    e.addEventListener("mouseenter", function () {
      gsap.to(image, {
        opacity: 1,
        ease: "power1.out",
      });
      let miniCircle = document.querySelector("#move-circle");
      gsap.to(miniCircle, {
        scale: 5.5,
        mixBlendMode: "unset",
        opacity: 0.9,
      });
      miniCircle.innerHTML = "<h6>VIEW</h6>";
    });

    e.addEventListener("mousemove", function (dets) {
      let bounds = e.getBoundingClientRect();
      let relX = dets.clientX - bounds.left;
      let relY = dets.clientY - bounds.top;

      gsap.to(image, {
        x: relX,
        y: relY,
        opacity: 1,
        rotate: gsap.utils.clamp(-15, 15, dets.movementX),
      });
    });

    e.addEventListener("mouseleave", function () {
      gsap.to(image, {
        opacity: 0,
        ease: "power1.out",
      });
      let miniCircle = document.querySelector("#move-circle");
      gsap.to(miniCircle, {
        scale: 1,
        mixBlendMode: "difference",
        opacity: 1,
      });
      miniCircle.innerHTML = "";
    });
  });
}
pic();

function moveCircle() {
  let circ = document.querySelector("#move-circle");

  gsap.set(circ, { xPercent: -50, yPercent: -50 });
  // ye line circle ka origin set kr rhi hy center sy 

  window.addEventListener("mousemove", function (m) {
    gsap.to(circ, {
      x: m.clientX ,
      y: m.clientY ,
      duration: 0.4,
      
    });
  });
}
moveCircle();

function anime() {
  let logo = document.querySelector("#logo");
  let tl = gsap.timeline();
  tl.from(logo, {
    y: 40,
    duration: 0.5,
  });
    if(window.innerWidth > 600){
      let men = document.querySelector("#menu");
      tl.from(men, {
        y: 40,
        duration: 0.5,
      });
    }
    else{
      let extra = document.querySelector("#extra");
      tl.from(extra,{
        y:40,
        duration: 0.5,
      })
    }
  let h1 = document.querySelector("#hero-head h1");
  if(h1){
    gsap.set(h1, { opacity: 1, y: 0 });
    tl.from(h1, {
      y: "30vw",
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  }
  let h2 = document.querySelector("#main-head h1");
  if(h2){
    gsap.set(h2, { opacity: 1, y: 0 });
    tl.from(h2, {
      y: "30vw",
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.1,
    });
  }
  let mid = document.querySelectorAll(".mid h6");
  mid.forEach(function (h) {
    tl.from(h, {
      y: -40,
      duration: 0.3,
    });
  });
  let bot = document.querySelector("#first-bottom");
  tl.from(bot, {
    opacity: 0,
    duration: 0.3,
  });
}
anime();

// Logo text rotation animation
function logoTextAnimation() {
  const logoP = document.querySelector("#logo-p");
  const logoText = document.querySelector("#logo-text");
  const logoTextAlt = document.querySelector("#logo-text-alt");
  const speedWords = document.querySelectorAll(".speed-word");
  
  if (!logoText || !logoTextAlt || !logoP) return;
  
  // Calculate position for alt text to appear in same position as "inakkaa"
  function updateAltTextPosition() {
    const logoTextRect = logoText.getBoundingClientRect();
    const logoRect = logoText.parentElement.getBoundingClientRect();
    const leftOffset = logoTextRect.left - logoRect.left;
    gsap.set(logoTextAlt, { left: leftOffset + "px" });
  }
  
  // Set initial states - P is always visible
  gsap.set(logoP, { opacity: 1, y: 0 });
  gsap.set(logoText, { opacity: 1, y: 0 });
  gsap.set(logoTextAlt, { opacity: 0, y: 100, visibility: "hidden" });
  
  // Update position on load and resize
  updateAltTextPosition();
  window.addEventListener("resize", updateAltTextPosition);
  
  function showAltText() {
    const tl = gsap.timeline();
    
    // Calculate position based on where "inakkaa" currently is
    const logoTextRect = logoText.getBoundingClientRect();
    const logoRect = logoText.parentElement.getBoundingClientRect();
    const leftOffset = logoTextRect.left - logoRect.left;
    
    // Fade out "inakkaa"
    tl.to(logoText, {
      opacity: 0,
      y: -100,
      duration: 0.5,
      ease: "power2.in"
    });
    
    // Set position and show "erformance Power Precision" in same spot
    tl.set(logoTextAlt, { 
      left: leftOffset + "px",
      visibility: "visible" 
    });
    tl.to(logoTextAlt, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.3");
    
    // Animate words appearance
    speedWords.forEach((word, index) => {
      gsap.fromTo(word, 
        {
          scale: 0.8,
          opacity: 0.3
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          delay: index * 0.15,
          ease: "back.out(1.7)"
        }
      );
    });
    
    // Wait before switching back
    tl.to({}, {
      duration: 3,
      onComplete: showMainText
    });
  }
  
  function showMainText() {
    const tl = gsap.timeline();
    
    // Fade out "erformance Power Precision"
    tl.to(logoTextAlt, {
      opacity: 0,
      y: -100,
      duration: 0.5,
      ease: "power2.in",
      onComplete: function() {
        gsap.set(logoTextAlt, { visibility: "hidden" });
      }
    });
    
    // Fade in "inakkaa"
    tl.to(logoText, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.3");
    
    // Wait before switching again
    tl.to({}, {
      duration: 2,
      onComplete: showAltText
    });
  }
  
  // Start the animation cycle after initial delay
  setTimeout(() => {
    showAltText();
  }, 1500);
}

logoTextAnimation();

function p2() {
  let page2 = document.querySelector("#page-2");
  gsap.from(page2, {
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: page2,
      start: "top 750px",
      // markers: true,
    },
  });
}
p2();

function para() {
  let picture = document.querySelector("#t-f-div img");
  let page3 = document.querySelector("#page-3");
  gsap.from(picture, {
    opacity: 0,
    scrollTrigger: {
      trigger: page3,
      start: "top 450px",
      // markers: true,
    },
  });
  let Tpara = document.querySelector("#t-s-div");
  gsap.from(Tpara, {
    opcaity: 0,
    y: 80,
    scrollTrigger: {
      trigger: page3,
      start: "top 450px",
      // markers: true,
    },
  });
}
para();

// ----------------------------Warp Speed Particle Animation---------------
function warpSpeedParticles() {
  const canvas = document.getElementById("warp-canvas");
  const warpText = document.getElementById("warp-text");
  if (!canvas || !warpText) return;

  const ctx = canvas.getContext("2d");
  let particles = [];
  let beams = [];
  let animationId;

  // Set canvas size
  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Beam class for horizontal speed lines
  class Beam {
    constructor(textRect) {
      this.textRect = textRect;
      this.reset();
    }

    reset() {
      if (!this.textRect) return;
      
      const canvasRect = canvas.getBoundingClientRect();
      const textLeft = this.textRect.left - canvasRect.left;
      const textRight = this.textRect.right - canvasRect.left;
      const textTop = this.textRect.top - canvasRect.top;
      const textBottom = this.textRect.bottom - canvasRect.top;
      
      // Start from left of text area
      this.x = textLeft - 100;
      // Random Y position within text area
      this.y = textTop + Math.random() * (textBottom - textTop);
      this.width = Math.random() * 2 + 0.5; // Very thin beams
      this.length = Math.random() * 100 + 50;
      this.speed = Math.random() * 15 + 20; // Fast speed
      this.opacity = Math.random() * 0.4 + 0.3;
      this.textRight = textRight;
    }

    update() {
      this.x += this.speed;
      
      // Reset if beam has passed the text area
      if (this.x > this.textRight + 100) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      
      // Create gradient for beam
      const gradient = ctx.createLinearGradient(
        this.x, this.y,
        this.x + this.length, this.y
      );
      gradient.addColorStop(0, "rgba(255, 107, 157, 0)");
      gradient.addColorStop(0.5, "rgba(78, 205, 196, 0.8)");
      gradient.addColorStop(1, "rgba(69, 183, 209, 0)");
      
      ctx.fillStyle = gradient;
      ctx.fillRect(this.x, this.y - this.width / 2, this.length, this.width);
      
      ctx.restore();
    }
  }

  // Particle class
  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 3 + 1;
      this.speedX = (Math.random() - 0.5) * 2;
      this.speedY = (Math.random() - 0.5) * 2;
      this.opacity = Math.random() * 0.5 + 0.5;
      this.life = Math.random() * 100 + 50;
      this.maxLife = this.life;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.life--;
      this.opacity = (this.life / this.maxLife) * 0.8;
      
      if (this.life <= 0) {
        this.reset();
      }
    }

    reset() {
      const rect = warpText.getBoundingClientRect();
      const canvasRect = canvas.getBoundingClientRect();
      this.x = rect.left - canvasRect.left + Math.random() * rect.width;
      this.y = rect.top - canvasRect.top + Math.random() * rect.height;
      this.life = Math.random() * 100 + 50;
      this.maxLife = this.life;
      this.opacity = Math.random() * 0.5 + 0.5;
      this.size = Math.random() * 3 + 1;
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      
      // Create gradient for particle
      const gradient = ctx.createRadialGradient(
        this.x, this.y, 0,
        this.x, this.y, this.size * 2
      );
      gradient.addColorStop(0, "rgba(255, 107, 157, 1)");
      gradient.addColorStop(0.5, "rgba(78, 205, 196, 0.8)");
      gradient.addColorStop(1, "rgba(69, 183, 209, 0)");
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    }
  }

  // Initialize particles and beams
  function initParticles() {
    const rect = warpText.getBoundingClientRect();
    const canvasRect = canvas.getBoundingClientRect();
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      const x = rect.left - canvasRect.left + Math.random() * rect.width;
      const y = rect.top - canvasRect.top + Math.random() * rect.height;
      particles.push(new Particle(x, y));
    }

    // Initialize beams - only around warp text
    const beamCount = 30;
    for (let i = 0; i < beamCount; i++) {
      const beam = new Beam(rect);
      beams.push(beam);
    }
  }

  // Animation loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update text rect for beams (in case of resize or scroll)
    const rect = warpText.getBoundingClientRect();
    
    // Draw and update beams (speed lines) - only around warp text
    beams.forEach(beam => {
      beam.textRect = rect;
      beam.update();
      beam.draw();
    });
    
    // Draw and update particles (fireflies)
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });

    animationId = requestAnimationFrame(animate);
  }

  // Start animation when section is visible
  function startAnimation() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!animationId) {
            resizeCanvas();
            initParticles();
            animate();
          }
        } else {
          if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
            particles = [];
            beams = [];
          }
        }
      });
    }, { threshold: 0.1 });

    const warpSection = document.getElementById("warp-section");
    if (warpSection) {
      observer.observe(warpSection);
    }
  }

  startAnimation();
}

// Initialize warp speed particles
warpSpeedParticles();

// Background text animation - particle breaking and forming
function backgroundTextAnimation() {
  const bgTextContainer = document.getElementById("hero-bg-text");
  const bgTextWord = document.getElementById("bg-text-word");
  if (!bgTextWord || !bgTextContainer) {
    console.log("bg-text-word element not found");
    return;
  }
  
  console.log("Starting background text particle animation");
  
  const words = ["Pinakkaa", "Precision", "Power", "Performance"];
  let currentWordIndex = 0;
  let particles = [];
  
  // Hide the original word element
  bgTextWord.style.opacity = '0';
  
  function createParticles(word) {
    // Clear existing particles
    particles.forEach(p => {
      if (p.element && p.element.parentNode) {
        p.element.parentNode.removeChild(p.element);
      }
    });
    particles = [];
    
    // Update hidden word to measure
    bgTextWord.textContent = word;
    const chars = word.split('');
    
    // Get the center position of the container
    const containerRect = bgTextContainer.getBoundingClientRect();
    const centerX = containerRect.width / 2;
    const centerY = 150; // margin-top value
    
    // Create a temporary element to measure character positions
    const tempWord = document.createElement('span');
    tempWord.style.cssText = `
      font-size: 8vw;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      position: absolute;
      visibility: hidden;
      white-space: nowrap;
    `;
    tempWord.textContent = word;
    bgTextContainer.appendChild(tempWord);
    const wordWidth = tempWord.offsetWidth;
    bgTextContainer.removeChild(tempWord);
    
    // Calculate starting X position to center the word
    const startX = centerX - (wordWidth / 2);
    
    // Create particle for each character
    chars.forEach((char, index) => {
      const particle = document.createElement('span');
      particle.textContent = char;
      particle.className = 'bg-particle';
      particle.style.cssText = `
        position: absolute;
        font-size: 8vw;
        font-weight: 900;
        text-transform: uppercase;
        background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        filter: blur(2px);
        opacity: 0;
        pointer-events: none;
        letter-spacing: 0.1em;
      `;
      
      // Calculate character position
      const tempChar = document.createElement('span');
      tempChar.style.cssText = `
        font-size: 8vw;
        font-weight: 900;
        letter-spacing: 0.1em;
        position: absolute;
        visibility: hidden;
      `;
      tempChar.textContent = word.substring(0, index);
      bgTextContainer.appendChild(tempChar);
      const charOffset = tempChar.offsetWidth;
      bgTextContainer.removeChild(tempChar);
      
      const targetX = startX + charOffset;
      const targetY = centerY;
      
      bgTextContainer.appendChild(particle);
      
      particles.push({
        element: particle,
        targetX: targetX,
        targetY: targetY,
        char: char
      });
    });
    
    return particles;
  }
  
  function breakIntoParticles() {
    const tl = gsap.timeline();
    
    particles.forEach((particle, index) => {
      // Random scatter positions
      const randomX = particle.targetX + (Math.random() - 0.5) * 600;
      const randomY = particle.targetY + (Math.random() - 0.5) * 600;
      const randomRotation = (Math.random() - 0.5) * 360;
      
      tl.to(particle.element, {
        x: randomX,
        y: randomY,
        rotation: randomRotation,
        scale: 0.3,
        opacity: 0,
        duration: 0.8,
        ease: "power2.in"
      }, index * 0.02);
    });
    
    return tl;
  }
  
  function formWord(word) {
    // Create new particles
    const newParticles = createParticles(word);
    const tl = gsap.timeline();
    
    // Set initial scattered positions
    newParticles.forEach((particle, index) => {
      const randomX = particle.targetX + (Math.random() - 0.5) * 600;
      const randomY = particle.targetY + (Math.random() - 0.5) * 600;
      const randomRotation = (Math.random() - 0.5) * 360;
      
      gsap.set(particle.element, {
        x: randomX,
        y: randomY,
        rotation: randomRotation,
        scale: 0.3,
        opacity: 0
      });
    });
    
    // Animate particles to form word
    newParticles.forEach((particle, index) => {
      tl.to(particle.element, {
        x: particle.targetX,
        y: particle.targetY,
        rotation: 0,
        scale: 1,
        opacity: 0.4,
        duration: 1.2,
        ease: "back.out(1.7)"
      }, index * 0.04);
    });
    
    return tl;
  }
  
  function animateCycle() {
    const timeline = gsap.timeline({
      onComplete: () => {
        currentWordIndex = (currentWordIndex + 1) % words.length;
        setTimeout(animateCycle, 300);
      }
    });
    
    // Break current word if particles exist
    if (particles.length > 0) {
      timeline.add(breakIntoParticles());
    }
    
    // Small pause
    timeline.to({}, { duration: 0.4 });
    
    // Form next word
    timeline.add(formWord(words[currentWordIndex]));
    
    // Hold the word
    timeline.to({}, { duration: 2.5 });
  }
  
  // Start with first word
  setTimeout(() => {
    formWord(words[0]).then(() => {
      setTimeout(animateCycle, 2000);
    });
  }, 500);
}

// Initialize background text animation
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', backgroundTextAnimation);
} else {
  backgroundTextAnimation();
}

// Typography animation - character by character for "a creative touch"
function typographyAnimation() {
  const typoText = document.getElementById('typo-text');
  if (!typoText) {
    console.log("typo-text element not found");
    return;
  }
  
  console.log("Starting typography animation");
  
  // Get the text and split into characters
  const text = typoText.textContent;
  typoText.innerHTML = '';
  
  // Create span for each character
  const chars = text.split('').map(char => {
    const span = document.createElement('span');
    if (char === ' ') {
      span.className = 'space';
      span.innerHTML = '&nbsp;';
    } else {
      span.className = 'char';
      span.textContent = char;
    }
    typoText.appendChild(span);
    return span;
  });
  
  // Get all character spans (excluding spaces)
  const charSpans = typoText.querySelectorAll('.char');
  
  // Create master timeline with delay
  const tl = gsap.timeline({ delay: 2.5 });
  
  // Animate each character with different effects
  charSpans.forEach((char, index) => {
    // Multiple animation types for variety
    const animType = index % 4;
    
    switch(animType) {
      case 0: // Bounce from bottom with rotation
        tl.to(char, {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: "elastic.out(1, 0.5)"
        }, index * 0.05);
        break;
        
      case 1: // Slide from left with fade
        gsap.set(char, {
          x: -50,
          y: 0,
          rotation: -20,
          transformOrigin: "left center"
        });
        tl.to(char, {
          opacity: 1,
          x: 0,
          scale: 1,
          rotation: 0,
          filter: 'blur(0px)',
          duration: 0.6,
          ease: "back.out(2)"
        }, index * 0.05);
        break;
        
      case 2: // Scale up from center
        gsap.set(char, {
          scale: 0,
          rotation: 180
        });
        tl.to(char, {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          filter: 'blur(0px)',
          duration: 0.7,
          ease: "back.out(3)"
        }, index * 0.05);
        break;
        
      case 3: // Flip in
        gsap.set(char, {
          rotationY: 90,
          transformOrigin: "center center",
          transformPerspective: 1000
        });
        tl.to(char, {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationY: 0,
          rotationZ: 0,
          filter: 'blur(0px)',
          duration: 0.6,
          ease: "power2.out"
        }, index * 0.05);
        break;
    }
  });
  
  // Add wave effect after all characters are in
  tl.add(() => {
    charSpans.forEach((char, index) => {
      gsap.to(char, {
        y: -20,
        duration: 0.5,
        repeat: 1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.03
      });
    });
  }, "+=0.2");
  
  // Add gradient animation effect
  tl.add(() => {
    charSpans.forEach((char, index) => {
      gsap.to(char, {
        backgroundPosition: "200% 50%",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.05
      });
    });
  }, "+=0.3");
  
  // Continuous subtle animations
  tl.add(() => {
    charSpans.forEach((char, index) => {
      // Random floating
      gsap.to(char, {
        y: Math.random() * 10 - 5,
        duration: 2 + Math.random(),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.1
      });
      
      // Subtle rotation
      gsap.to(char, {
        rotation: (Math.random() - 0.5) * 5,
        duration: 3 + Math.random(),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.15
      });
    });
  });
  
  // Hover effect - speedy color change
  typoText.addEventListener('mouseenter', () => {
    charSpans.forEach((char, index) => {
      gsap.to(char, {
        backgroundPosition: "400% 50%",
        duration: 0.15,
        ease: "power2.inOut",
        delay: index * 0.01,
        repeat: 3,
        yoyo: true
      });
    });
  });
  
  typoText.addEventListener('mouseleave', () => {
    charSpans.forEach((char, index) => {
      gsap.to(char, {
        backgroundPosition: "0% 50%",
        duration: 0.3,
        ease: "power2.out",
        delay: index * 0.01
      });
    });
  });
}

// Initialize typography animation
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', typographyAnimation);
} else {
  typographyAnimation();
}

// Floating images on service hover
function serviceImageFloat() {
  const services = document.querySelectorAll('.page2-ele');
  
  services.forEach(service => {
    const img = service.querySelector('img');
    if (!img) return;
    
    service.addEventListener('mouseenter', () => {
      gsap.to(img, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.4,
        ease: "power2.out"
      });
    });
    
    service.addEventListener('mouseleave', () => {
      gsap.to(img, {
        opacity: 0,
        scale: 0.8,
        rotation: -5,
        duration: 0.3,
        ease: "power2.in"
      });
    });
    
    service.addEventListener('mousemove', (e) => {
      const rect = service.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      gsap.to(img, {
        left: x + 50,
        top: y - 200,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });
}

// Initialize service image float
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', serviceImageFloat);
} else {
  serviceImageFloat();
}

// Warp speed animation for creative touch on hover
function creativeWarpSpeed() {
  const canvas = document.getElementById("creative-warp-canvas");
  const typoText = document.getElementById("typo-text");
  if (!canvas || !typoText) return;

  const ctx = canvas.getContext("2d");
  let particles = [];
  let beams = [];
  let animationId = null;
  let isAnimating = false;

  // Set canvas size
  function resizeCanvas() {
    const rect = typoText.getBoundingClientRect();
    canvas.width = rect.width + 100;
    canvas.height = rect.height + 50;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Beam class for horizontal speed lines
  class Beam {
    constructor() {
      this.reset();
    }

    reset() {
      const rect = typoText.getBoundingClientRect();
      this.x = -100;
      this.y = Math.random() * canvas.height;
      this.width = Math.random() * 2 + 0.5;
      this.length = Math.random() * 100 + 50;
      this.speed = Math.random() * 15 + 20;
      this.opacity = Math.random() * 0.4 + 0.3;
    }

    update() {
      this.x += this.speed;
      if (this.x > canvas.width + 100) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      
      const gradient = ctx.createLinearGradient(
        this.x, this.y,
        this.x + this.length, this.y
      );
      gradient.addColorStop(0, "rgba(96, 165, 250, 0)");
      gradient.addColorStop(0.5, "rgba(167, 139, 250, 0.8)");
      gradient.addColorStop(1, "rgba(244, 114, 182, 0)");
      
      ctx.fillStyle = gradient;
      ctx.fillRect(this.x, this.y - this.width / 2, this.length, this.width);
      
      ctx.restore();
    }
  }

  // Particle class
  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3 + 1;
      this.speedX = (Math.random() - 0.5) * 3;
      this.speedY = (Math.random() - 0.5) * 3;
      this.life = Math.random() * 100 + 50;
      this.maxLife = this.life;
      this.opacity = Math.random() * 0.5 + 0.5;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.life--;
      this.opacity = (this.life / this.maxLife) * 0.8;
      
      if (this.life <= 0) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      
      const gradient = ctx.createRadialGradient(
        this.x, this.y, 0,
        this.x, this.y, this.size * 2
      );
      gradient.addColorStop(0, "rgba(96, 165, 250, 1)");
      gradient.addColorStop(0.5, "rgba(167, 139, 250, 0.8)");
      gradient.addColorStop(1, "rgba(244, 114, 182, 0)");
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    }
  }

  // Initialize particles and beams
  function initParticles() {
    particles = [];
    beams = [];
    
    const particleCount = 60;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const beamCount = 25;
    for (let i = 0; i < beamCount; i++) {
      beams.push(new Beam());
    }
  }

  // Animation loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    beams.forEach(beam => {
      beam.update();
      beam.draw();
    });
    
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });

    if (isAnimating) {
      animationId = requestAnimationFrame(animate);
    }
  }

  // Start animation on hover
  typoText.addEventListener('mouseenter', () => {
    if (!isAnimating) {
      isAnimating = true;
      resizeCanvas();
      initParticles();
      canvas.style.opacity = '1';
      animate();
    }
  });

  // Stop animation on mouse leave
  typoText.addEventListener('mouseleave', () => {
    isAnimating = false;
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
    canvas.style.opacity = '0';
    // Clear canvas
    setTimeout(() => {
      if (!isAnimating) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles = [];
        beams = [];
      }
    }, 300);
  });
}

// Initialize creative warp speed
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', creativeWarpSpeed);
} else {
  creativeWarpSpeed();
}
