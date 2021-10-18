const qtyAdd = document.querySelector("#qty-add");
const qtySub = document.querySelector("#qty-sub");
const qtyDisplay = document.querySelector("#qty");
const previewThumb = document.querySelectorAll(".preview-thumbnail");
const previewThumbImg = document.querySelectorAll(".preview-thumbnail img");
const previewImg = document.querySelectorAll(".preview-img");
const nextImg = document.querySelector(".img-nav .next-img");
const previousImg = document.querySelector(".img-nav .prev-img");
const lightbox = document.querySelector(".lightbox");
const closeLightbox = document.querySelector(".close-lightbox");
const nextLightbox = document.querySelector(".lightbox .next-img");
const previousLightbox = document.querySelector(".lightbox .prev-img");
const toggleCart = document.querySelector("#preview-cart");
const cartBadge = document.querySelector(".cart-qty");
const cartCard = document.querySelector(".cart-card");
const addCart = document.querySelector("#add-cart");
const emptyCart = document.querySelector(".cart-empty");
const cartItem = document.querySelector(".cart-item");
const itemQty = document.querySelector("#item-qty");
const itemTotal = document.querySelector("#item-total");
const checkoutButton = document.querySelector("#checkout");
const deleteItem = document.querySelector(".delete-item");
const toggleMenu = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const closeMenu = document.querySelector("#close-menu");
const navFade = document.querySelector(".fade");

let selectedImg = 0;

// Opens Nav Menu
toggleMenu.addEventListener("click", () => {
    navLinks.classList.add("show-nav");
    navFade.style.display = "block";
    closeMenu.style.display = "block";
})

// Closes Nav Menu
closeMenu.addEventListener("click", () => {
    navLinks.classList.remove("show-nav");
    navFade.style.display = "none";
    closeMenu.style.display = "none";
})

// Navigates To Next Image
nextImg.addEventListener("click", () => {
    selectedImg += 1;
    if (selectedImg > 3) {
        selectedImg = 0;
    }
    previewImg[1].src = `${previewThumbImg[selectedImg].src.slice(0, -14)}.jpg`;
})

// Navigates To Previous Image
previousImg.addEventListener("click", () => {
    selectedImg -= 1;
    if (selectedImg > 3) {
        selectedImg = 0;
    }
    previewImg[1].src = `${previewThumbImg[selectedImg].src.slice(0, -14)}.jpg`;
})

// Opens Lightbox Of Image
previewImg[1].addEventListener("click", () => {
    lightbox.style.display = "flex";
    previewImg[0].src = previewImg[1].src;
    for (let k = 0; k < previewThumb.length; k++) {
        previewThumb[k].classList.remove("selected");
    }
    previewThumb[selectedImg].classList.add("selected");
    previewThumb[selectedImg + 4].classList.add("selected");
})

// Navigates To Next Lightbox Image
nextLightbox.addEventListener("click", () => {
    selectedImg += 1;
    if (selectedImg > 3) {
        selectedImg = 0;
    }
    for (let l = 0; l < previewThumb.length; l++) {
        previewThumb[l].classList.remove("selected");
    }
    previewThumb[selectedImg].classList.add("selected");
    previewThumb[selectedImg + 4].classList.add("selected");
    previewImg[0].src = `${previewThumbImg[selectedImg].src.slice(0, -14)}.jpg`;
    previewImg[1].src = `${previewThumbImg[selectedImg].src.slice(0, -14)}.jpg`;
})

// Navigates To Previous Lightbox Image
previousLightbox.addEventListener("click", () => {
    selectedImg -= 1;
    if (selectedImg < 0) {
        selectedImg = 3;
    }
    for (let l = 0; l < previewThumb.length; l++) {
        previewThumb[l].classList.remove("selected");
    }
    previewThumb[selectedImg].classList.add("selected");
    previewThumb[selectedImg + 4].classList.add("selected");
    previewImg[0].src = `${previewThumbImg[selectedImg].src.slice(0, -14)}.jpg`;
    previewImg[1].src = `${previewThumbImg[selectedImg].src.slice(0, -14)}.jpg`;
})

// Closes Lightbox
closeLightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
})

// Thumbnail Functionality
for (let i = 0; i < previewThumb.length; i++) {
    previewThumb[i].addEventListener("click", () => {
        if (i > 3) {
            selectedImg = i - 4;
            previewImg[1].src = `${previewThumbImg[i].src.slice(0, -14)}.jpg`;
            for (let j = 4; j < previewThumb.length; j++) {
                previewThumb[j].classList.remove("selected");
            }
            previewThumb[i].classList.add("selected");
        } else {
            selectedImg = i;
            previewImg[0].src = `${previewThumbImg[i].src.slice(0, -14)}.jpg`;
            for (let j = 0; j < previewThumb.length - 4; j++) {
                previewThumb[j].classList.remove("selected");
            }
            previewThumb[i].classList.add("selected");
        }

    })

}

let qty = 0;

// Adds Quantity
qtyAdd.addEventListener("click", () => {
    qty += 1;
    qtyDisplay.innerText = qty;
})
// Removes Quantity
qtySub.addEventListener("click", () => {
    if (qty > 0) {
        qty -= 1;
        qtyDisplay.innerText = qty;
    }
})

//Toggles Cart Preview
toggleCart.addEventListener("click", () => {
    cartCard.classList.toggle("show-cart");
})

let cartCount = 0;

// Adds Items To Cart
addCart.addEventListener("click", () => {
    let currentQty = parseInt(qtyDisplay.innerText)
    if (!currentQty) {
        currentQty = 1;
        qty = 1;
        qtyDisplay.innerText = currentQty;
    }
    cartCount += currentQty;
    emptyCart.style.display = "none";
    cartItem.style.display = "flex";
    checkoutButton.style.display = "flex";
    cartBadge.style.display = "block";
    cartBadge.innerText = cartCount;
    itemQty.innerText = cartCount;
    itemTotal.innerText = `$${(cartCount * 125).toFixed(2)}`;
    cartCard.style.justifyContent = "flex-start";
})

// Removes Item Form Cart
deleteItem.addEventListener("click", () => {
    qty = 0;
    cartCount = 0;
    cartCard.style.justifyContent = "center";
    emptyCart.style.display = "block";
    cartItem.style.display = "none";
    checkoutButton.style.display = "none";
    cartBadge.style.display = "none";

})