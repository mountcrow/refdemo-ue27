export default async function decorate(block) {
  const [nameWrapper, descWrapper, imageWrapper, priceWrapper] = [...block.children].map((c) => c.firstElementChild);

  const productDiv = document.createElement('div');
  productDiv.className = 'product-container';

  // Add the image on the left/top
  if (imageWrapper) {
    imageWrapper.classList.add('product-image');
    productDiv.append(imageWrapper);
  }

  // Group text content together
  const textContent = document.createElement('div');
  textContent.className = 'product-text-content';

  if (nameWrapper) {
    nameWrapper.classList.add('product-name');
    textContent.append(nameWrapper);
  }

  if (descWrapper) {
    descWrapper.classList.add('product-description');
    textContent.append(descWrapper);
  }

  if (priceWrapper) {
    priceWrapper.classList.add('product-price');
    textContent.append(priceWrapper);
  }

  productDiv.append(textContent);

  block.innerHTML = '';
  block.append(productDiv);
}
