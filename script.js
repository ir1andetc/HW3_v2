function checkYear() {
    let yearInput = document.getElementById("yearInput").value.trim();
    let resultDiv = document.getElementById("result");

    // Перевірка, чи введений рядок не складається лише з пробілів
    if (yearInput === "") {
        resultDiv.textContent = "Введено неправильне значення для року.";
    } else {
        let year = parseInt(yearInput);

        // Перевірка, чи введено число та чи воно не від'ємне
        if (!isNaN(year) && year >= 0) {
            if (year % 10 === 1 && year % 100 !== 11) {
                resultDiv.textContent = year + " рік";
            } else if (year % 10 >= 2 && year % 10 <= 4 && (year % 100 < 10 || year % 100 >= 20)) {
                resultDiv.textContent = year + " роки";
            } else {
                resultDiv.textContent = year + " років";
            }
        } else {
            resultDiv.textContent = "Введено неправильне значення для року.";
        }
    }
}
