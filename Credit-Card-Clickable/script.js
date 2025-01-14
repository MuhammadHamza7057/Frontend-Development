document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.querySelector(".container");
    const cardNumber = document.querySelector(".number");
    const cardName = document.querySelector(".name");
    const validity = document.querySelector(".validity h5");
    const cardType = document.querySelector(".logo-box h5");
  
    // 1. Flip Card to Show CVV
    let flipped = false;
    cardContainer.addEventListener("click", () => {
      cardContainer.style.transform = flipped ? "rotateY(0deg)" : "rotateY(180deg)";
      flipped = !flipped;
    });
  
    // 2. Luhn Algorithm for Card Validation
    const luhnCheck = (num) => {
      let arr = (num + "")
        .split("")
        .reverse()
        .map((x) => parseInt(x));
      let lastDigit = arr.shift();
      let sum = arr.reduce(
        (acc, val, i) =>
          i % 2 === 0
            ? acc + ((val *= 2) > 9 ? val - 9 : val)
            : acc + val,
        0
      );
      return (sum + lastDigit) % 10 === 0;
    };
  
    // 3. Real-time Updates with Dummy Input
    const demoCardInput = {
      number: "3488 7574 9834 8935",
      name: "Prince Vishal",
      validity: "05/29",
    };
  
    // Update card dynamically
    cardNumber.textContent = demoCardInput.number;
    cardName.textContent = demoCardInput.name;
    validity.textContent = demoCardInput.validity;
  
    // 4. Gradient Background Change Based on Card Type
    const updateCardType = (number) => {
      if (number.startsWith("4")) {
        cardType.textContent = "Visa";
        cardContainer.style.background =
          "linear-gradient(135deg, #3b82f6, #60a5fa)";
      } else if (number.startsWith("5")) {
        cardType.textContent = "Mastercard";
        cardContainer.style.background =
          "linear-gradient(135deg, #f97316, #fb923c)";
      } else {
        cardType.textContent = "Other";
        cardContainer.style.background =
          "linear-gradient(135deg, #7e22ce, #9d4edd)";
      }
    };
  
    updateCardType(demoCardInput.number); // Initial check
  
    // Check Luhn validity for initial number
    if (!luhnCheck(demoCardInput.number.replace(/\s+/g, ""))) {
      cardNumber.style.color = "red";
    }
  });
  
  