document.addEventListener("DOMContentLoaded", function() {
    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        const productsContainer = document.getElementById("products-container");
  
        data.forEach(product => {
          const productCard = document.createElement("div");
          productCard.classList.add("product-card");
  
          const productName = document.createElement("h3");
          productName.textContent = product.name;
  
          const productDescription = document.createElement("p");
          productDescription.textContent = product.description;
  
          const productPrice = document.createElement("p");
          productPrice.textContent = "Price: $" + product.price.toFixed(2);
  
          productCard.appendChild(productName);
          productCard.appendChild(productDescription);
          productCard.appendChild(productPrice);
  
          productsContainer.appendChild(productCard);
        });
      })
      .catch(error => console.log("Error fetching data:", error));
  });