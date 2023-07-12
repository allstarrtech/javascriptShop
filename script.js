const bar = document.getElementById('mobile');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

let btns = document.querySelectorAll(".products button");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", add);
}

// Cart Open/Close

let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

// Open Cart

cartIcon.onclick = () => {
    cart.classList.add('active')
}

// Close Cart

closeCart.onclick = () => {
    cart.classList.remove('active')
}

// Making Add To Cart

if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded, ready');
} else {
    ready();
}

// Making Function

function ready() {
    // Remove Item From Cart
    var removeCartButtons = document.getElementsByClassName(".cart-remove");
    for(var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }
}

// Remove Cart Item

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
}

// let carts = document.querySelectorAll('.cart1');

// let products = [
//     {
//         name: 'Crown',
//         tag: 'crown',
//         price: 78,
//         inCart: 0
//     },
//     {
//         name: 'Gold Ear Rings',
//         tag: 'goldearrings',
//         price: 199,
//         inCart: 0
//     },
//     {
//         name: 'Silver Pocket Watch',
//         tag: 'silverpocketwatch',
//         price: 95,
//         inCart: 0
//     },
//     {
//         name: 'Pendant Heart Crown',
//         tag: 'pendantheartcrown',
//         price: 110,
//         inCart: 0
//     },
//     {
//         name: 'Oversized Black Ear Rings',
//         tag: 'oversizedblackearrings',
//         price: 88,
//         inCart: 0
//     },
//     {
//         name: 'Brown Bead Necklace',
//         tag: 'brownbeadnecklace',
//         price: 68,
//         inCart: 0
//     },
//     {
//         name: 'Flower Necklace',
//         tag: 'flowernecklace',
//         price: 210,
//         inCart: 0
//     },
//     {
//         name: 'Peacock Necklace',
//         tag: 'peacocknecklace',
//         price: 108,
//         inCart: 0
//     },
//     {
//         name: 'Bracelet',
//         tag: 'bracelet',
//         price: 78,
//         inCart: 0
//     },
//     {
//         name: 'Necklace',
//         tag: 'necklace',
//         price: 199,
//         inCart: 0
//     },
//     {
//         name: 'Silver Necklace',
//         tag: 'silvernecklace',
//         price: 108,
//         inCart: 0
//     },
//     {
//         name: 'Silver Wedding Rings',
//         tag: 'silverweddingrings',
//         price: 110,
//         inCart: 0
//     },
//     {
//         name: 'Heart Necklace',
//         tag: 'heartnecklace',
//         price: 88,
//         inCart: 0
//     },
//     {
//         name: 'White Pearl Necklace',
//         tag: 'whitepearlnecklace',
//         price: 68,
//         inCart: 0
//     },
//     {
//         name: 'Ring',
//         tag: 'ring',
//         price: 210,
//         inCart: 0
//     },
//     {
//         name: 'Dangling Ear Rings with Studs',
//         tag: 'danglingearringswithstuds',
//         price: 108,
//         inCart: 0
//     }
    
// ]

// for(let i = 0; i < carts.length; i++) {
//     carts[i].addEventListener('click', cartNumbers), () => {
//         cartNumbers(products[i]);
//     }
// }

// function onLoadCartNumbers() { ERROR
//     let productNumbers = localStorage.getItem('cartNumbers');

//     if(productNumbers) { ERROR
//         document.querySelector('.cart span').textContent = productNumbers;
//     }
// }



// function cartNumbers(product) {
    // console.log("The product clicked is", product); ERROR
    // let productNumbers = localStorage.getItem('cartNumbers');
    
    // productNumbers = parseInt(productNumbers);
    
    // if(productNumbers) {
    //     localStorage.setItem('cartNumbers', productNumbers + 1);
        // document.querySelector('.cart span').textContent = productNumbers + 1; ERROR
    // } else {
    //     localStorage.setItem('cartNumbers', 1);
        // document.querySelector('.cart span').textContent = 1; ERROR
//     } 
//     setItems(product);
// }

// function setItems(product) {
//     console.log("Inside of setItems function");
//     console.log("My product is", product);
//     product.inCart = 1;

//     let cartItems = {
//         [product.tag]: product
//     }

//     localStorage.setItem("productsInCart", JSON.stringify(cartItems));
// }

// onLoadCartNumbers(); ERROR






