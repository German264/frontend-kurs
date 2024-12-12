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
  const accountList = document.getElementById("accountList");
  accountList.innerHTML = "";

  bank.forEach((account, index) => {
    const listItem = document.createElement("li"); // Создаем элемент списка
    listItem.textContent = `${index + 1}. ID: ${account.accountNumber}, Name: ${
      account.accountHolderName
    }, Balance: ${account.balance}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete account";

    deleteButton.addEventListener("click", () => {
      bank.splice(index, 1); // Удаляем аккаунт из массива
      showAccounts(); // Перерисовываем список
      alert(`Account ID ${account.accountNumber} deleted!`);
    });
    listItem.appendChild(deleteButton); // Добавляем кнопку к элементу списка
    accountList.appendChild(listItem); // Добавляем элемент списка в общий список
  });
}

//! Создаем кнопки "Deposit" и "Withdraw"

// ДЕБЕТОВАЯ КАРТА (карта не уходящая в минус!)

const withdraw = document.getElementById("withdraw");
const deposit = document.getElementById("deposit");

deposit.onclick = function () {
  operation("deposit");
};

withdraw.onclick = function () {
  operation("withdraw");
};

function operation(operator) {
  const accountIdInput = document.getElementById("accountId");
  const amountInput = document.getElementById("amount");

  const accountId = accountIdInput.value.trim(); // string
  const amount = +amountInput.value.trim(); // number (число или NaN)

  const accountFind = bank.find(
    (e) => e.accountNumber.toString() === accountId
  );

  if (accountFind) {
    if (operator === "deposit") {
      accountFind.deposit(amount);
    } else {
      accountFind.withdraw(amount);
    }
  } else {
    alert("Account not found");
  }

  accountIdInput.value = "";
  amountInput.value = "";
}
