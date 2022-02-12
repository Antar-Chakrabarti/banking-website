function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    // clear input field
    inputField.value = '';
    return inputAmount;
}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotalAmount = parseFloat(totalText);
    totalElement.innerText = amount + previousTotalAmount;
};

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(balanceTotalText);
    return previousBalanceTotalAmount;
};

function updateBalance(depositAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalAmount = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotalAmount + depositAmount;
    } else {
        balanceTotal.innerText = previousBalanceTotalAmount - depositAmount;
    }
};

document.getElementById('deposit-btn').addEventListener('click', function() {
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
});

document.getElementById('withdraw-btn').addEventListener('click', function() {
    const currentBalance = getCurrentBalance();
    const withdrawAmount = getInputValue('withdraw-input');
    if (withdrawAmount > 0 && currentBalance >= withdrawAmount) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
});