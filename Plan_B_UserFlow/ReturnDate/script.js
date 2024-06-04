document.addEventListener("DOMContentLoaded", function () {
  flatpickr.localize(flatpickr.l10ns.en);

  const confirmButton = document.querySelector('.confirm-button');
  confirmButton.disabled = true; // Disable the button initially
  confirmButton.classList.add('disabled');

  let checkinDateSelected = false;

  function updateConfirmButtonState() {
      if (checkinDateSelected) {
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
              document.getElementById('agenda-checkin').textContent = dateStr;
              checkinDateSelected = true;
              updateConfirmButtonState();
          }
      };

      if (type === 'checkin') {
          flatpickr("#agenda-checkin", options).open();
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
