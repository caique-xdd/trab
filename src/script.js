// Referências do DOM - HTML

// Função de cotação do Bitcoin
const btnClick = document.getElementById('btnClick');
const lblValor = document.getElementById('lblValor');

const apiBTC = axios.create({
  baseURL: "https://www.mercadobitcoin.net/api/BTC/ticker/",
})
async function consulta() {
  const response = await apiBTC.get()
  //console.log(response.data.ticker.buy);
  const b = Math.round(response.data.ticker.buy * 100)/100
  lblValor.innerHTML = "R$ " + b.toLocaleString("pt-BR")
}
btnClick.onclick = () => {
  consulta()
}

// Função de consultar taxa selic
const lblS = document.getElementById('lblS');

const apiNS = axios.create({
  baseURL: "https://api.hgbrasil.com/finance/taxes?format=json-cors&key=4b309b17"
})
async function consultaS() {
  const responseS = await apiNS.get()
  console.log(responseS.data.results[0].selic)
}
btnTempo.onclick = () => {
  consultaS()
}

// Função da consulta do CEP
const btnCEP = document.getElementById('btnCEP');
const conCEP = document.getElementById('conCEP');
const lblBairro = document.getElementById('lblBairro');
const lblCidade = document.getElementById('lblCidade');
const lblLogra = document.getElementById('lblLogra');
const lblUF = document.getElementById('lblUF');

const apiCEP = axios.create({
  baseURL: `https://viacep.com.br/ws/`
})
async function consultaCEP() {
    const CEP = conCEP.value;
    const responseCEP = await apiCEP.get(CEP + '/json/')
    lblBairro.innerHTML = responseCEP.data.bairro
    lblCidade.innerHTML = responseCEP.data.localidade
    lblLogra.innerHTML = responseCEP.data.logradouro
    lblUF.innerHTML = responseCEP.data.uf
}
btnCEP.onclick = () => {
  consultaCEP()
}

// Função de cotação do Dolar/Real
const btnDr = document.getElementById("btnDr")
const lblDr = document.getElementById("lblDr")

const apiDr = axios.create({
  baseURL: "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL",
})
async function consultaDr() {
  const responseDr = await apiDr.get()
  const d = responseDr.data.USDBRL.ask
  lblDr.innerHTML = "R$" + (Math.round(d * 100) / 100).toLocaleString("pt-BR")
}
btnDr.onclick = () => {
  consultaDr()
}

//https://pt.stackoverflow.com/questions/76640/existe-alguma-api-que-liste-estados-e-cidades
//https://www.geonames.org/6252001/united-states.html