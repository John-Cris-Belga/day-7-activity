document
  .getElementById("loanForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const monthlyInterestRate = parseFloat(
      document.getElementById("interestRate").value
    ); // already monthly
    const loanTermMonths = parseFloat(
      document.getElementById("loanTerm").value
    );

    // Monthly payment calculation
    const monthlyPayment =
      (loanAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, loanTermMonths)) /
      (Math.pow(1 + monthlyInterestRate, loanTermMonths) - 1);

    document.getElementById(
      "result"
    ).textContent = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
  });
