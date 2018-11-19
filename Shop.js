

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
      if (document.getElementById('item'+i).style.backgroundColor === 'yellow')
      {
          ocument.getElementById("cart").deleteRow(i);

        //Add item to the cart table
      }
    }
}


function highlight(item)
{
  if(item.style.background == "") {
      $(item).css('background', 'yellow');
  }
  else {
      $(item).css('background', '');
}}
