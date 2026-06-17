let cart = [];
let total = 0;

function toggleCart(){

    document
    .getElementById("cart-panel")
    .classList
    .toggle("active");
}

function addToCart(name, price){

    cart.push({
        name:name,
        price:price
    });

    total += price;

    updateCart();

    toggleCart();
}

function updateCart(){

    const cartItems =
        document.getElementById("cart-items");

    const cartCount =
        document.getElementById("cart-count");

    const cartTotal =
        document.getElementById("cart-total");

    cartItems.innerHTML = "";

    cart.forEach((item,index)=>{

        let li =
            document.createElement("li");

        li.innerHTML = `
            ${item.name}
            - ₦${item.price.toLocaleString()}

            <button
            onclick="removeItem(${index})">

            ❌

            </button>
        `;

        cartItems.appendChild(li);
    });

    cartCount.textContent =
        cart.length;

    cartTotal.textContent =
        total.toLocaleString();
}

function removeItem(index){

    total -= cart[index].price;

    cart.splice(index,1);

    updateCart();
}

function checkoutWhatsApp(){

    if(cart.length === 0){

        alert("Your cart is empty.");

        return;
    }

    let message =
    "Hello Elvis Jewels,%0A%0A";

    message +=
    "I would like to order:%0A%0A";

    cart.forEach(item=>{

        message +=
        `• ${item.name} - ₦${item.price.toLocaleString()}%0A`;

    });

    message +=
    `%0ATotal: ₦${total.toLocaleString()}`;

    window.open(
    `https://wa.me/2349035940040?text=${message}`,
    "_blank"
    );
}

/* Smooth Scroll */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

    anchor.addEventListener(
    "click",

    function(e){

        e.preventDefault();

        document
        .querySelector(
        this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});
