const reservationId = document.querySelector('input[name="reservation-id"]').value;

const checkoutHandler = async (event) => {
    event.preventDefault();

    const rooms_id = document.querySelector('input[name="room-number"]').value;

    const response = await fetch(`/api/reservation/${reservationId}`, {
        method: 'PUT',
        body: JSON.stringify({
            rooms_id,
            checked_In: false
        }),
        headers: { 'Content-Type': 'application/json'}
    });

    if (response.ok) {
        alert('Checkout Successful!');
        document.location.replace('/fun');
      } else {
        console.log(response);
        alert('Sorry! Check-Out Unsuccessful! We told you, you can never leave!')
      }
}

document
    .querySelector('#checkout-form')
    .addEventListener('submit', checkoutHandler);