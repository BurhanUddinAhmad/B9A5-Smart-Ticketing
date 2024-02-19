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

        const totalSeat = document.getElementById('total-seat').innerText;
        if(totalSeat >= 3) {
            for ( const seat of allSeats) {
                seat.setAttribute('disabled', true);
            }
            alert("Thanks, you have selected 4 seats. You cannot book another seats!");
        }

        e.target.style.backgroundColor = 'green';
        e.target.style.color = 'white';
        e.target.setAttribute("disabled", true);
        setInnerText('seats-left', countDown);
        setInnerText('total-seat', countUp);
        totalCost('total-price', 550);
    });
}

const cuoponInput = document.getElementById('cuopon-input');
const cuoponBtn = document.getElementById('cuopon-btn');

cuoponInput.addEventListener('keyup', function(){
    if(cuoponInput.value.length >= 2) {
        cuoponBtn.disabled = false;
    } 
});

cuoponBtn.addEventListener('click', function(){
    const cuoponElement = document.getElementById('cuopon-input').value;
    const cuoponCode = cuoponElement.split(" ").join("").toUpperCase();
    const totalCost = document.getElementById('total-price').innerText;
    const totalToInteger = parseInt(totalCost);
          
    if(totalToInteger >= 2200) {
        if(cuoponCode === "NEW15") {
         // 15% discount
         setInnerText('grand-total', totalToInteger * 0.85);
         document.getElementById('cuopon-code').classList.add('hidden');
        } else if(cuoponCode === "COUPLE20") {
         // 20% discount
         setInnerText('grand-total', totalToInteger * 0.80);
         document.getElementById('cuopon-code').classList.add('hidden');
        } 
    } else {
        alert("please select at least 4 seats to get discounts!");
    }
});

const nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', function(e){
    const passengerName = document.getElementById('passenger-name');
    const passengerNumber = document.getElementById('phone-number');
    if (passengerName.value === '' || passengerNumber.value == '') {
        alert("Please enter your name & phone number!");
    } else {
        e.target.setAttribute("href", "#my_modal_8");
    }
});

function totalCost(id, value) {
    const totalCost = document.getElementById(id).innerText;
    const toInteger = parseInt(totalCost);
    const sum = toInteger + value;
    setInnerText(id, sum);
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
