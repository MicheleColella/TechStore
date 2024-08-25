// Funzione per selezionare 3 prodotti casuali
function getRandomProducts(products, count = 3) {
    const shuffled = products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

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

    // Gestione del menu a tendina per schermi piccoli
    const menuToggle = document.getElementById('mobile-menu');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const navbarItems = document.querySelectorAll('.navbar .nav-item'); // Selettore per gli elementi della navbar
    const header = document.querySelector('header');
    const dropdownBackdrop = document.createElement('div');
    dropdownBackdrop.className = 'dropdown-backdrop';
    document.body.appendChild(dropdownBackdrop);

    // Funzione per aprire il menu a tendina
    const openMenu = () => {
        dropdownMenu.classList.add('active');
        dropdownBackdrop.style.display = 'block';
        navbarItems.forEach(item => item.classList.add('hidden')); // Nasconde solo gli elementi della navbar
    };

    // Funzione per chiudere il menu a tendina
    const closeMenu = () => {
        dropdownMenu.classList.remove('active');
        dropdownBackdrop.style.display = 'none';
        navbarItems.forEach(item => item.classList.remove('hidden')); // Mostra di nuovo gli elementi della navbar
    };

    // Apre il menu a tendina quando si clicca sul toggle
    menuToggle.addEventListener('click', openMenu);

    // Chiude il menu a tendina quando si clicca fuori dal menu
    dropdownBackdrop.addEventListener('click', closeMenu);

    // Aggiunge un pulsante di chiusura (X) al menu a tendina
    const closeButton = document.createElement('span');
    closeButton.className = 'close-btn';
    closeButton.textContent = '×';
    dropdownMenu.appendChild(closeButton);

    // Chiude il menu a tendina quando si clicca sulla X
    closeButton.addEventListener('click', closeMenu);
});
