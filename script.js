// CAROUSEL

const swiper = new Swiper(".swiper", {
	slidesPerView: 1,
	pagination: {
		el: ".swiper-pagination",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	mousewheel: true,
	keyboard: true,
});

const incrementButton = document.querySelector(".increment");
const decrementButton = document.querySelector(".decrement");
const quantitySpan = document.querySelector(".quantity");
const addToCartButton = document.querySelector(".add-to-cart-btn");

let quantity = 0;

function increment() {
	quantity++;
	return quantity;
}

function changeQuantity() {
	quantitySpan.textContent = quantity;
	return quantity;
}

incrementButton.addEventListener("click", function () {
	increment();
	changeQuantity();
});

decrementButton.addEventListener("click", function () {
	if (quantity > 0) {
		quantity--;
		changeQuantity();
	}
});
