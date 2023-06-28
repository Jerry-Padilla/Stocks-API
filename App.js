async function FetchStonkInfo(symbol, min, sec) {
  tbl = await document.getElementById("myTable");

  tbl.style.display = "table";
  time = 1000 * (Number(sec) + 60 * Number(min));
  timeString = time.toString();
  console.log(time);
  dispInfo(symbol, timeString);
}

async function dispInfo(symbol, time) {
  const response = await fetch(
    "https://finnhub.io/api/v1/quote?symbol=" +
      symbol +
      "&token=ci6cjr1r01qhmud1ipg0ci6cjr1r01qhmud1ipgg"
  );
  stonksData = await response.json();
  console.log(stonksData);
  var tbodyRef = document
    .getElementById("myTable")
    .getElementsByTagName("tbody")[0];

  var newRow = tbodyRef.insertRow();
  var oCell = newRow.insertCell();
  var hCell = newRow.insertCell();
  var lCell = newRow.insertCell();
  var cCell = newRow.insertCell();
  var pCell = newRow.insertCell();
  var tCell = newRow.insertCell();

  var openText = document.createTextNode("$" + stonksData.o);
  var hText = document.createTextNode("$" + stonksData.h);
  var lText = document.createTextNode("$" + stonksData.l);
  var cText = document.createTextNode("$" + stonksData.o);
  var pText = document.createTextNode("$" + stonksData.h);
  var tText = document.createTextNode(Date(stonksData.t));

  oCell.appendChild(openText);
  hCell.appendChild(lText);
  lCell.appendChild(hText);
  cCell.appendChild(cText);
  pCell.appendChild(pText);
  tCell.appendChild(tText);

  setTimeout(() => {
    dispInfo(symbol, time); //dis works
  }, time);
}
