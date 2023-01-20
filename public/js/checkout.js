const reservationId = document.querySelector('input[name="reservation-id:]').value;

const checkoutHandler = async (event) => {
    event.preventDefault();

    const room_id = document.querySelector('input[name="room-number"]').value;

    await fetch(`/api/reservation/${reservationId}`, {
        method: 'PUT',
        body: JSON.stringify({
            room_id,
            checked_In: false
        }),
        headers: { 'Content-Type': 'application/json'}
    });

    if (response.ok) {
        alert('Check-Out Successful!');
        document.location.replace('/fun');
      } else {
        console.log(response);
        alert('Sorry! Check-Out Unsuccessful! We told you, you can never leave!')
      }
}

document
    .querySelector('#checkout-form')
    .addEventListener('submit', checkoutHandler);