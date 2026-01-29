import {dresses} from './dataFetch.js'
  const productContainer=document.querySelector('.product-container')
  console.log('hello')
  console.log(dresses);

  const createProductCard = (item) => {
    const card = document.createElement('div');
    card.className = 'card';
  
    // Image wrapper
    const imageCard = document.createElement('div');
    imageCard.className = 'image-card';
  
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;
  
    imageCard.appendChild(img);
  
    // Content
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';
  
    const title = document.createElement('h3');
    title.textContent = item.name;
  
    const desc = document.createElement('p');
    desc.textContent = item.description;
  
    cardContent.append(title, desc);
  
    // Button
    const viewBtn = document.createElement('button');
    viewBtn.textContent = 'View';
    viewBtn.type = 'button';
    
    card.addEventListener('click',()=>{
    window.location.href=`html/dessescription.html?id=${item.id}`
    })
    card.append(imageCard, cardContent, viewBtn);
    return card;
  };
  
  const displayProduct = () => {
    const fragment = document.createDocumentFragment();
  
    dresses.forEach(item => {
      fragment.appendChild(createProductCard(item));
    });
  
    productContainer.appendChild(fragment);
  };
  
  displayProduct();
  


