let count = 40;
let countUp = 0;
const allSeats = document.getElementsByClassName('seat');

for (const seat of allSeats) {
    seat.addEventListener('click', function(e) {
        count--;
        countUp++;

        const seatName = e.target.innerText;
        const selectedContainer = document.getElementById('seat-container-row');

        const tr = document.createElement('tr');
        
        const td1 = document.createElement('td');
        td1.innerText = seatName;
        tr.appendChild(td1);

        const td2 = document.createElement('td');
        td2.innerText = 'Economy';
        tr.appendChild(td2);

        const td3 = document.createElement('td');
        td3.innerText = 550;
        tr.appendChild(td3);

        selectedContainer.appendChild(tr);


        e.target.style.backgroundColor = 'green';
        e.target.style.color = 'white';
        e.target.setAttribute("disabled", true);
        setInnerText('seats-left', count);
        setInnerText('total-seat', countUp);
    });
   
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}