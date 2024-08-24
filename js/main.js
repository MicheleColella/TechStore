document.addEventListener('DOMContentLoaded', () => {
    // Caricamento dei prodotti nella pagina principale
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <a href="product.html?id=${product.id}" class="view-details">View Details</a>
        `;
        productList.appendChild(productCard);
    });

    // Caricamento dettagli del prodotto selezionato
    if (document.getElementById('product-details')) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'), 10);
        const product = products.find(p => p.id === productId);
        
        if (product) {
            const productDetails = document.getElementById('product-details');
            productDetails.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h1>${product.name}</h1>
                <p>$${product.price.toFixed(2)}</p>
                <p>${product.description}</p>
                <ul>
                    ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <button id="add-to-cart">Add to Cart</button>
            `;
            
            // Gestione del pulsante "Add to Cart"
            document.getElementById('add-to-cart').addEventListener('click', () => {
                addToCart(product.name);
            });
        }
    }

    // Gestione del menu hamburger per schermi piccoli
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
