// Функція, яка перевіряє, чи не є вхідне значення числом
function myIsNaN(value) {
    // Якщо тип вхідного значення не є 'number', він не є числом
    if (typeof value !== 'number') {
        return true;
    }

    // Перевірка на спеціальний випадок - ділення 0 на 0
    if (value !== value) {
        return true;
    }

    // Якщо вхідне значення не дорівнює собі (це NaN), то воно є NaN
    if (value !== value) {
        return true;
    }

    // Всі інші випадки є числами
    return false;
}

// Функція для перевірки року
function checkYear() {
    let yearInput = document.getElementById("yearInput").value.trim();
    let resultDiv = document.getElementById("result");

    // Перевірка, чи введений рядок не складається лише з пробілів
    if (yearInput === "") {
        resultDiv.textContent = "Введено неправильне значення для року.";
    } else {
        let year = parseInt(yearInput);

        // Виведення результату перевірки на NaN в консоль
        // Одним з варіантив перевирки щоб отримати "NaN = true" є текст введений у інпут філд
        console.log("Перевірка року на NaN:", myIsNaN(year));

        // Власна перевірка на isNaN замість використання isNaN
        if (myIsNaN(year) || year < 0) {
            resultDiv.textContent = "Введено неправильне значення для року.";
        } else {
            if (year % 10 === 1 && year % 100 !== 11) {
                resultDiv.textContent = year + " рік";
            } else if (year % 10 >= 2 && year % 10 <= 4 && (year % 100 < 10 || year % 100 >= 20)) {
                resultDiv.textContent = year + " роки";
            } else {
                resultDiv.textContent = year + " років";
            }
        }
    }
}
