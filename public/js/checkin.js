const reservationId = document.querySelector('input[name="reservation-id"]').value;

const checkinHandler = async (event) => {
    event.preventDefault();

    const room_id = document.querySelector('input[name="room-number"]').value;

    const response = await fetch(`/api/reservation/${reservationId}`, {
        method: 'PUT',
        body: JSON.stringify({
            room_id,
            checked_In: true
        }),
        headers: { 'Content-Type': 'application/json'}
    });

    if (response.ok) {
        alert('Check-In Successful! Enjoy Your Stay!');
        document.location.replace('/fun');
      } else {
        console.log(response);
        alert('Sorry! Check-In Unsuccessful!')
      }
}

document
    .querySelector('#checkin-form')
    .addEventListener('submit', checkinHandler);