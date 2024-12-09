// Задание 1
// Создать объект bankAccount (DEBIT CARD), который:
// accountNumber: "123456789"
// accountHolderName: "Alice"
// balance: 0
// deposit(sum) { TODO Пополнение счёта }
// withdraw(sum) { TODO Списание счёта }
// checkBalance() { ODO Просмотр баланса счёта }

let debitCard = {
  accountNumber: "123456789",
  accountHolderName: "Alice",
  balance: 0,
  deposit: 0,
  withdraw: 0,
};

debitCard.deposit = function (sum) {
  this.balance = this.balance + sum;
  console.log(`Внесено на счет:: ${sum}`);
};

debitCard.withdraw = function (sum) {
  if (this.balance >= sum) {
    this.balance = this.balance - sum;
    console.log(`Списано со счета: ${sum}`);
  }else {
    console.log("Недостаточно средств на счете");
  }
};

debitCard.checkBalance = function () {
  console.log(`Текущий баланс: ${this.balance}`);
};

debitCard.deposit(5000);
debitCard.withdraw(6000);
debitCard.checkBalance();
