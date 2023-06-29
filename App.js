async function FetchStonkInfo(symbol, min, sec) {
  tbl = await document.getElementById("myTable");

  tbl.style.display = "table";
  time = 1000 * (Number(sec) + 60 * Number(min));
  timeString = time.toString();
  //console.log(time);
  dispInfo(symbol, timeString);
}

async function dispInfo(symbol, time) {
  //Call for new information every time.
  const response = await fetch(
    "https://finnhub.io/api/v1/quote?symbol=" +
      symbol +
      "&token=ci6cjr1r01qhmud1ipg0ci6cjr1r01qhmud1ipgg"
  );
  //get the graph
  stonksData = await response.json();
  var date = Date(stonksData.t);
  //console.log(stonksData);

  //get the table
  var tbodyRef = document
    .getElementById("myTable")
    .getElementsByTagName("tbody")[0];

  //Add new row and the cells to the table
  var newRow = tbodyRef.insertRow();
  var openCell = newRow.insertCell();
  var highCell = newRow.insertCell();
  var lowCell = newRow.insertCell();
  var closingCell = newRow.insertCell();
  var currentPriceCell = newRow.insertCell();
  var timeCell = newRow.insertCell();

  var openText = document.createTextNode("$" + stonksData.o);
  var highText = document.createTextNode("$" + stonksData.h);
  var lowText = document.createTextNode("$" + stonksData.l);
  var closingText = document.createTextNode("$" + stonksData.o);
  var priceText = document.createTextNode("$" + stonksData.h);
  var timeText = document.createTextNode(date);

  openCell.appendChild(openText);
  highCell.appendChild(lowText);
  lowCell.appendChild(highText);
  closingCell.appendChild(closingText);
  currentPriceCell.appendChild(priceText);
  timeCell.appendChild(timeText);

  setTimeout(() => {
    dispInfo(symbol, time);
  }, time);
}
