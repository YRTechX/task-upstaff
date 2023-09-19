const productsNodeList = document.querySelectorAll('.product-item')
const fourthProduct = [...productsNodeList][3]
const div = document.createElement('div')
const text = document.createElement('p')
text.innerHTML = "Lorem Ipsum"
div.style.display = 'flex'
div.style.justifyContent = 'center'
div.style.alignItems = 'center'
div.style.margin = '1.5rem 0.5rem'
div.style.boxShadow = '1px 1px 5px 5px #f1f1f1'
div.style.borderRadius = '10px'
div.style.boxSizing = 'border-box'
div.style.borderRadius = '10px'
div.style.minHeight = '507px'
fourthProduct.insertAdjacentElement('afterend', div)
div.insertAdjacentElement('afterbegin', text)
function setElementWidth() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    div.style.width = 'calc(100% - 1rem)';
  } else if (window.matchMedia('(max-width: 1199px)').matches) {

    div.style.width = 'calc(66.658% - 5rem)';
  } else {

    div.style.width = 'calc(50% - 1rem)';
  }
}
setElementWidth();
window.addEventListener('resize', setElementWidth);