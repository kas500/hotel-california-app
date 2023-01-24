const deleteButtons = document.querySelectorAll("#deleteReservation");
     for (let i = 0; i < deleteButtons.length; i++) {
       deleteButtons[i].addEventListener('click', async function (e) {
        e.preventDefault()
       const reservId = e.currentTarget.getAttribute("resId");
         const response = await fetch('/api/reservation/delete', {
           method: 'DELETE',
           body: JSON.stringify({
            id: reservId}),
           headers: { 'Content-Type': 'application/json' },
         });
         if (response.ok) {
          document.location.replace('/admin');
          location.reload();
         } else {
          document.location.replace('/admin');
         }
     });
    }