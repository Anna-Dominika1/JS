/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
  /*
   * Кожна транзакція - це об'єкт з властивостями: id, type і amount
   */
  
  const account = {
    // Поточний баланс рахунку
    balance: 0,
  
    // Історія транзакцій
    transactions: [],
  
    /*
     * Метод створює і повертає об'єкт транзакції.
     * Приймає суму і тип транзакції.
     */

    createTransaction(amount, type) {
    const createdTransaction = { currentAmount: amount, currentType: type };
    return createdTransaction;
    },
  
    /*
     * Метод відповідає за додавання суми до балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій
     */
    deposit(amount) {
        if (Number.isNaN(+amount)) {
            return console.log("Ви ввели не число");
          }
          this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
          this.balance += amount;
    },
  
    /*
     * Метод відповідає за зняття суми з балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій.
     *
     * Якщо amount більше, ніж поточний баланс, виводь повідомлення
     * про те, що зняття такої суми не можливо, недостатньо коштів.
     */
    withdraw(amount) {
        if (Number.isNaN(+amount)) {
            return console.log("Ви ввели не число");
          }
          if (amount > this.balance) {
            return console.log("Не достатньо коштів на рахунку");
          }
          this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
          this.balance -= amount;
    },
  
    /*
     * Метод повертає поточний баланс
     */

    getBalance() {    
        return this.balance;
    },
  
    /*
     * Метод шукає і повертає об'єкт транзакції по id
     */
    getTransactionDetails(id) {
        return this.transactions[id];
    },
  
    /*
     * Метод повертає кількість коштів
     * певного типу транзакції з усієї історії транзакцій
     */

    getTransactionTotal(type) {
        let result = 0;
        for (const obj of this.transactions) {
          const { currentAmount,currentType } = obj;
          if (type === currentType) {
            result += currentAmount;
          }
        }
        return result;
      },
    };
  
account.deposit(648);
account.deposit(24);
account.withdraw(1000);
account.withdraw('abcd');
account.withdraw(24);
account.withdraw(256);

console.log(account.transactions);
console.log(account.getBalance());
console.log(account.getTransactionDetails(3));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));