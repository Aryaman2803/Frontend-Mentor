const inputBill = document.getElementsByClassName('amount')[0]
const tipBtns = document.getElementsByClassName('tip-value')
const inputCustomTip = document.getElementById('tip-custom')
const errMsg = document.getElementsByClassName('zero-people')[0]
const inputPeopleCount = document.getElementById('people-value')

const tipAmountPerPerson = document.getElementById('tip-amt')
const totalAmountPerPerson = document.getElementById('total')
const resetBtn = document.getElementById('reset')

let tipPercent = 0

for (let btn of tipBtns) {
  btn.addEventListener('click', function () {
    tipPercent = Number.parseInt(btn.textContent)
  })
}

inputPeopleCount.addEventListener('input', () => {
  if (+inputPeopleCount.value == 0) {
    errMsg.classList.remove('error')
    tipAmountPerPerson.textContent = `$ 0`
    totalAmountPerPerson.textContent = `$ 0`

    resetBtn.setAttribute('disabled', true)
    resetBtn.style.background = 'hsl(183, 64%, 25%)'
  } else {
    errMsg.classList.add('error')

    if (inputCustomTip.value !== '') {
      tipPercent = +inputCustomTip.value
    }

    const billAmount = +inputBill.value
    const peopleCount = +inputPeopleCount.value

    const tip = (billAmount * tipPercent) / 100
    const total = billAmount + tip

    tipAmountPerPerson.textContent = `$${(tip / peopleCount).toFixed(2)}`
    totalAmountPerPerson.textContent = `$${(total / peopleCount).toFixed(2)}`

    resetBtn.removeAttribute('disabled')
    resetBtn.style.background = 'hsl(172, 67%, 45%)'
    resetBtn.onmouseover = function () {
      this.style.backgroundColor = 'hsl(185, 41%, 84%)'
    }
    resetBtn.onmouseleave = function () {
      this.style.backgroundColor = 'hsl(172, 67%, 45%)'
    }
  }
})

resetBtn.addEventListener('click', function () {
  inputBill.value = inputCustomTip.value = inputPeopleCount.value = ''
  tipAmountPerPerson.textContent = totalAmountPerPerson.textContent = '$0.00'
  tipPercent = 0
  resetBtn.setAttribute('disabled', true)
  resetBtn.style.background = 'hsl(183, 64%, 25%)'
})
