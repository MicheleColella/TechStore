let cart = [];

function addToCart(product) {
    cart.push(product);
    alert(`${product} added to cart!`);
}

document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        let productName = card.querySelector('h2').textContent;
        addToCart(productName);
    });
});
