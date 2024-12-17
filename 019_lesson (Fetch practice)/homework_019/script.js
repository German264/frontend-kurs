const gridProducts = document.querySelector('#grid-products')

async function fetchProducts() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  data.products.map(product => {
    // создаем карточку с данными
    const card = document.createElement("div");
    card.className = "product-card";
   
    // создаем заголовок
    const heading = document.createElement("h4");
    heading.textContent = product.title
    // создаем картинку
    const img = document.createElement('img')
    img.src = product.images
    img.alt = product.title
    // создаем обертку для картинки и добавляем картинку
    const wrapper = document.createElement('div')
    wrapper.className = 'img-wrapper'
    wrapper.append(img)
    // создаем описание товара
    const desc = document.createElement('p')
    // обрезаем длинный текст
    let descText = product.description
    if (descText.length > 200) {
      desc.textContent = descText.slice(0, 200) + '...'
    } else {
      desc.textContent = product.description
    }
    // добавляем цену товара
    const price = document.createElement('p')
    price.textContent = `Price: ${product.price}€`
    price.style.textAlign = 'center';
    // price.textContent = product.price + ' €'
    // добавляем элементы к карточке в append()
    // в том порядке, в котором они должны быть в контейнере
    card.append(heading, price, wrapper, desc)
    gridProducts.append(card)
  });
}

// не забываем вызвать функцию
fetchProducts();
