let days = document.getElementsByClassName("Day-module__day___WFrPD");
let daysArray = Array.from(days);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function filterDays(element) {
  return (
    element.innerText.includes('Holiday') ||
    element.innerText.includes('Pending') ||
    element.innerText.includes("Approved") ||
    element.innerText.includes('Paid vacation') ||
    element.innerHTML.includes('data-date="Sat') ||
    element.innerHTML.includes('data-date="Sun')
  );
}

async function processDays() {
    let notReported = daysArray.filter((day) => filterDays(day) === false);
    for (const day of notReported) {
        day.getElementsByTagName('button')[0].click();
        let timeForm = document.getElementsByTagName('form')[0];
        let inputs = timeForm.getElementsByTagName('input');
        
        inputs[0].click();
        timeForm.getElementsByTagName('li')[17].click();
    
        inputs[1].click();
        timeForm.getElementsByTagName('li')[17].click();
        
        inputs[2].click();
        timeForm.getElementsByTagName('li')[25].click();
        
        inputs[3].click();
        timeForm.getElementsByTagName('li')[0].click();
        
        let buttons = timeForm.getElementsByTagName('button');
        let confirmButton = Array.from(buttons).filter((button) => button.innerText === 'Confirm & Save')[0];
        confirmButton.click();
        await sleep(1000);
    };
}

processDays();