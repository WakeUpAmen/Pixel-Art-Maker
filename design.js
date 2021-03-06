
var submit = document.getElementById('submit');
submit.addEventListener('click', function(event){
  event.preventDefault();
  makeGrid();
});
function makeGrid() {
    var height = document.getElementById('inputHeight').value;
    var width = document.getElementById('inputWidth').value;
    var table = document.getElementById('pixelCanvas');
	// Table grid creation code :
    table.innerHTML = '';
    var tbody = document.createElement('tbody');
    for (var i = 0; i < height; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < width; j++) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(''));
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
}

document.getElementById('pixelCanvas').addEventListener('click', function (even) {
  even.preventDefault();
  even.target.style.backgroundColor = document.getElementById('colorPicker').value;
});