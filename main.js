function Wallet() {
this.amount = 0;
}

Wallet.prototype.deposit = function(n) {
  this.amount = this.amount + n
  console.log(`Uspesno ste dodali ${n}: Trenutno stanje:  ${this.amount}`);
}


Wallet.prototype.withdraw  = function(n) {
  if (this.amount - n < 0) {
    console.error(`Neuspesna transakcija: Trenutno stanje: ${this.amount}`);
  } else {
    this.amount = this.amount - n
    console.log(`Uspesno ste skinuli ${n}: Trenutno stanje: ${this.amount}`);
  }
  
}

let wallet = new Wallet()
let firstAmount = 200
let secondAmount = 100


wallet.deposit(firstAmount)

wallet.withdraw(secondAmount) 






String.prototype.duplify = function(n){
  for(let i = 0; i < n; i++) {

  }
}