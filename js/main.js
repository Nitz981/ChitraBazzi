// ============================
// Smooth Scroll
// ============================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ============================
// Back To Top Button
// ============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// Hide button on page load
topBtn.style.display = "none";


// ============================
// Newsletter Form
// ============================

const newsletterForm = document.querySelector(".newsletter form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you for subscribing!");

        newsletterForm.reset();

    });

}


// ============================
// Gift Builder Form
// ============================

const giftForm = document.querySelector(".gift-form");

if (giftForm) {

    giftForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Your custom gift request has been submitted!");

        giftForm.reset();

    });

}


// ============================
// Product Buttons
// ============================

const buttons = document.querySelectorAll(".product-card button");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        alert("Product added successfully!");

    });

});


// ============================
// Hero Buttons
// ============================

const shopBtn = document.querySelector(".shop-btn");

if (shopBtn) {

    shopBtn.addEventListener("click", function () {

        const shop = document.getElementById("best-sellers");

        shop.scrollIntoView({

            behavior: "smooth"

        });

    });

}

const exploreBtn = document.querySelector(".explore-btn");

if (exploreBtn) {

    exploreBtn.addEventListener("click", function () {

        const category = document.getElementById("categories");

        category.scrollIntoView({

            behavior: "smooth"

        });

    });

}


// ============================
// Gallery Hover Effect
// ============================

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(image => {

    image.addEventListener("click", function () {

        image.style.transform = "scale(1.08)";

        setTimeout(() => {

            image.style.transform = "scale(1)";

        }, 200);

    });

});


// ============================
// Welcome Message
// ============================

window.onload = function () {

    console.log("Welcome to ChitraBazzi ❤️");

};