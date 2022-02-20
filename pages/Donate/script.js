const monthly = document.querySelectorAll(
  ".donation-period-radiobuttons__item"
)[0];
const once = document.querySelectorAll(
  ".donation-period-radiobuttons__item"
)[1];

const donationAmountRadio1 = document.querySelectorAll(
  ".donation-bar-radiobuttons__item"
)[0];
const donationAmountRadio2 = document.querySelectorAll(
  ".donation-bar-radiobuttons__item"
)[1];
const donationAmountRadio3 = document.querySelectorAll(
  ".donation-bar-radiobuttons__item"
)[2];
const donationAmountRadio4 = document.querySelectorAll(
  ".donation-bar-radiobuttons__item"
)[3];
const donationAmountRadio5 = document.querySelectorAll(
  ".donation-bar-radiobuttons__item"
)[4];
const donationAmountRadio6 = document.querySelectorAll(
  ".donation-bar-radiobuttons__item"
)[5];
const donationAmountRadio7 = document.querySelectorAll(
  ".donation-bar-radiobuttons__item"
)[6];
const donationAmountRadio8 = document.querySelectorAll(
  ".donation-bar-radiobuttons__item"
)[7];

let previous = donationAmountRadio3;
let donationAmountField = document.querySelector(".amount-input");

document.querySelector(".donation-bar").onclick = (event) => {
  if (event.target.className == "donation-bar-radiobuttons__item") {
    event.target.classList.add("donation-bar-radiobuttons__item__active");
    previous.classList.remove("donation-bar-radiobuttons__item__active");
    event.target.childNodes[3].childNodes[1].classList.add("active-label");
    event.target.childNodes[3].childNodes[3].classList.add("active-label");
    previous.childNodes[3].childNodes[1].classList.remove("active-label");
    previous.childNodes[3].childNodes[3].classList.remove("active-label");
    donationAmountField.value =
      event.target.childNodes[3].childNodes[3].innerHTML;
    previous = event.target;
  }
};
