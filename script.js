const URL ="http://data.fixer.io/api/latest?access_key=2aab5ed2e3a1cfad94f69808af7703ad" //adress provider

function getData(){
  var storageData = localStorage.getItem("datas");
    if(storageData != null){
      var valiut = JSON.parse(storageData)
      console.log(valiut)
      var currencies = {
        USD: valiut.rates.USD,
        MDL: valiut.rates.MDL,
        RUB: valiut.rates.RUB
        }
        showCurrencies(currencies);
        showDate();
    } else {
      fetch('URL')
      .then(response => response.text())
      .then(commits => localStorage.setItem("datas", commits));
    }
   } 

function showDate(){
  //var yesterday = JSON.parse(xhr.responseText);
  //var day = yesterday.data;
  var div = document.createElement('div');
  div.id = 'yesterday';
  document.body.appendChild(div);
  var newday = document.getElementById('yesterday');
  var h = document.createElement('h1');
  h.innerText = new Date();
  newday.appendChild(h);
}
function showCurrencies(currencies){
  for(var code in currencies){
    console.log(code, currencies[code]);
    var tab = document.getElementById("rates");
    var tr = document.createElement('tr');
    tab.appendChild(tr);
    var td = document.createElement('td');
    td.innerText = code;
    tr.appendChild(td);
    var td = document.createElement('td');
    td.innerText = currencies[code];
    tr.appendChild(td);
  }
}
