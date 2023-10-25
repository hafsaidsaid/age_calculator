//Get HTML Elements
const dateInput = document.querySelector("input[type='date']");
console.log(dateInput);

const calcBtn = document.querySelector(".calcBtn");
console.log(calcBtn);

const ageCon = document.querySelector(".ageCon");
console.log(ageCon);

//Click on calcBtn
calcBtn.addEventListener("click", calcAge);

//calculateAge Function
function calcAge() {
    let inputVal = document.querySelector("input[type='date']").value;
    let d = new Date(inputVal);
    let dateNow = new Date();
    let yrs = dateNow.getFullYear() - d.getFullYear();
    let mnths = 0;
    let dys = 0;
    if (dateNow.getMonth() + 1 < d.getMonth() + 1) {
        yrs--;
        mnths = (dateNow.getMonth() + 1 + 12) -  (d.getMonth() + 1);
    } else {
        mnths =  (dateNow.getMonth() + 1) -  (d.getMonth() + 1);
    }

    if (dateNow.getDate() < d.getDate()) {
        mnths--;
        dys =  (dateNow.getDate() + 30) -  (d.getDate());
    } else {
        dys =  (dateNow.getDate())  -  d.getDate()  ;
    }

    ageCon.innerHTML = `
    You are ${yrs > 1 ? `<span>${yrs} </span> years` : `<span>${yrs} </span> year`},
    ${mnths > 1 ? `<span>${mnths} </span> months` : `<span>${mnths} </span> month`} And
    ${dys > 1 ? `<span>${dys} </span> days old` : `<span>${dys} </span> day old`}
    `
}