    let total = 0;
    let selectedItems = [0];
  
function handleCLikBtn(target) {
    const selectedItemContainer = document.getElementById("selected-items");
    const itemName = target.childNodes[3].childNodes[3].innerText;

  /*   if(selectedItems.includes(itemName)){
    alert('Duplicate Item');
    return;
  } */
    selectedItems.push(itemName);

    const li = document.createElement("li");
    li.style.listStyle = 'decimal';
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);

    const price = target.childNodes[3].childNodes[5].innerText.split(' ')[0];
    total = parseInt(total) + parseInt(price);
    document.getElementById("total-price").innerText = total.toFixed(2);
    
    const inTotalPrice = document.getElementById('in-total');
    inTotalPrice.innerText = total.toFixed(2);
     
}

// gohome button
document.getElementById('go-homeBtn').addEventListener('click',function(){
    location.reload();
})



  
// discount section
    document.getElementById('apply-button').addEventListener('click',function(){ 
    const discountInputField =  document.getElementById('coupon-value');
    const discountInputFieldText = discountInputField.value;

    let discountTotal = document.getElementById('discount-total');
    let  discountTotalValue = discountTotal.innerText;  

    if(discountInputFieldText === 'SELL200'){  
    let percentage = total * 0.2;
    let afterDiscount = total - percentage;
    discountTotal.innerText = percentage;
    const inputTotalValue = document.getElementById('in-total');
     const inputTotalValueAmount = inputTotalValue.innerText;
     let inputTotalValueAmountNumber = parseFloat(inputTotalValueAmount);
     inputTotalValue.innerText = afterDiscount;
   } else{
    alert('Please enter valid coupon code');
   }
})





