let countDown = 40;
let countUp = 0;
const allSeats = document.getElementsByClassName('seat');

for (const seat of allSeats) {
    seat.addEventListener('click', function(e) {
        countDown--;
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

        // Total price calculation
        


        e.target.style.backgroundColor = 'green';
        e.target.style.color = 'white';
        e.target.setAttribute("disabled", true);
        setInnerText('seats-left', countDown);
        setInnerText('total-seat', countUp);
        totalCost('total-price', 550);
    });
   
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

function totalCost(id, value) {
    const totalCost = document.getElementById(id).innerText;
    const toInteger = parseInt(totalCost);
    const sum = toInteger + value;
    setInnerText(id, sum);
}