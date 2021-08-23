window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    //timer
    function countTimer() {
        let toDay = new Date(),
            days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
            goodTime = document.querySelector('#goodTime'),
            dayText = document.querySelector('#day'),
            time = document.querySelector('#time'),
            newYear = document.querySelector('#newYear');

        function upDateClock() {
            let hours = toDay.getHours();
            let munite = toDay.getMinutes();
            let second = toDay.getSeconds();

            if (toDay.getHours() < 10) {
                hours = '0' + toDay.getHours();
            }
            if (toDay.getMinutes() < 10) {
                munite = '0' + toDay.getMinutes();
            }
            if (toDay.getSeconds() < 10) {
                second = '0' + toDay.getSeconds();
            }

            if ((toDay.getHours() >= 0 && toDay.getHours() < 6)) {
                goodTime.textContent = 'Доброй ночи!';
            }
            if (toDay.getHours() >= 6 && toDay.getHours() < 12) {
                goodTime.textContent = 'Доброе утро!';
            }
            if (toDay.getHours() >= 12 && toDay.getHours() < 18) {
                goodTime.textContent = 'Добрый день!';
            }
            if (toDay.getHours() >= 18 && toDay.getHours() < 24) {
                goodTime.textContent = 'Добрый вечер!';
            }

            dayText.textContent = `Сегодня: ${days[toDay.getDay()]}`;
            time.textContent = `Текущее время: ${hours}:${munite}:${second} PM`;

        }

        upDateClock();
        window.setInterval(countTimer, 1000);

    }
    function getTimerRemaining(deadline) {
        let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timerRemaining = (dateStop - dateNow) / 1000,
            day = Math.floor(timerRemaining / 60 / 60 / 24);
        return { day };
    }

    let timer = getTimerRemaining('01 January 2022');
    newYear.textContent = `До нового года осталось ${timer.day} дней`;
    countTimer();
});