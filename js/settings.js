/* ===========================================
   ChitraBazzi Settings Page
=========================================== */

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

        const confirmLogout = confirm("Are you sure you want to logout?");

        if (confirmLogout) {

            localStorage.removeItem("loggedInUser");

            localStorage.removeItem("isLoggedIn");

            alert("Logged out successfully!");

            window.location.href = "login.html";

        }

    });

}

/* ==============================
   Dynamic User Details
============================== */

const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (loggedUser) {

    if (userName) {

        userName.textContent = loggedUser.name;

    }

    if (userEmail) {

        userEmail.textContent = loggedUser.email;

    }

}

/* ==============================
   Edit Profile Button
============================== */

const editProfileBtn = document.querySelector(".edit-profile-btn");

if (editProfileBtn) {

    editProfileBtn.addEventListener("click", () => {

        alert("Edit Profile feature will be connected with Backend API.");

    });

}

/* ==============================
   Saved Address
============================== */

const addressBtn = document.querySelectorAll(".setting-list a")[4];

if (addressBtn) {

    addressBtn.addEventListener("click", (e) => {

        e.preventDefault();

        alert("Saved Address feature coming soon.");

    });

}

/* ==============================
   Payment Method
============================== */

const paymentBtn = document.querySelectorAll(".setting-list a")[5];

if (paymentBtn) {

    paymentBtn.addEventListener("click", (e) => {

        e.preventDefault();

        alert("Payment Methods will be available after Backend Integration.");

    });

}

/* ==============================
   Notifications
============================== */

const notificationBtn = document.querySelectorAll(".setting-list a")[6];

if (notificationBtn) {

    notificationBtn.addEventListener("click", (e) => {

        e.preventDefault();

        alert("Notification settings coming soon.");

    });

}

/* ==============================
   Change Password
============================== */

const passwordBtn = document.querySelectorAll(".setting-list a")[7];

if (passwordBtn) {

    passwordBtn.addEventListener("click", (e) => {

        e.preventDefault();

        alert("Password change will be available after Backend API.");

    });

}

/* ==============================
   Help & Support
============================== */

const supportBtn = document.querySelectorAll(".setting-list a")[9];

if (supportBtn) {

    supportBtn.addEventListener("click", (e) => {

        e.preventDefault();

        alert("Contact: support@chitrabazzi.com");

    });

}

/* ==============================
   Hover Animation
============================== */

const settingCards = document.querySelectorAll(".setting-list a");

settingCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateX(8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateX(0px)";

    });

});

console.log("Settings Page Loaded Successfully");

