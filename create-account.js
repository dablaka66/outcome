function createAccount(pin, amount = 0) {
  return {
    checkPin(pinInput) {
      if (pin === pinInput) {
        console.log("Pin ok");
        return true;
      } else {
        console.log("Pin no valid");
        return false;
      }
    },
    checkBalance(pin) {
      if (checkPin(pin)) {
        return amount;
      } else {
        console.log("Pin invalid");
      }
    },
    Deposite(newDeposite) {
      this.amount = this.amount + newDeposite;
      return amount;
    },
    withdraw(pinInput, lessAmount) {
      if (checkPin(pinInput) & (amount > lessAmount)) {
        amount = amount - lessAmount;
        return amount;
      } else {
        console.log("Transstion declined");
      }
    },
    changePin(pinInput, newPin) {
      if (this.checkPin(punInput)) {
        pin = newPin;
        condole.log("pin changed succesfully");
      } else {
        console.log("Pin Incorrect");
      }
    },
  };
}
module.exports = { createAccount };
