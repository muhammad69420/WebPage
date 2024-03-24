function getQuantityValue() {
  const quantityInput = document.getElementById('quantity')

  const quantityValue = quantityInput.value
  return quantityValue
}

function getQuantityPrice() {
  const quantityPrice = document.getElementById('product_price')

  const productPriceText = quantityPrice.textContent.trim()

  const productPriceNumber = parseFloat(productPriceText.replace('$', ''))


  const productPriceNumberInCents = productPriceNumber * 100
  return productPriceNumberInCents
}

function getItemId() {
  const itemId = document.getElementById('unique_id')
  return itemId.textContent
}
window.addEventListener("DOMContentLoaded", (event) => {

  const el = document.getElementById('checkout_btn');
  el.addEventListener('click', () => {
    const quantity = getQuantityValue()
    const price = getQuantityPrice()
    const id = getItemId()
    console.log(`{"id":"${id}","quantity": "${quantity}"}`)

    fetch('https://calm-bar-7111.av-bharath.workers.dev/', {
    // fetch('http://127.0.0.1:8787', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // body: `{"productName":"string","quantity": "${quantity}","unitAmount":"12"}`
      body: `{"id":"${id}","quantity": "${quantity}"}`
    })
      .then(res => {
        if (res.ok) return res.json()
        return res.json().then(e => Promise.reject(e))
      }).then(({ callback }) => {
        window.location = callback
      }).catch(e => {
        console.log(e.error)
      })
  });

});