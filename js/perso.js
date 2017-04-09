

function UrlFunction() {
	var url = document.getElementById("inputURL").value;
	var iframe = document.getElementById('output');
	iframe.src = addhttp(url); 
}

function addhttp(url) {
   if (!/^(f|ht)tps?:\/\//i.test(url)) {
      url = "http://" + url;
   }
   return url;
}

function addFunction() {
	var key = document.getElementById("key");
	var regexp = document.getElementById("regexp");
	var table = document.getElementById('table');
	var row = table.insertRow(-1);
	var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	cell1.innerHTML = key.value;
  cell2.innerHTML = regexp.value;
	cell3.innerHTML = "<td><input type='button' value='Delete' onclick='deleteRow(this)'></td>"
  key.value++
}

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
}

function test() {
	document.getElementById("page").value = "test";
}

function regexp() {
/* 	var nb = document.getElementById("table").rows.length;
	var page = document.getElementById('output');
	var step;
	for (step=0, step<nb; step++) {
		var input = document.getElementById("table").rows[step].cells[1];
		var reg = new RegExp(input);
		var myArray = myRe.exec(page);
	} 
	var str = document.getElementById("output").innerHTML;
	/* var querystr = document.getElementById("table").rows[0].cells[1];
	var querystr = "Google";
	var reg = new RegExp("("+querystr.trim()+")", 'gi');
	page.innerHTML = 'foo ' + result.replace(reg, "<mark>&1</mark>"); 
	var word = "Google";
	page.body.innerHTML = page.body.innerHTML.replace(word, '<span style="background: #00ff00">' + word + '</span>');
  
	var re = /Google/gi;
	var txt = str.replace(re,,"<mark>"+"test"+"</mark>");
	document.getElementById("output").innerHTML = txt;
*/
	} 
