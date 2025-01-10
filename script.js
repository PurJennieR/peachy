// Load room options from server
fetch('/api/rooms')
    .then(response => response.json())
    .then(data => {
        const roomSelect = document.getElementById('room');
        data.rooms.forEach(room => {
            const option = document.createElement('option');
            option.value = room.room_number;
            option.textContent = `Room ${room.room_number}`;
            roomSelect.appendChild(option);
        });
    })
    .catch(error => console.error('Error fetching rooms:', error));

// Handle form submission
document.getElementById('bookingForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const room = document.getElementById('room').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;

    fetch('/api/book', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, room, checkin, checkout })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message || 'Booking successful');
        document.getElementById('bookingForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to book room');
    });
});

// Display booking in table
function displayBooking(booking) {
    const bookingsTable = document.getElementById('bookingsTable');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${booking.room}</td>
        <td>${booking.name}</td>
        <td>${booking.checkin}</td>
        <td>${booking.checkout}</td>
    `;
    bookingsTable.appendChild(row);
}
fetch('/api/rooms')
    .then(response => response.json())
    .then(data => {
        const roomSelect = document.getElementById('room');
        data.rooms.forEach(room => {
            const option = document.createElement('option');
            option.value = room.room_number;
            option.textContent = `Room ${room.room_number}`;
            roomSelect.appendChild(option);
        });
    });

