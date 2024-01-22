// JavaScript to display date and day in Swedish
const dateContainer = document.getElementById('date');
const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString('sv-SE', options);
dateContainer.textContent = formattedDate;