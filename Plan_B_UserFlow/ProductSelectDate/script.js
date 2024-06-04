document.addEventListener("DOMContentLoaded", function () {
  flatpickr.localize(flatpickr.l10ns.en);

  const confirmButton = document.querySelector('.confirm-button');
  confirmButton.disabled = true; // Disable the button initially
  confirmButton.classList.add('disabled');

  let checkinDateSelected = false;
  let checkoutDateSelected = false;

  function updateConfirmButtonState() {
      if (checkinDateSelected && checkoutDateSelected) {
          confirmButton.disabled = false;
          confirmButton.classList.remove('disabled');
      } else {
          confirmButton.disabled = true;
          confirmButton.classList.add('disabled');
      }
  }

  function showDatePicker(type) {
      const options = {
          dateFormat: "d F Y",
          onChange: function (selectedDates, dateStr, instance) {
              if (type === 'checkin') {
                  document.getElementById('agenda-checkin').textContent = dateStr;
                  checkinDateSelected = true;
              } else if (type === 'checkout') {
                  document.getElementById('agenda-checkout').textContent = dateStr;
                  checkoutDateSelected = true;
              }
              updateConfirmButtonState();
          }
      };

      if (type === 'checkin') {
          flatpickr("#agenda-checkin", options).open();
      } else if (type === 'checkout') {
          flatpickr("#agenda-checkout", options).open();
      }
  }

  document.querySelector('.return-button').addEventListener('click', function() {
      window.location.href = '../ProductSelectPage/index.html';
  });

  document.querySelector('.confirm-button').addEventListener('click', function() {
      window.location.href = '../PAllDone/index.html';
  });

  window.showDatePicker = showDatePicker;
});
