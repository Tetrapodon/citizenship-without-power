/* =====================================================
   CITIZENSHIP WITHOUT POWER
   PHASE 3 - INTERACTIVITY

   FEATURES:
   - Scroll progress bar
   - Fade-in animations
   - Active navigation links
   - Smooth scrolling enhancement
   - Hero parallax effect
   - Optional audio controls
===================================================== */


/* =====================================================
   SCROLL PROGRESS BAR

   PURPOSE:
   Shows how far the user has progressed through
   the website.

===================================================== */

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width =
        progress + "%";
});


/* =====================================================
   SCROLL REVEAL ANIMATION

   PURPOSE:
   Makes sections fade upward when entering view.

   HOW TO USE:
   Add class="reveal"
   to any element in HTML.

===================================================== */

const reveals = document.querySelectorAll(
    ".section, .timeline-item, .placeholder-box, .graph-placeholder"
);

const revealOnScroll = () => {

    const triggerBottom =
        window.innerHeight * 0.85;

    reveals.forEach(item => {

        const boxTop =
            item.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {

            item.classList.add("active");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* =====================================================
   ACTIVE NAVIGATION

   PURPOSE:
   Highlights current section in navbar.

===================================================== */

const sections =
    document.querySelectorAll("section, header");

const navLinks =
    document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("nav-active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.classList.add("nav-active");
        }

    });

});


/* =====================================================
   HERO PARALLAX EFFECT

   PURPOSE:
   Gives subtle movement to hero section.

===================================================== */

const hero =
    document.querySelector(".hero");

window.addEventListener("scroll", () => {

    let offset =
        window.pageYOffset;

    if (hero) {

        hero.style.backgroundPositionY =
            offset * 0.4 + "px";
    }

});


/* =====================================================
   NAVBAR TRANSPARENCY

   PURPOSE:
   Navbar becomes darker after scrolling.

===================================================== */

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        navbar.classList.add("navbar-scrolled");

    } else {

        navbar.classList.remove("navbar-scrolled");
    }

});


/* =====================================================
   AUDIO SYSTEM (OPTIONAL)

   PURPOSE:
   For Bad Bunny instrumental or ambient music.

   HTML REQUIRED:

   <audio id="bg-music">
      ...
   </audio>

   <button id="music-toggle">
      Music
   </button>

===================================================== */

const music =
    document.getElementById("bg-music");

const musicToggle =
    document.getElementById("music-toggle");

if (music && musicToggle) {

    musicToggle.addEventListener(
        "click",
        () => {

            if (music.paused) {

                music.play();

                musicToggle.innerText =
                    "Pause Music";

            } else {

                music.pause();

                musicToggle.innerText =
                    "Play Music";
            }

        }
    );
}


/* =====================================================
   TIMELINE STAGGER ANIMATION

   PURPOSE:
   Timeline events appear one by one.

===================================================== */

const timelineItems =
    document.querySelectorAll(".timeline-item");

const timelineObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry, index) => {

                if (entry.isIntersecting) {

                    setTimeout(() => {

                        entry.target.classList.add(
                            "active"
                        );

                    }, index * 250);
                }

            });

        },

        {
            threshold: 0.3
        }

    );

timelineItems.forEach(item => {

    timelineObserver.observe(item);

});


/* =====================================================
   SECTION COUNTER

   PURPOSE:
   Displays current chapter.

   OPTIONAL:
   Add HTML:

   <div id="chapter-indicator"></div>

===================================================== */

const chapterIndicator =
    document.getElementById(
        "chapter-indicator"
    );

const chapterTitles = {

    hero: "Introduction",

    promise: "The Promise",

    contradiction: "The Contradiction",

    timeline: "Historical Context",

    evidence: "The Evidence",

    "human-cost": "The Human Cost",

    identity: "Identity & Belonging",

    "bad-bunny": "Cultural Voice",

    conclusion: "Conclusion"
};

window.addEventListener("scroll", () => {

    if (!chapterIndicator) return;

    sections.forEach(section => {

        const top =
            section.offsetTop - 200;

        const bottom =
            top + section.offsetHeight;

        if (
            window.scrollY >= top &&
            window.scrollY < bottom
        ) {

            const id =
                section.getAttribute("id");

            chapterIndicator.innerText =
                chapterTitles[id];
        }

    });

});



const introScreen = document.getElementById("intro-screen");
const enterButton = document.getElementById("enter-site");
const backgroundMusic = document.getElementById("bg-music");

if (enterButton && introScreen && backgroundMusic) {

    enterButton.addEventListener("click", () => {

        backgroundMusic.volume = 0.15;

        backgroundMusic.play();

        introScreen.style.opacity = "0";

        setTimeout(() => {

            introScreen.style.display = "none";

        }, 800);

    });

}
