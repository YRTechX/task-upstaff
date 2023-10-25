const insertedItems = []

function insertInDom(relativeElementClass, tagName, elementStyles) {
    if (insertedItems.length) {
        insertedItems.forEach(item => {
            item.remove()
        })
    }
    const addedElementClass = 'added_block'
    // Styles
    elementStyles = elementStyles || {
        height: '100px',
        backgroundColor: 'red',
        width: '100%',
        marginBottom: '16px'
    }
    // Setting default values
    relativeElementClass = relativeElementClass || 'minicart_grand_total'
    tagName = tagName || 'div'

    // Getting the item after which to insert the product
    const relativeElement = document.querySelector(`.${relativeElementClass}`)

    // Creating the element
    const insertingElement = document.createElement(tagName)

    // Adding class
    insertingElement.classList.add(addedElementClass)

    // Assigning styles
    Object.assign(insertingElement.style, elementStyles)

    // Inserting created elements in DOM
    if (relativeElement) {
        relativeElement.insertAdjacentElement('afterend', insertingElement)
    }

    // Pushing insertedElement to an array of inserted items
    insertedItems.push(insertingElement)
}

insertInDom('minicart_grand_total', 'div')

// Function that will be called when changes occur in the cart
function handleCartChanges(mutationsList) {
    const isElementAdded = mutationsList.some(mutation => {
        return Array.from(mutation.addedNodes).some(node => {
            return node.classList.contains('added_block') // Replace with the class of your added element
        })
    })
    if (!isElementAdded) {
        insertInDom('minicart_grand_total', 'div')
    }
}

// Options for MutationObserver
const observerOptions = {
    childList: true, // Track changes in child elements
    subtree: true,
    characterData: true
}

// Create an instance of MutationObserver with a callback function
const observer = new MutationObserver(handleCartChanges)

// Start observing changes in the cart
const cartElement = document.querySelector('.minicart_content')
observer.observe(cartElement, observerOptions)
