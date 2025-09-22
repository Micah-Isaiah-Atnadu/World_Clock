function updateClock() {
  const now = new Date();

  //Get time components
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  // Format time as HH:MM:SS
  const timeString = `${hours}:${minutes}:${seconds}`;

  //Update date
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const dateString = now.toLocaleDateString('en-US', options);

  // Update the DOM
  document.getElementById('clock').textContent = timeString;
  document.getElementById('date').textContent = dateString;
}

 //Initial update
  updateClock();

  // Update every second
  setInterval(updateClock, 1000);