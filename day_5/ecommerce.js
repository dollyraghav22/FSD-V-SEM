let products = [];
const getProductsData = async () => {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    products = data.products;
    console.log(products);
    const productsContainer = document.getElementById('product-container');
    products.map((product) => {
        
        const div = document.createElement("div");
        div.classList.add("product-card");
        
        const image = document.createElement("img");
        image.src = product.thumbnail;
        
        image.alt = product.title;
        const title = document.createElement("h2");
        
        itle.innerText = product.title;
        const price = document.createElement("p");
        
        price.innerText = ${product.price} ⁠;
        
        const incrementBtn = document.createElement("button");
        incrementBtn.innerText = "+";

        const decrementBtn = document.createElement("button");
        decrementBtn.innerText = "-";

        const additemSpan = document.createElement("span");
        additemSpan.innerText = "ADD ITEM";

        div.appendChild(image);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(incrementBtn);
        div.appendChild(decrementBtn);
        div.appendChild(additemSpan);

        productsContainer.appendChild(div);
    });
};

getProductsData();