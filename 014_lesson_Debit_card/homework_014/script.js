let bankAccount = {
    accountNumber: "123456789",
    accountHolderName: "Alice",
    balance: 0
}

// this.balance += sum
bankAccount.deposit = function(sum) {
    sum >= 5 && sum <= 5000 ? this.balance += sum : alert("Некорректная сумма пополнения") // this.balance = this.balance + sum
}

// this.balance -= sum
// Бизнес-логика
bankAccount.withdraw = function(sum) {
    sum <= this.balance && sum > 0 ? this.balance -= sum : alert("Некорректная сумма списания")
}

// Просмотр баланса
bankAccount.checkBalance = function() {
    console.log(`Баланс Вашего аккаунта равен: ${this.balance}`);
}

const bank = [];

function createAccount() {
    const nameInput = document.getElementById('name');
    const name = nameInput.value.trim();

    // falsy null, '', 0, undefined, NaN
    if (name) {
        bank.push({
            ...bankAccount,
            accountNumber: bank.length + 1,
            accountHolderName: name
        })
        alert('Account created successfully')
    } else {
        alert('Please, enter a valid name')
    }

    nameInput.value = '';
    console.log(bank);
}

function showAccounts() {
    // Получаем ссылку на список аккаунтов в HTML
    const accountList = document.getElementById('accountList');
    
    // Очищаем список перед добавлением новых элементов
    accountList.value = '';

    // Проверяем, есть ли аккаунты в банке
    if (bank.length === 0) {
        alert('No accounts to display');
        return;
    }

    // Генерируем список аккаунтов
    bank.forEach(account => {
        // Создаем новый элемент списка
        const listItem = document.createElement('li');
        
        // Заполняем элемент данными об аккаунте
        listItem.textContent = `ID: ${account.accountNumber}, Name: ${account.accountHolderName}, Balance: ${account.balance}`;
        
        // Добавляем элемент в список
        accountList.appendChild(listItem);
    });
}
console.log(listItem);