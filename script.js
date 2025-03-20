document.addEventListener("DOMContentLoaded", function () {
    const userInput = document.getElementById("user-input");
    const checkBtn = document.getElementById("check-btn");
    const clearBtn = document.getElementById("clear-btn");
    const resultsDiv = document.getElementById("results-div");

    checkBtn.addEventListener("click", function () {
        const phoneNumber = userInput.value.trim();
        if (!phoneNumber) {
            alert("Please provide a phone number");
            return;
        }

        const isValid = validateUSPhoneNumber(phoneNumber);
        const resultText = isValid
            ? `✅ Valid US number: ${phoneNumber}`
            : `❌ Invalid US number: ${phoneNumber}`;

        // Create a new paragraph to store the result
        const resultPara = document.createElement("p");
        resultPara.textContent = resultText;
        resultPara.classList.add("result-item");

        // Apply color based on validity.
        resultPara.style.color = isValid ? "green" : "red";

        // Append the new result after the previous result.
        resultsDiv.appendChild(resultPara);

        // Clear input after checking
        userInput.value = "";
    });

    clearBtn.addEventListener("click", function () {
        resultsDiv.innerHTML = ""; // Remove all results
    });

    function validateUSPhoneNumber(number) {
        const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
        return regex.test(number);
    }
});
