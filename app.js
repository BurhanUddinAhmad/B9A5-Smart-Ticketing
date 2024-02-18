let count = 40;
const allSeats = document.getElementsByClassName('seat');

for (const seat of allSeats) {
    seat.addEventListener('click', function(e) {
        count--;

        const seatName = e.target.innerText;
        const selectedContainer = document.getElementById('seat-container-row');

        const td = document.createElement('td');
        const p = document.createElement('p');
        p.innerText = seatName;
        

        e.target.style.backgroundColor = 'green';
        e.target.style.color = 'white';
        e.target.setAttribute("disabled", true);
        setInnerText('seats-left', count);
    });
   
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}