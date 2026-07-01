
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

    if (topBtn) {

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

        topBtn.style.display = "none";

    }


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

    // ==========================
    // Festival Banner Button
    // ==========================

    const festivalBtn = document.querySelector(".festival-btn");

    if (festivalBtn) {

        festivalBtn.addEventListener("click", function () {

            const deals = document.getElementById("best-sellers");

            if (deals) {

                deals.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }


    // ==========================
    // Why Us Card Animation
    // ==========================

    const whyCards = document.querySelectorAll(".why-card");

    whyCards.forEach(card => {

        card.addEventListener("mouseenter", function () {

            card.style.transform = "translateY(-8px)";

        });

        card.addEventListener("mouseleave", function () {

            card.style.transform = "translateY(0)";

        });

    });


    /* ======================================
    LOCAL STORAGE HELPERS
    ====================================== */

    function getWishlist() {

        return JSON.parse(localStorage.getItem("wishlist")) || [];

    }

    function saveWishlist(items) {

        localStorage.setItem("wishlist", JSON.stringify(items));

    }

    function getCart() {

        return JSON.parse(localStorage.getItem("cart")) || [];

    }

    function saveCart(items) {

        localStorage.setItem("cart", JSON.stringify(items));

    }

    function updateWishlistCount() {

        const wishlistCount = document.getElementById("wishlistCount");

        if (wishlistCount) {

            wishlistCount.textContent = getWishlist().length;

        }

    }

    function updateCartCount() {

        const cartCount = document.getElementById("cartCount");

        if (cartCount) {

            const totalItems = getCart().reduce((sum, item) => sum + item.quantity, 0);

            cartCount.textContent = totalItems;

        }

    }


    /* ======================================
    SEARCH SYSTEM
    ====================================== */

    const searchBtn = document.getElementById("searchBtn");
    const searchPopup = document.getElementById("searchPopup");
    const closeSearch = document.getElementById("closeSearch");
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");
    const searchNoResult = document.getElementById("searchNoResult");
    const searchableProducts = document.querySelectorAll(".searchable");

    function resetSearch() {

        if (searchPopup) {

            searchPopup.classList.remove("active");

        }

        if (searchInput) {

            searchInput.value = "";

        }

        if (searchResults) {

            searchResults.innerHTML = "";

        }

        if (searchNoResult) {

            searchNoResult.style.display = "none";

        }

        searchableProducts.forEach(product => {

            product.classList.remove("hide");

        });

    }

    function renderSearchResults(value) {

        if (!searchResults || !searchNoResult) {

            return;

        }

        searchResults.innerHTML = "";

        const query = value.trim().toLowerCase();
        let matchCount = 0;

        searchableProducts.forEach(product => {

            const productNameEl = product.querySelector(".product-name");

            if (!productNameEl) {

                return;

            }

            const productName = productNameEl.textContent.trim();
            const productNameLower = productName.toLowerCase();
            const isMatch = query === "" || productNameLower.includes(query);

            if (isMatch) {

                product.classList.remove("hide");

                if (query !== "") {

                    matchCount++;

                    const priceEl = product.querySelector("h4");
                    const imageEl = product.querySelector("img");
                    const wishlistBtn = product.querySelector(".wishlist-btn");

                    const price = priceEl ? priceEl.textContent.trim() : "";
                    const image = imageEl ? imageEl.getAttribute("src") : "";
                    const productId = wishlistBtn ? wishlistBtn.dataset.id : "";

                    const resultItem = document.createElement("button");

                    resultItem.type = "button";
                    resultItem.className = "search-result-item";
                    resultItem.innerHTML = `
                        <img src="${image}" alt="${productName}">
                        <div class="search-result-info">
                            <h4>${productName}</h4>
                            <span>${price}</span>
                        </div>
                    `;

                    resultItem.addEventListener("click", () => {

                        resetSearch();

                        product.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                        product.style.outline = "3px solid #FF6B35";

                        setTimeout(() => {

                            product.style.outline = "";

                        }, 2000);

                    });

                    searchResults.appendChild(resultItem);

                }

            } else {

                product.classList.add("hide");

            }

        });

        searchNoResult.style.display = query !== "" && matchCount === 0 ? "block" : "none";

    }

    if (searchBtn && searchPopup && searchInput) {

        searchBtn.addEventListener("click", () => {

            searchPopup.classList.add("active");

            searchInput.focus();

            renderSearchResults(searchInput.value);

        });

    }

    if (closeSearch) {

        closeSearch.addEventListener("click", resetSearch);

    }

    if (searchPopup) {

        searchPopup.addEventListener("click", (e) => {

            if (e.target === searchPopup) {

                resetSearch();

            }

        });

    }

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape" && searchPopup && searchPopup.classList.contains("active")) {

            resetSearch();

        }

    });

    if (searchInput) {

        searchInput.addEventListener("input", () => {

            renderSearchResults(searchInput.value);

        });

    }


    /* ======================================
    WISHLIST
    ====================================== */

    const wishlistButtons = document.querySelectorAll(".wishlist-btn");

    function toggleWishlistItem(button) {

        const product = {
            id: button.dataset.id,
            name: button.dataset.name,
            price: button.dataset.price,
            image: button.dataset.image
        };

        let wishlist = getWishlist();
        const index = wishlist.findIndex(item => item.id === product.id);

        if (index === -1) {

            wishlist.push(product);

            button.classList.add("active");

            button.innerHTML = '<i class="fa-solid fa-heart"></i>';

        } else {

            wishlist.splice(index, 1);

            button.classList.remove("active");

            button.innerHTML = '<i class="fa-regular fa-heart"></i>';

        }

        saveWishlist(wishlist);

        updateWishlistCount();

    }

    wishlistButtons.forEach(button => {

        button.addEventListener("click", (e) => {

            e.preventDefault();

            e.stopPropagation();

            toggleWishlistItem(button);

        });

    });

    if (wishlistButtons.length) {

        const wishlist = getWishlist();

        wishlist.forEach(item => {

            const btn = document.querySelector(`.wishlist-btn[data-id="${item.id}"]`);

            if (btn) {

                btn.classList.add("active");

                btn.innerHTML = '<i class="fa-solid fa-heart"></i>';

            }

        });

    }

    updateWishlistCount();


    /* ======================================
    CART
    ====================================== */

    function addToCart(product) {

        let cart = getCart();
        const existingItem = cart.find(item => item.id === product.id);

        if (existingItem) {

            existingItem.quantity += 1;

        } else {

            cart.push({
                ...product,
                quantity: 1
            });

        }

        saveCart(cart);

        updateCartCount();

    }

    const cartButtons = document.querySelectorAll(".cart-btn");

    cartButtons.forEach(button => {

        button.addEventListener("click", (e) => {

            e.preventDefault();

            const product = {
                id: button.dataset.id,
                name: button.dataset.name,
                price: Number(button.dataset.price),
                image: button.dataset.image
            };

            addToCart(product);

            const originalText = button.textContent;

            button.textContent = "Added!";

            setTimeout(() => {

                button.textContent = originalText;

            }, 1200);

        });

    });

    updateCartCount();


    /* ======================================
    WISHLIST PAGE
    ====================================== */

    const wishlistPage = document.getElementById("wishlistPage");

    if (wishlistPage) {

        const wishlistItemsContainer = document.getElementById("wishlistItems");
        const wishlistEmpty = document.getElementById("wishlistEmpty");

        function renderWishlistPage() {

            const wishlist = getWishlist();

            wishlistItemsContainer.innerHTML = "";

            if (wishlist.length === 0) {

                wishlistEmpty.style.display = "block";

                return;

            }

            wishlistEmpty.style.display = "none";

            wishlist.forEach(item => {

                const card = document.createElement("div");

                card.className = "page-item-card";

                card.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="page-item-info">
                        <h3>${item.name}</h3>
                        <p>₹${item.price}</p>
                        <div class="page-item-actions">
                            <button type="button" class="page-add-cart-btn" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}" data-image="${item.image}">
                                Add To Cart
                            </button>
                            <button type="button" class="page-remove-btn" data-id="${item.id}">
                                Remove
                            </button>
                        </div>
                    </div>
                `;

                wishlistItemsContainer.appendChild(card);

            });

            wishlistItemsContainer.querySelectorAll(".page-add-cart-btn").forEach(button => {

                button.addEventListener("click", () => {

                    addToCart({
                        id: button.dataset.id,
                        name: button.dataset.name,
                        price: Number(button.dataset.price),
                        image: button.dataset.image
                    });

                    button.textContent = "Added!";

                    setTimeout(() => {

                        button.textContent = "Add To Cart";

                    }, 1200);

                });

            });

            wishlistItemsContainer.querySelectorAll(".page-remove-btn").forEach(button => {

                button.addEventListener("click", () => {

                    let wishlist = getWishlist();

                    wishlist = wishlist.filter(item => item.id !== button.dataset.id);

                    saveWishlist(wishlist);

                    updateWishlistCount();

                    renderWishlistPage();

                });

            });

        }

        renderWishlistPage();

    }


    /* ======================================
    CART PAGE
    ====================================== */

    const cartPage = document.getElementById("cartPage");

    if (cartPage) {

        const cartItemsContainer = document.getElementById("cartItems");
        const cartEmpty = document.getElementById("cartEmpty");
        const cartSummary = document.getElementById("cartSummary");
        const cartSubtotal = document.getElementById("cartSubtotal");
        const cartTotal = document.getElementById("cartTotal");
        const checkoutBtn = document.getElementById("checkoutBtn");

        function renderCartPage() {

            const cart = getCart();

            cartItemsContainer.innerHTML = "";

            if (cart.length === 0) {

                cartEmpty.style.display = "block";

                if (cartSummary) {

                    cartSummary.style.display = "none";

                }

                if (cartSubtotal) {

                    cartSubtotal.textContent = "₹0";

                }

                if (cartTotal) {

                    cartTotal.textContent = "₹0";

                }

                if (checkoutBtn) {

                    checkoutBtn.disabled = true;

                }

                return;

            }

            cartEmpty.style.display = "none";

            if (cartSummary) {

                cartSummary.style.display = "block";

            }

            if (checkoutBtn) {

                checkoutBtn.disabled = false;

            }

            let subtotal = 0;

            cart.forEach(item => {

                subtotal += item.price * item.quantity;

                const row = document.createElement("div");

                row.className = "page-item-card cart-row";

                row.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="page-item-info">
                        <h3>${item.name}</h3>
                        <p>₹${item.price}</p>
                        <div class="cart-qty-controls">
                            <button type="button" class="qty-btn" data-id="${item.id}" data-action="decrease">-</button>
                            <span>${item.quantity}</span>
                            <button type="button" class="qty-btn" data-id="${item.id}" data-action="increase">+</button>
                        </div>
                    </div>
                    <div class="cart-row-right">
                        <strong>₹${item.price * item.quantity}</strong>
                        <button type="button" class="page-remove-btn" data-id="${item.id}">Remove</button>
                    </div>
                `;

                cartItemsContainer.appendChild(row);

            });

            if (cartSubtotal) {

                cartSubtotal.textContent = `₹${subtotal}`;

            }

            if (cartTotal) {

                cartTotal.textContent = `₹${subtotal}`;

            }

            cartItemsContainer.querySelectorAll(".qty-btn").forEach(button => {

                button.addEventListener("click", () => {

                    let cart = getCart();
                    const item = cart.find(entry => entry.id === button.dataset.id);

                    if (!item) {

                        return;

                    }

                    if (button.dataset.action === "increase") {

                        item.quantity += 1;

                    } else if (item.quantity > 1) {

                        item.quantity -= 1;

                    }

                    saveCart(cart);

                    updateCartCount();

                    renderCartPage();

                });

            });

            cartItemsContainer.querySelectorAll(".page-remove-btn").forEach(button => {

                button.addEventListener("click", () => {

                    let cart = getCart();

                    cart = cart.filter(item => item.id !== button.dataset.id);

                    saveCart(cart);

                    updateCartCount();

                    renderCartPage();

                });

            });

        }

        if (checkoutBtn) {

            checkoutBtn.addEventListener("click", () => {

                if (getCart().length === 0) {

                    return;

                }

                alert("Thank you! Your order has been placed successfully.");

                saveCart([]);

                updateCartCount();

                renderCartPage();

            });

        }

        renderCartPage();

    }
