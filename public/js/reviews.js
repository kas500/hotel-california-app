const reviewsFormHandler = async (event) => {
    event.preventDefault();

    const reviews = document.querySelector('#reviews').value.trim();
   


    if (reviews) {


        const response = await fetch('/api/reviews', {
            method: 'POST',
            body: JSON.stringify({ comment: reviews}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/reviews');
        } else {
            console.log(response);
            alert('Failed to create review.')
        }
    }
};

document.querySelector('#reviews-form').addEventListener('submit', reviewsFormHandler);