let totalVal = document.querySelector('#total-input');
let btnParent = document.querySelector('.tips');
let inputBtn = document.querySelectorAll('.btn-Parent input');
let cstmTip = document.querySelector('#custom-tip-input');
let people = document.querySelector('#people');
let billBtn = document.querySelector('.generate-bill');
let rightSide = document.querySelector('.right');
let tipResult = document.querySelector('.tip-result');
let showTotal = document.querySelector('.total-result');
let eachRes = document.querySelector('.each-person');
let resetBtn = document.querySelector('.resetBtn');

const data = inputBtn.forEach((val) => {
    val.setAttribute('disabled', true);
});

billBtn.setAttribute('disabled', true);

totalVal.addEventListener('focusout', () => {
    billBtn.removeAttribute('disabled');
    const inputVal = parseInt(totalVal.value);
    console.log(inputVal);
    inputBtn.forEach((val) => {
        val.removeAttribute('disabled');
    });
    btnParent.addEventListener('click', (e) => {
        let btnRes = parseInt(e.target.value);
        billBtn.addEventListener('click', () => {
            const inputVal = parseInt(totalVal.value);
            const btnResult = btnRes;
            const cstmData = parseInt(cstmTip.value);
            const peopleCount = parseInt(people.value);
            rightSide.style.display = 'block';
            findData(inputVal, btnResult, cstmData, peopleCount);
        });
    });
});

function findData(inputVal, btnRes, cstmData, peopleCount) {
    let tipReq;
    if (btnRes) {
        tipReq = (inputVal * btnRes) / 100;
    } else {
        tipReq = (inputVal * cstmData) / 100;
    }
    const resultBill = tipReq + inputVal;
    const particularBill = resultBill / peopleCount;

    tipResult.innerHTML = Math.round(tipReq);
    showTotal.innerHTML = Math.round(resultBill);
    eachRes.innerHTML = Math.round(particularBill);

    resetBtn.addEventListener('click', ()=>{
        tipResult.innerHTML = '';
        showTotal.innerHTML = '';
        eachRes.innerHTML = '';
    })
}
