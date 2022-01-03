import './burger.scss'

export default () =>
    document.addEventListener('DOMContentLoaded', () => {
        const btn = document.querySelector('.burger')
        btn.addEventListener('click', () => btnHandler(btn))
        const btnHandler = (btn) => {
            btn.classList.toggle('active')
        }
    })





