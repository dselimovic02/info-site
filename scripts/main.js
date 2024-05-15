

// Dynamic Navbar
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () =>{
    window.scrollY > 0 ? 
        navbar.classList.add('shadow') :
        navbar.classList.remove('shadow');
});

const burgerIcon = document.getElementById('burgerIcon');
const menu = navbar.querySelector('.burger-menu');

burgerIcon.addEventListener('click', ()=>{
    menu.style.display == 'none' ? 
        menu.style.display = 'block' : 
        menu.style.display = 'none'; 
});

// Announcement bar
const announcement = document.querySelector('.announcement');

const close = announcement.querySelector('#closeAnnouncement');

close.addEventListener('click', () =>{
    announcement.remove();
});

// Animations

function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

//Arrows

function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle scroll event
  function onScrollArrows() {
    let element = document.getElementById('animContainer_1');
    let arrowUp = element.querySelector('.half .arrow-up');
    let arrowDown = element.querySelector('.half .arrow-down');
    let labelsLeft = element.querySelectorAll('.half.left .half-texts .arrow-side');
    labelsLeft = Array.from(labelsLeft);
    labelsLeft.reverse();
    
    let labelsRight = element.querySelectorAll('.half.right .half-texts .arrow-side');

    if (isElementInViewport(element)) {
        arrowUp.classList.add('animate-up');
        labelsLeft.forEach((label, index) =>{
            setTimeout(() => {
                label.classList.add('animate-arrow-side');
            }, 120 * index);
        });
        setTimeout(() => {
            
            arrowDown.classList.add('animate-down');
            labelsRight.forEach((label, index) =>{
                setTimeout(() => {
                    label.classList.add('animate-arrow-side');
                }, 120 * index);
            });
        }, 780);

         // Make element visible
        // You can add additional animations or classes here
        window.removeEventListener('scroll', onScrollArrows); // Remove listener after animation triggers once
    }
  }
  
  // Add scroll event listener
  window.addEventListener('scroll', onScrollArrows);
  
  // Trigger initial check in case element is already in view
  onScrollArrows();

  // Money 

  const moneyAnimTarget = document.getElementById('moneyAnimTarget');
  const moneyContainer = document.querySelector(".money-container");
  const moneyArrow = document.querySelector(".money");
  const spanMoney = document.getElementById('money');
  const profits = [
    document.getElementById('profit_1'),
    document.getElementById('profit_2'),
    document.getElementById('profit_3'),
    document.getElementById('profit_4'),
    document.getElementById('profit_5'),
    document.getElementById('profit_6'),
    document.getElementById('profit_7'),
    document.getElementById('profit_8')
  ];
  const profit_values = [3589, 5720, 4786, 3700, 5560, 5220, 4125, 3256];
  let spanMoneyValue = 0;

  



  spanMoney.innerText = '0';

   // Function to handle scroll event
   function onScrollMoney() {
    if (isElementInViewport(moneyAnimTarget)) {
        profits.forEach((pointer, index) => {
            setTimeout(()=>{
                pointer.textContent = "+ $" + numberWithCommas(profit_values[index]);
                pointer.style.opacity = 1;
                setTimeout(() => {
                    pointer.classList.add("move-profit");
                }, 400);
                setTimeout(() => {
                    pointer.style.display= "none";
                    moneyContainer.style.color = "#3E9C35";
                    increaseNumber(spanMoneyValue, spanMoneyValue + profit_values[index], spanMoney);
                    spanMoneyValue += profit_values[index]; 
                }, 750);
            }, index * 1000);
        });
        setTimeout(()=>{
            moneyContainer.classList.add("move-bubble");
            moneyArrow.classList.add("move-arrow");
        }, 8500);
        window.removeEventListener('scroll', onScrollMoney); // Remove listener after animation triggers once
    }
  }
  
  // Add scroll event listener
  window.addEventListener('scroll', onScrollMoney);
  
  // Trigger initial check in case element is already in view
  onScrollMoney();

  function increaseNumber(fromValue, toValue, element) {
    // Target value to reach
const targetValue = toValue;

// Time duration in milliseconds
const duration = 100;

// Initial value of the span
let currentValue = fromValue;

// Calculate the increment value per millisecond
const incrementPerMs = (targetValue - currentValue) / duration;

// Function to update the span value
function updateSpan() {
  // Increment the current value by incrementPerMs
  currentValue += incrementPerMs * 10; // Adjusting for setInterval's delay

  // Update the span text
  element.textContent = numberWithCommas(Math.round(currentValue));
  
  // Stop the interval when reaching or exceeding the target value
  if (currentValue >= targetValue) {
    clearInterval(interval);
  }
}

// Update the span value every 10 milliseconds
const interval = setInterval(updateSpan, 50);
}

// Ledger 

    //Dates

    const rows = [
        [document.querySelectorAll(".date-paid-1"), document.querySelectorAll(".date-installed-1"), document.querySelectorAll(".date-sold-1")],
        [document.querySelectorAll(".date-paid-2"), document.querySelectorAll(".date-installed-2"), document.querySelectorAll(".date-sold-2")],
        [document.querySelectorAll(".date-paid-3"), document.querySelectorAll(".date-installed-3"), document.querySelectorAll(".date-sold-3")],
        [document.querySelectorAll(".date-paid-4"), document.querySelectorAll(".date-installed-4"), document.querySelectorAll(".date-sold-4")],
        [document.querySelectorAll(".date-paid-5"), document.querySelectorAll(".date-installed-5"), document.querySelectorAll(".date-sold-5")],
        [document.querySelectorAll(".date-paid-6"), document.querySelectorAll(".date-installed-6"), document.querySelectorAll(".date-sold-6")],
        [document.querySelectorAll(".date-paid-7"), document.querySelectorAll(".date-installed-7"), document.querySelectorAll(".date-sold-7")]
    ]

    rows.forEach( (row,i) => {
        let datePaid = calculateDate(i * 3);
        console.log(datePaid);
        let dateInstalled = calculateDate(-34, datePaid);
        let dateSold = calculateDate(-93, datePaid);

        row[0].forEach( date => {
            date.textContent = formatDate(datePaid);
        });
        row[1].forEach( date => {
            date.textContent = formatDate(dateInstalled);
        });
        row[2].forEach( date => {
            date.textContent = formatDate(dateSold);
        });
    });


    function calculateDate(days, startDate = new Date()) {
        let date = new Date(startDate);

        date.setDate(date.getDate() + days);

        return date;
    }

    function formatDate(date) {
        const month = date.getMonth() + 1; 
        const day = date.getDate();
        const year = date.getFullYear() % 100;

        return `${month}/${day}/${year}`;
    }

  // Function to handle scroll event
  function onScrollLedger() {
    let element = document.getElementById('ledger');
    let header = element.querySelector('.header');
    let data = element.querySelectorAll('.data');
    let data_1 = data[0].querySelectorAll('.row');

    if (isElementInViewport(element)) {
        header.style.opacity = 1;
        setTimeout(() => {
            data_1.forEach((row, index) => {
                setTimeout(() =>{
                    row.style.opacity = 1;
                }, 300 * index);
            });
        }, 1000);
        setTimeout(() =>{
            data.forEach(data => {
                data.classList.add('slide');
            });
        }, 3550);

         // Make element visible
        // You can add additional animations or classes here
        window.removeEventListener('scroll', onScrollLedger); // Remove listener after animation triggers once
    }
  }
  
  // Add scroll event listener
  window.addEventListener('scroll', onScrollLedger);
  
  // Trigger initial check in case element is already in view
  onScrollLedger();


// Calculator

const calculator = document.querySelector('.calculator-1');
const calcProfit = document.getElementById('calcProfit');
const calculatorInput = document.getElementById('calculatorInput');
const calculatorOutput = document.getElementById('calculatorOutput');
const reportBtn = document.getElementById('reportBtn');
const calculatorTitle = document.getElementById('calculatorTitle');
const avgSalesPerMonth = document.getElementById('avgSalesPerMonth');
const avgCancellationRate = document.getElementById('avgCancellationRate');
const avgJobLen = document.getElementById('avgJobLen');
const avgCommisionPerSale = document.getElementById('avgCommisionPerSale');

reportBtn.addEventListener("click", startReportAction);

calcProfit.addEventListener('click', () => {
    if (inputsAreValid()) {
        calculatorOutput.style.display = 'block';
        calcProfit.style.display = 'none';

        const calculatorNote = document.createElement('div');
        calculatorNote.innerHTML = `
            <p class = "calculator-note">Change input values to get different results.</p>
        `;
        calculatorInput.appendChild(calculatorNote);
        [avgSalesPerMonth, avgCancellationRate, avgJobLen, avgCommisionPerSale].forEach(input =>{

            input.addEventListener("keyup", () => {
                if (!isNaN(input.value) && input.value != '') {
                    input.classList.remove('invalid-input');
                    displayResults();
                }else{
                    input.classList.add('invalid-input');
                }
            });
        });
        displayResults();
    }else{
        [avgSalesPerMonth, avgCancellationRate, avgJobLen, avgCommisionPerSale].forEach(input =>{
            !isNaN(input.value) && input.value != '' ? input.classList.remove('invalid-input') : input.classList.add('invalid-input');
        });
    }
});


const cancellationsSavedPerMonth = document.getElementById("cancellationsSavedPerMonth");
const additionalSalesPerMonth = document.getElementById("additionalSalesPerMonth");
const netSalesGainedPerMonth = document.getElementById("netSalesGainedPerMonth");
const netIncomeGainPerMonth = document.getElementById("netIncomeGainPerMonth");

const cancellationsSavedPerYear = document.getElementById("cancellationsSavedPerYear");
const additionalSalesPerYear = document.getElementById("additionalSalesPerYear");
const netSalesGainedPerYear = document.getElementById("netSalesGainedPerYear");
const netIncomeGainPerYear = document.getElementById("netIncomeGainPerYear");

function displayResults() {
    let avgSalesPerMonthValue = parseFloat(avgSalesPerMonth.value);
    let avgCancellationRateValue = parseFloat(avgCancellationRate.value / 100);
    let avgJobLenValue = parseFloat(avgJobLen.value);
    let avgCommisionPerSaleValue = parseFloat( avgCommisionPerSale.value);

    let cancellationsSavedPerMonthValue = ((avgSalesPerMonthValue * avgCancellationRateValue) * 0.25);
    let additionalSalesPerMonthValue = (avgSalesPerMonthValue * 0.2);
    let netSalesGainedPerMonthValue = (cancellationsSavedPerMonthValue + additionalSalesPerMonthValue);
    let netIncomeGainPerMonthValue = (netSalesGainedPerMonthValue * avgCommisionPerSaleValue);

    cancellationsSavedPerMonth.innerText = numberWithCommas(Math.round(cancellationsSavedPerMonthValue));
    additionalSalesPerMonth.innerText = numberWithCommas(Math.round(additionalSalesPerMonthValue));
    netSalesGainedPerMonth.innerText = numberWithCommas(Math.round(netSalesGainedPerMonthValue));
    netIncomeGainPerMonth.innerText = numberWithCommas(netIncomeGainPerMonthValue.toFixed(2));

    cancellationsSavedPerYear.innerText = numberWithCommas(Math.round(cancellationsSavedPerMonthValue * 12));
    additionalSalesPerYear.innerText = numberWithCommas(Math.round(additionalSalesPerMonthValue * 12));
    netSalesGainedPerYear.innerText = numberWithCommas(Math.round(netSalesGainedPerMonthValue * 12));
    netIncomeGainPerYear.innerText = numberWithCommas((netIncomeGainPerMonthValue * 12).toFixed(2));
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function inputsAreValid() {
    return [avgSalesPerMonth, avgCancellationRate, avgJobLen, avgCommisionPerSale].every(input => !isNaN(input.value) && input.value != '');     
}

function startReportAction() {
    document.body.style.overflow = 'hidden';
    let formPlaceholder = document.getElementById('formPlaceholder');

    formPlaceholder.innerHTML = `
    <div class="form-background">
        <div class="form">
            <i class="fa-solid fa-xmark" id="closeForm"></i>
            <img src="./images/jobengine-logo.png" alt="LOGO" width="250px" style="margin-bottom: 20px;">
            <form action="./scripts/report.php" method="post" id="reportForm">
                <p>Please drop us your contact info below so we can send you a detailed report.</p>
                <div class="hidden-data">
                    <input type="text" name="sales_per_month" id="spm"> 
                    <input type="text" name="cancellation_rate" id="cr"> 
                    <input type="text" name="average_job_length" id="jl"> 
                    <input type="text" name="commission_per_sale" id="cps"> 
                </div>
                <div class="input-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="name" required><br><br>
                </div>
            
                <div class="input-group">
                    <label for="email">E-Mail</label>
                    <input type="email" id="email" name="email" placeholder="email" required><br><br>
                </div>
            
                <input type="submit" value="Submit" id="gains-report">
            </form>
        </div>
    </div>
    `;
    
    let closeFormBtn = document.getElementById("closeForm");
    closeFormBtn.addEventListener('click', () => {
        formPlaceholder.innerHTML = ``;
        document.body.style.overflow = 'auto';
    });
    
    let form = document.getElementById("reportForm");
    let formCard = document.querySelector(".form-background .form");
    let thankYouNote = document.createElement("p");
    thankYouNote.innerHTML = "Thank you for your submition. <br>You will get your detailed report soon in your E-Mail.";

    form.addEventListener("submit", function(event) {
        form.remove();
        formCard.appendChild(thankYouNote);
        setTimeout(()=>{
            formPlaceholder.innerHTML = ``;
            document.body.style.overflow = 'auto';
        }, 5000);
    });
}

