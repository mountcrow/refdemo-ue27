export default async function decorate(block) {
  const [nameWrap, descWrap, imageWrap, priceWrap] = [...block.children].map(
    (c) => c.firstElementChild,
  );

  block.innerHTML = '';

  if (imageWrap) {
    imageWrap.classList.add('image');
    block.append(imageWrap);
  }

  const textContent = document.createElement('div');
  textContent.className = 'content';

  if (nameWrap) {
    nameWrap.classList.add('name');
    textContent.append(nameWrap);
  }

  if (descWrap) {
    descWrap.classList.add('description');
    textContent.append(descWrap);
  }

  if (priceWrap) {
    priceWrap.classList.add('price');
    textContent.append(priceWrap);
  }

  block.append(textContent);
}
