class BankAccount {
    #balance: number;

   constructor() {
     this.#balance = 0;
   }
 
   withdraw(amount: number): number {
     if (amount > this.#balance) {
       return -1; // Not enough balance to withdraw
     }
     this.#balance -= amount;
     return this.#balance;
   }
 
   deposit(amount: number): number {
     if (amount > 1_000_000) {
       return -1; // Deposit amount exceeds the limit
     }
     this.#balance += amount;
     return this.#balance;
   }
}

export default BankAccount;
