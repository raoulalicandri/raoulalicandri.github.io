// Funzioni per aprire e chiudere i modali
function openCalendar(roomId) {
    document.getElementById('calendarModal').style.display = 'flex';
}

function openForm() {
    closeModal();
    document.getElementById('formModal').style.display = 'flex';
}

function openPayment() {
    closeModal();
    document.getElementById('paymentModal').style.display = 'flex';
}

function closeModal() {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        modals[i].style.display = 'none';
    }
}
