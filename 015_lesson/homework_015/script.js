let bankAccount = {
  accountNumber: "123456789",
  accountHolderName: "Alice",
  balance: 0,
};

// this.balance += sum
bankAccount.deposit = function (sum) {
  sum >= 5 && sum <= 5000
    ? (this.balance += sum)
    : alert("Некорректная сумма пополнения"); // this.balance = this.balance + sum
};

// this.balance -= sum
// Бизнес-логика
bankAccount.withdraw = function (sum) {
  sum <= this.balance && sum > 0
    ? (this.balance -= sum)
    : alert("Некорректная сумма списания");
};

// Просмотр баланса
bankAccount.checkBalance = function () {
  console.log(`Баланс Вашего аккаунта равен: ${this.balance}`);
};

//! Создаем кнопку "Create new account"

const bank = [];

function createAccount() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value.trim();

  // falsy null, '', 0, undefined, NaN
  if (name) {
    bank.push({
      ...bankAccount,
      accountNumber: bank.length + 1,
      accountHolderName: name,
    });
    alert("Account created successfully");
  } else {
    alert("Please, enter a valid name");
  }

  nameInput.value = "";
  console.log(bank);
}

//! Создаем кнопку "Show all accounts"

function showAccounts() {
  // Получаем ссылку на список аккаунтов в HTML
  const accountList = document.getElementById("accountList");

  // Очищаем список перед добавлением новых элементов
  accountList.innerHTML = "";

  // Проверяем, есть ли аккаунты в банке
  if (bank.length === 0) {
    alert("No accounts to display");
    return;
  }

  // Генерируем список аккаунтов
  bank.forEach((account) => {
    // Создаем новый элемент списка
    const listItem = document.createElement("li");

    // Заполняем элемент данными об аккаунте
    listItem.textContent = `ID: ${account.accountNumber}, Name: ${account.accountHolderName}, Balance: ${account.balance}`;

    // Добавляем элемент в список
    accountList.appendChild(listItem);
  });
}

//! Создаем кнопки "Deposit" и "Withdraw"

// ДЕБЕТОВАЯ КАРТА (карта не уходящая в минус!)

const deposit = document.getElementById("deposit");
const withdraw = document.getElementById("withdraw");

deposit.onclick = function () {
  const accountIdInput = document.getElementById("accountId");
  const amountInput = document.getElementById("amount");

  const accountId = parseInt(accountIdInput.value.trim());
  const amount = parseFloat(amountInput.value);

  const account = bank.find((acc) => acc.accountNumber === accountId);

  if (amount >= 5 && amount <= 5000) {
    account.balance += amount;
    alert(`Успешно пополнено! Новый баланс: ${account.balance}`);
  } else {
    alert("Некорректная сумма пополнения. Введите сумму от 5 до 5000.");
  }

  accountIdInput.value = "";
  amountInput.value = "";
};

withdraw.onclick = function () {
    const accountIdInput = document.getElementById("accountId");
    const amountInput = document.getElementById("amount");
  
    const accountId = parseInt(accountIdInput.value.trim());
    const amount = parseFloat(amountInput.value);
  
    const account = bank.find((acc) => acc.accountNumber === accountId);
  
    if (amount <= account.balance && amount > 0) {
      account.balance -= amount;
      alert(`Успешно списано! Новый баланс: ${account.balance}`);
    } else {
      alert("Сумма списания превышает остаток на счете или вы ввели отрицательное число - операция невозможна.");
    }
  
    accountIdInput.value = "";
    amountInput.value = "";
};
