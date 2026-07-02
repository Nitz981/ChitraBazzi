    /* ==========================================
            PRODUCT DATABASE
    ========================================== */

    const products = {

    1:{

    name:"Resin Photo Frame",

    category:"Personalized Handmade Gift",

    price:899,

    oldPrice:1199,

    discount:"25% OFF",

    rating:"4.9",

    reviewCount:128,

    image:"https://picsum.photos/600/600?random=11",

    description:"A beautifully handcrafted personalized resin photo frame designed to preserve your precious memories with premium quality finishing."

    },

    2:{

    name:"Crochet Flower",

    category:"Handmade Crochet",

    price:699,

    oldPrice:899,

    discount:"22% OFF",

    rating:"4.8",

    reviewCount:92,

    image:"https://picsum.photos/600/600?random=12",

    description:"Beautiful everlasting handmade crochet flowers perfect for gifting and home decoration."

    },

    3:{

    name:"Luxury Gift Box",

    category:"Gift Collection",

    price:1199,

    oldPrice:1499,

    discount:"20% OFF",

    rating:"4.9",

    reviewCount:156,

    image:"https://picsum.photos/600/600?random=13",

    description:"Premium handmade luxury gift box designed for birthdays, anniversaries and special occasions."

    },

    4:{

    name:"Name Frame",

    category:"Wooden Collection",

    price:999,

    oldPrice:1299,

    discount:"23% OFF",

    rating:"4.8",

    reviewCount:87,

    image:"https://picsum.photos/600/600?random=14",

    description:"Customized wooden name frame crafted with elegant finishing and premium materials."

    },

    5:{

    name:"Mini Resin Clock",

    category:"Resin Art",

    price:799,

    oldPrice:999,

    discount:"20% OFF",

    rating:"4.7",

    reviewCount:61,

    image:"https://picsum.photos/600/600?random=21",

    description:"Modern handcrafted resin clock for home decoration and gifting."

    },

    6:{

    name:"Wooden Name Plate",

    category:"Home Decor",

    price:1099,

    oldPrice:1399,

    discount:"21% OFF",

    rating:"4.9",

    reviewCount:75,

    image:"https://picsum.photos/600/600?random=22",

    description:"Premium customized wooden name plate with elegant finish."

    },

    7:{

    name:"Couple Frame",

    category:"Personalized Gifts",

    price:1299,

    oldPrice:1599,

    discount:"19% OFF",

    rating:"4.9",

    reviewCount:103,

    image:"https://picsum.photos/600/600?random=23",

    description:"Personalized couple frame crafted for anniversaries and memorable occasions."

    },

    8:{

    name:"Gift Hamper",

    category:"Gift Hamper",

    price:1499,

    oldPrice:1899,

    discount:"21% OFF",

    rating:"5.0",

    reviewCount:64,

    image:"https://picsum.photos/600/600?random=24",

    description:"Luxury handmade gift hamper filled with premium handcrafted products."

    }

    };

    function updateWishlistCount() {

    const wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

    const badge = document.getElementById("wishlistCount");

    if (badge) {
        badge.textContent = wishlist.length;
    }

}

function updateCartCount() {

    const cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    const badge = document.getElementById("cartCount");

    if (badge) {
        badge.textContent = cart.length;
    }

}

    /* ==========================================
            LOAD PRODUCT
    ========================================== */

    const params = new URLSearchParams(window.location.search);

    const productId = params.get("id") || "1";

    const product = products[productId];

    if(product){

    document.title = product.name + " | ChitraBazzi";

    document.getElementById("productCategory").textContent = product.category;

    document.getElementById("productName").textContent = product.name;

    document.getElementById("productPrice").textContent = "₹" + product.price;

    document.getElementById("productOldPrice").textContent = "₹" + product.oldPrice;

    document.getElementById("productDiscount").textContent = product.discount;

    document.getElementById("productRating").textContent =
    `(${product.rating} • ${product.reviewCount} Reviews)`;

    document.getElementById("productDescription").textContent =
    product.description;

    document.getElementById("mainImage").src = product.image;

    }

    /* ==========================================
            THUMBNAIL IMAGE CHANGE
    ========================================== */

    const thumbs = document.querySelectorAll(".thumb");

    thumbs.forEach((thumb) => {

        thumb.addEventListener("click", () => {

            document.getElementById("mainImage").src = thumb.src;

            thumbs.forEach((img) => img.classList.remove("active"));

            thumb.classList.add("active");

        });

    });

    /* ==========================================
            WISHLIST
    ========================================== */

    const wishlistBtn = document.querySelector(".wishlist-btn");

    if (wishlistBtn) {

        wishlistBtn.addEventListener("click", () => {

            let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

            const exists = wishlist.find(item => item.id == productId);

            if (exists) {

                wishlist = wishlist.filter(item => item.id != productId);

                wishlistBtn.innerHTML =
                `<i class="fa-regular fa-heart"></i> Wishlist`;

            } else {

                wishlist.push({

                    id: productId,

                    name: product.name,

                    price: product.price,

                    image: product.image

                });

                wishlistBtn.innerHTML =
                `<i class="fa-solid fa-heart"></i> Added`;

            }

            localStorage.setItem("wishlist", JSON.stringify(wishlist));

            updateWishlistCount();

alert(product.name + " added to Wishlist ❤️");

        });

    }

    /* ==========================================
            ADD TO CART
    ========================================== */

    const cartBtn = document.querySelector(".cart-btn");

    if (cartBtn) {

        cartBtn.addEventListener("click", () => {

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            const exists = cart.find(item => item.id == productId);

            if (!exists) {

                cart.push({

                    id: productId,

                    name: product.name,

                    price: product.price,

                    image: product.image,

                    qty: 1

                });

                localStorage.setItem("cart", JSON.stringify(cart));

                updateCartCount();

            }

            alert(product.name + " added to cart.");

        });

    }

    /* ==========================================
            BUY NOW
    ========================================== */

    const buyBtn = document.querySelector(".buy-btn");

    if (buyBtn) {

        buyBtn.addEventListener("click", () => {

            localStorage.setItem("buyNow", JSON.stringify({

                id: productId,

                name: product.name,

                price: product.price,

                image: product.image,

                qty: 1

            }));

            alert("Proceeding to Checkout...");

            // Future
            // window.location.href="checkout.html";

        });

    }

    /* ==========================================
            RELATED PRODUCTS
    ========================================== */

    document.querySelectorAll(".related-card").forEach(card => {

        card.addEventListener("click", () => {

            const id = card.dataset.id;

            window.location.href = "product.html?id=" + id;

        });

    });

    /* ==========================================
            WRITE REVIEW
    ========================================== */

    const reviewBtn = document.querySelector(".review-btn");

    if (reviewBtn) {

        reviewBtn.addEventListener("click", () => {

            alert("Only verified customers can submit reviews after successful delivery.");

        });

    }

    /* ==========================================
            PAGE LOADED
    ========================================== */

    console.log("ChitraBazzi Product Loaded Successfully ❤️");

    updateWishlistCount();
updateCartCount();