import data from '/src/data.json'
import '../styles/reset.css'
import '../css/style.css'

//raiz del documento
const app = document.getElementById('app')

const $fragment = document.createDocumentFragment()
const $containerSpend = document.createElement('section')
$containerSpend.classList.add('container')

const resultBalance = data.reduce((value, valuePrincipal) => {
  return valuePrincipal.amount + value
}, 0)

//header del spend
const myBalance = () => {
  const $headerBalance = document.createElement('div')
  const $totalBalnce = document.createElement('div')
  const $h1 = document.createElement('h1')
  const $h2 = document.createElement('h2')

  $h1.textContent = `My balance`
  $h2.textContent = `$ ${resultBalance}`

  $totalBalnce.classList.add('total-balance')
  $headerBalance.classList.add('header-balance')

  $totalBalnce.appendChild($h1)
  $totalBalnce.appendChild($h2)

  $headerBalance.appendChild($totalBalnce)
  imageLogo($headerBalance) // --> imagen logotipo

  $containerSpend.appendChild($headerBalance)
}

//imagen logo
const imageLogo = headerBalance => {
  const $img = document.createElement('img')

  $img.classList.add('image')
  $img.setAttribute('src', '/assets/logo.svg')
  $img.setAttribute('alt', 'logo')
  headerBalance.appendChild($img)
}
myBalance()

const spend = () => {
  const $contGrafico = document.createElement('div')
  const $title = document.createElement('div')
  const $h3 = document.createElement('h3')
  const $hr = document.createElement('hr')

  $contGrafico.classList.add('cont-spend')

  $title.classList.add('title')
  $h3.textContent = `Spending - Last 7 days`

  $title.appendChild($h3)
  $contGrafico.appendChild($title)

  graficos($contGrafico)
  $contGrafico.insertAdjacentElement('beforeend', $hr)
  totalMyBalance($contGrafico)
  $containerSpend.appendChild($contGrafico)
}
spend()

//graficos
function graficos($contGraficos) {
  const $display = document.createElement('div')
  data.forEach(e => {
    const { day, amount } = e
    const $contDiv = document.createElement('div')
    const $elements = document.createElement('div')
    const $day = document.createElement('p')
    const $target = document.createElement('span')

    $display.classList.add('spends')
    $contDiv.classList.add('container-divs')
    $elements.classList.add('elements')

    $day.textContent = `${day}`
    $elements.style.height = `${amount * 3}px`

    $elements.addEventListener('mouseover', function () {
      $target.classList.add('target')
      $target.textContent = `$${amount}`
    })

    $elements.addEventListener('mouseleave', function () {
      $target.classList.remove('target')
      $target.textContent = null
    })

    $contDiv.appendChild($target)
    $contDiv.appendChild($elements)
    $contDiv.appendChild($day)

    $display.appendChild($contDiv)
    $contGraficos.appendChild($display)
    $fragment.appendChild($contGraficos)
  })
}

function totalMyBalance($contGrafico) {
  const $containerTotal = document.createElement('div')
  const $containerMonth = document.createElement('div')
  const $containerFrom = document.createElement('div')

  const $h4 = document.createElement('h4')
  const $h5 = document.createElement('h5')
  const $h6 = document.createElement('h6')
  const $span = document.createElement('span')

  $containerTotal.classList.add('container-total')

  $h4.textContent = 'Total this month'
  $h5.textContent = `$${resultBalance * 4}`

  $h6.textContent = `+${2.4}`
  $span.textContent = `From last month`

  $containerMonth.appendChild($h4)
  $containerMonth.appendChild($h5)

  $containerFrom.appendChild($h6)
  $containerFrom.appendChild($span)

  $containerTotal.appendChild($containerMonth)
  $containerTotal.appendChild($containerFrom)

  $contGrafico.appendChild($containerTotal)
}

app.appendChild($containerSpend)
