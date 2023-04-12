const gifts = ['Tai nghe', 'Dien thoai', 'Chuc ban may man', 'The cao 20K', 'Bam mong tay',
  'Chuot', 'The nho 8GB', 'Ram 4GB', 'Dong ho', 'Lot chuot', 'Sach day lam giau'
]
const btnRun = document.querySelector('.run')
const showTime = document.querySelector('.showTime')
const timeEl = document.querySelector('.time')
const statusEl = document.querySelector('.status-run')
const modalEl = document.getElementById('modal')
const contentModalEl = document.querySelector('.content')
const showModalEl = document.querySelector('#showModal')
const closeModalBtnEl = document.querySelector('#modal .content .close')
const closeTop = document.querySelector('.closeTop')
const resultEl = document.querySelector('.result')

btnRun.addEventListener("click", run)

let isRun = false

function run() {
  if (isRun) return
  isRun = true
  btnRun.classList.add('disible')
  statusEl.innerHTML = 'Dang quay....'
  const NUMBER_WIN = Math.floor(Math.random() * gifts.length)
  let i = 0;
  const id1 = setInterval(() => {
    i++;
    if (i > 44) {
      clearInterval(id1)
      statusEl.innerHTML = 'Ban da quay xong'
      resultEl.textContent = `Chuc ban may man lan sau`
      isRun = false
      btnRun.classList.remove('disible')
      handleShowModal()
      return
    }
    const n = Math.floor(Math.random() * 11)
    if (n === NUMBER_WIN && i > 11) {
      const gift = gifts[n]
      statusEl.innerHTML = 'Ban da quay xong'
      resultEl.textContent = `Ket qua quay thuong: ${gift}`
      isRun = false
      btnRun.classList.remove('disible')
      handleShowModal()
      clearInterval(id1)
    }
  }, 300)
}


// Handle Close modal
function handleCloseModal() {
  console.log('close');
  const styleModal = getComputedStyle(modalEl)
  if (styleModal.display !== 'none') {
    modalEl.style.display = 'none'
  }
}
closeModalBtnEl.addEventListener("click", handleCloseModal)
closeTop.addEventListener('click', handleCloseModal)
// Show modal

function handleShowModal() {
  console.log("show");
  const styleModal = getComputedStyle(modalEl)
  if (styleModal.display === 'none') {
    modalEl.style.display = 'block'
  }
}











