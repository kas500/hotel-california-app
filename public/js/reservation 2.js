const reservationFormHandler = async (event) => {
  event.preventDefault();


  const totalGuests = document.querySelector('#questQty').value.trim();
  const checkInDate = document.querySelector('#dateFrom').value.trim();
  const checkOutDate = document.querySelector('#dateTo').value.trim();
  const roomNumber = document.querySelector('input[name="blankRadio"]:checked').value;

  if (totalGuests && checkInDate && checkOutDate && roomNumber) {

    const response = await fetch('/api/reservation', {
      method: 'POST',
      body: JSON.stringify({ guest_id: totalGuests, checkIn_date: checkInDate, checkOut_date: checkOutDate, rooms_id: roomNumber }),
      headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.ok) {
      alert('Reservation created successfully');
      document.location.replace('/fun');
    } else {
      console.log(response);
      alert('Failed to create reservation.')
    }
  }
};

document.querySelector('.reservation-form').addEventListener('submit', reservationFormHandler);