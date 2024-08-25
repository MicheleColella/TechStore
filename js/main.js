// Funzione per selezionare 3 prodotti casuali
function getRandomProducts(products, count = 3) {
    const shuffled = products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Caricamento dei 3 prodotti casuali nella pagina principale
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM content loaded");
    
    const productList = document.getElementById('product-list');
    
    if (productList) {
        console.log("Product list container found");

        const randomProducts = getRandomProducts(products); // Prende 3 prodotti casuali
        randomProducts.forEach(product => {
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
    } else {
        console.error("Product list container not found");
    }

    // Chiamata per visualizzare i prodotti di una categoria casuale
    const randomCategory = getRandomCategory();
    console.log("Random category selected: " + randomCategory);
    
    const categoryNameElement = document.getElementById('category-name');
    if (categoryNameElement) {
        categoryNameElement.textContent = randomCategory;
    } else {
        console.error("Category name element not found");
    }
    
    displayCategoryProducts(randomCategory);
});

// Funzione per ottenere una categoria casuale
function getRandomCategory() {
    const categories = [...new Set(products.map(p => p.category))];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    console.log("Available categories: ", categories);
    return randomCategory;
}

// Mostra prodotti di una categoria casuale in uno scroll orizzontale
function displayCategoryProducts(category) {
    const productList = document.getElementById('category-products');
    
    if (productList) {
        console.log("Category product list container found");

        const categoryProducts = products.filter(product => product.category === category);
        console.log("Products in category: ", categoryProducts);
    
        productList.innerHTML = ''; // Svuota l'elemento prima di riempirlo di nuovo
    
        categoryProducts.forEach(product => {
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
    } else {
        console.error("Category product list container not found");
    }
}
