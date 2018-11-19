var total = 0;
var currentGold = 10000;

function addToCart()
{
    var numRows = document.getElementById("listOfItems").rows.length
    for(var i = 0; i < numRows; i++)
    {
      if (document.getElementById('item'+i).style.backgroundColor === 'yellow')
      {
          var newItem = [document.getElementById("listOfItems").rows[i].cells[0].innerHTML, document.getElementById("listOfItems").rows[i].cells[1].innerHTML, document.getElementById("listOfItems").rows[i].cells[2].innerHTML]

          var table = document.getElementById('cart');
          var row = table.insertRow(0);
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          cell1.innerHTML = newItem[0];
          cell2.innerHTML = newItem[1];
          cell3.innerHTML = newItem[2];

          total+= parseInt(newItem[2]);
          document.getElementById("total").innerHTML = total;
          document.getElementById('item'+i).style.backgroundColor = '';

        //Add item to the cart table
      }
    }
}


function removeFromCart()
{
    var numRows = document.getElementById("cart").rows.length
    for(var i = 0; i < numRows; i++)
    {
      document.getElementById("cart").deleteRow(0);
      total = 0;
      document.getElementById("total").innerHTML = total;
    }
}

function buy()
{
  document.getElementById("currentGold").innerHTML = currentGold - total;
  removeFromCart();

}

$(document).ready(function () {
    $('tr').click(function () {
      if(this.style.background == "") {
          $(this).css('background', 'yellow');
      }
      else {
          $(this).css('background', '');
        }
    });
});
