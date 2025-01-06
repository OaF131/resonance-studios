function selectOption(optionName, targetId) {
    const isMobile = window.innerWidth <= 768;


    document.querySelectorAll('.option-card').forEach(card => {
        card.classList.remove('border-danger');
        card.style.transform = 'scale(1)';
        const textMuted = card.querySelector('.custom-muted');
        if (textMuted) {
            textMuted.textContent = isMobile
                ? 'Tap to select this option'
                : 'Click to select this option';
        }
        const icon = card.querySelector('.selection-icon');
        if (icon) icon.style.display = 'none';
    });


    const selectedCard = Array.from(document.querySelectorAll('.option-card'))
        .find(card => card.innerText.includes(optionName));

    if (selectedCard) {
        selectedCard.classList.add('border-danger');
        selectedCard.style.transform = 'scale(1.05)';
        const selectedIcon = selectedCard.querySelector('.selection-icon');
        if (selectedIcon) selectedIcon.style.display = 'block';
        const selectedText = selectedCard.querySelector('.custom-muted');
        if (selectedText) selectedText.textContent = 'Selected!';
    }


    const selectedOption = document.getElementById(targetId);
    if (selectedOption) {
        selectedOption.innerHTML = `Selected: <span class="text-danger">${optionName}</span>`;
    } else {
        console.error(`Element with ID '${targetId}' not found`);
    }
}



document.addEventListener('DOMContentLoaded', function () {
    const isMobile = window.innerWidth <= 768;
    document.querySelectorAll('.custom-muted').forEach(function (element) {
        element.textContent = isMobile
            ? 'Tap to select this option'
            : 'Click to select this option';
    });
});

function scrollToBooking() {
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('booking-form').addEventListener('submit', function (e) {
    const selectedStudio = document.getElementById('selected-option').querySelector('span').textContent;

    if (selectedStudio === 'None') {
        e.preventDefault();
        alert('Please select a studio before proceeding to payment!');
    }
});
flatpickr('#studio-date-1', {
    locale: {
        firstDayOfWeek: 1
    },
    dateFormat: "d-m-Y",
    minDate: "today",
    showMonths: 1 ,
    monthSelectorType: "static",
    yearSelectorType: "static",
    onReady: function(selectedDates, dateStr, instance) {
        const arrowUp = instance.calendarContainer.querySelector('.arrowUp');
        const arrowDown = instance.calendarContainer.querySelector('.arrowDown');
        if (arrowUp) arrowUp.remove();
        if (arrowDown) arrowDown.remove();
    }
});
flatpickr('#studio-date-2', {
    locale: {
        firstDayOfWeek: 1
    },
    dateFormat: "d-m-Y",
    minDate: "today",
    showMonths: 1 ,
    monthSelectorType: "static",
    yearSelectorType: "static",
    onReady: function(selectedDates, dateStr, instance) {
        const arrowUp = instance.calendarContainer.querySelector('.arrowUp');
        const arrowDown = instance.calendarContainer.querySelector('.arrowDown');
        if (arrowUp) arrowUp.remove();
        if (arrowDown) arrowDown.remove();
    }
});
flatpickr('#studio-date-3', {
    locale: {
        firstDayOfWeek: 1
    },
    dateFormat: "d-m-Y",
    minDate: "today",
    showMonths: 1 ,
    monthSelectorType: "static",
    yearSelectorType: "static",
    onReady: function(selectedDates, dateStr, instance) {
        const arrowUp = instance.calendarContainer.querySelector('.arrowUp');
        const arrowDown = instance.calendarContainer.querySelector('.arrowDown');
        if (arrowUp) arrowUp.remove();
        if (arrowDown) arrowDown.remove();
    }
});

function hidePreviousMonthDays(instance) {
    const days = instance.calendarContainer.querySelectorAll('.flatpickr-day.prevMonthDay');
    days.forEach(day => {

        if (day.offsetLeft < instance.daysContainer.offsetLeft) {
            day.style.display = 'none';
        }
    });
}
