document.addEventListener("DOMContentLoaded", function () {
    const cartButton = document.getElementById("cart");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    let cartItems = [];

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const price = parseFloat(button.getAttribute("data-price"));
            cartItems.push(price);
            updateCart();
        });
    });

    function updateCart() {
        const cartCount = cartItems.length;
        cartButton.textContent = `Cart (${cartCount})`;
    }
});

