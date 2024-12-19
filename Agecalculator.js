let currentYear = new Date().getFullYear();
        let currentDate = new Date().getDate();
        let currentMonth = new Date().getMonth() + 1;

        let day = 0;

        function monthDayCounter(month) {
            switch(month){
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    day = 31;
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    day = 30;
                    break;
                case 2:
                    day = leapYearChecker(currentYear) ? 29 : 28;
                    break;
                default:
                    day = 30;
            }
        }

        function leapYearChecker(year) {
            if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
                return true;
            } else {
                return false;
            }
        }

        function AgeCalculator(birthDate, birthMonth, birthYear)  {
            let birthDays = 0;
            let birthMonthDiff = 0;
            let birthYearDiff = currentYear - birthYear;

            if (currentDate >= birthDate) {
                birthDays = currentDate - birthDate;
            } else {
                currentMonth--;
                monthDayCounter(currentMonth);
                birthDays = day - (birthDate - currentDate);
            }

            if (currentMonth >= birthMonth) {
                birthMonthDiff = currentMonth - birthMonth;
            } else {
                currentYear--;
                birthMonthDiff = 12 + currentMonth - birthMonth;
            }

            return `You are ${birthDays} Days, ${birthMonthDiff} Months, and ${birthYearDiff} Years old.`;
        }

        let Submit = document.getElementById("submit");

        Submit.addEventListener("click", function() {
            const BirthYear = parseFloat(document.getElementById("year").value);
            const BirthDate = parseFloat(document.getElementById("day").value);
            const BirthMonth = parseFloat(document.getElementById("month").value);

            let age = AgeCalculator(BirthDate, BirthMonth, BirthYear);

            document.getElementById("view").textContent = age;
        });
    