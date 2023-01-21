const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function save() {
  localStorage.setItem("NLWStorage@habits", JSON.stringify(nlwSetup.data))
  JSON.parse(localStorage.getItem("NLWStorage@habits"))
}

function add() {
  const today = new Date().toLocaleDateString("pt-br")
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso ❌")
    return
  }

  alert("Dia adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

const data = JSON.parse(localStorage.getItem("NLWStorage@habits")) || {}

//const data = {
//run: ['01-02', '01-03', '01-04'],
//water: ['01-01']
//}

nlwSetup.setData(data)
nlwSetup.load()
