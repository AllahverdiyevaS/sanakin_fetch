const fetchFun = async (callback) => {
  const url = "https://dummyjson.com/products";
  const response = await fetch(url);
  const data = await response.json();
  return callback(data.products);
};
const container = document.querySelector(".products");

const showProduct = (arrayOfProducts) => {
  arrayOfProducts.slice(0, 4).forEach((product) => {
    console.log(product);
    const productCard = document.createElement("div");
    productCard.classList.add("div_card");
    const title = document.createElement("h3");
    title.innerText = product.title;
    const description = document.createElement("p");
    description.innerText = product.description;
    const price = document.createElement("p");
    price.innerText = product.price;
    const image = document.createElement("img");
    image.src = product.images[0];
    const button = document.createElement("button");
    button.innerText = "Add to cart";
    productCard.append(image, title, price, description, button);
    container.append(productCard);
  });
};

fetchFun((products) => showProduct(products));
