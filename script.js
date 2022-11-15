const submitBtn = document.querySelector('#submit')
const origState = document.querySelector('.orig_state')
const endState = document.querySelector('.end_state')
const rating = document.querySelector('#rating')
const rates = document.querySelectorAll('.nums')

submitBtn.addEventListener('click', () => {

    origState.classList.add('hidden');
    endState.classList.remove('hidden');
});

rates.forEach((rate) => {
    rate.addEventListener('click',() => {
        document.getElementById('rating').innerHTML = rate.value;
    })
})
