let quantity = 1;
let stock = 10; 

function increaseQuantity() {
    if (quantity < stock) {
        quantity++;
        document.getElementById('quantity').value = quantity;
    }
}

function decreaseQuantity() {
    if (quantity > 1) {
        quantity--;
        document.getElementById('quantity').value = quantity;
    }
}

