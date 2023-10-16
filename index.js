//Styles
const divStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '24px 8px',
  boxShadow: '1px 1px 5px 5px #f1f1f1',
  borderRadius: '10px',
  boxSizing: 'border-box',
  minHeight: '507px',
}

//Getting the item after which need to insert the product
const productsNodeList = document.querySelectorAll('.product-item')
const fourthProduct = [...productsNodeList][3]

//Creating the elements
const div = document.createElement('div')
const text = document.createElement('p')


//Assigning styles and inner content
text.innerHTML = "Lorem Ipsum"
Object.assign(div.style, divStyles)


//Inserting created elements in DOM
fourthProduct.insertAdjacentElement('afterend', div)
div.insertAdjacentElement('afterbegin', text)


//Calling match media function
setElementWidth(div)
copy(div)


//Match media function
function setElementWidth(element) {
  if (window.matchMedia('(max-width: 767px)').matches) {
    div.style.width = 'calc(100% - 16px)';
  } else if (window.matchMedia('(max-width: 1199px)').matches) {

    div.style.width = 'calc(66.658% - 64px)';
  } else {

    div.style.width = 'calc(50% - 16px)';
  }
}

//Adding listener for window resizing and calling  match media function
window.addEventListener('resize', setElementWidth(div))

/* const scriptElement = document.createElement('script')
scriptElement.textContent = `
  const divStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '24px 8px',
    boxShadow: '1px 1px 5px 5px #f1f1f1',
    borderRadius: '10px',
    boxSizing: 'border-box',
    minHeight: '507px',
  }

  const productsNodeList = document.querySelectorAll('.product-item');
  const fourthProduct = [...productsNodeList][3];
  const div = document.createElement('div');
  const text = document.createElement('p');

  text.innerHTML = "Lorem Ipsum";
  Object.assign(div.style, divStyles);
  fourthProduct.insertAdjacentElement('afterend', div);
  div.insertAdjacentElement('afterbegin', text);

  function setElementWidth(element) {
    if (window.matchMedia('(max-width: 767px)').matches) {
      div.style.width = 'calc(100% - 16px)';
    } else if (window.matchMedia('(max-width: 1199px)').matches) {
      div.style.width = 'calc(66.658% - 70px)';
    } else {
      div.style.width = 'calc(50% - 16px)';
    }
  }

  setElementWidth(div);
  window.addEventListener('resize', setElementWidth);
`
document.body.appendChild(scriptElement) */