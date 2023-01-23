//logout handler
const logoutFormHandler = async (event) => {
  event.preventDefault();

    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      alert('Successfully logged out guest!')
      document.location.replace('/');
    } else {
      alert('Failed to log out.');
    }
  };
  
  document
  .querySelector('#logout')
  .addEventListener('click', logoutFormHandler);