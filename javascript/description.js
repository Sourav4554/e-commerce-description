import {dresses} from './dataFetch.js'

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");
const productName=document.getElementById('product-name')
const price=document.querySelector('.price')
const description=document.getElementById('desc')
const image=document.getElementById('image')


const urlParams=new URLSearchParams(window.location.search)
const productId=Number(urlParams.get('id'))
const product=dresses.find((product)=>product.id===productId)




tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

let qty = 1;
document.getElementById("plus").onclick = () => {
  qty++;
  document.getElementById("qty").textContent = qty;
};

document.getElementById("minus").onclick = () => {
  if (qty > 1) qty--;
  document.getElementById("qty").textContent = qty;
};
function addData(){
 productName.textContent=product.name
 price.textContent=`₹${product.price}`
 description.textContent=product['description']
 image.src=`../${product.image}`
 console.log(image)
}


addData()