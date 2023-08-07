
function newItem() {

    //javascript
    //1. Adding a new item to the list of items: 
    // let li = document.createElement("li");
    // let inputValue = document.getElementById("input").value;
    // let text = document.createTextNode(inputValue);
    // li.appendChild(text);
  
    // jQuery
    let li = $("<li></li>");
    let inputValue = $("#input").val();
    li.append(inputValue);
    // let text = $(inputValue.append(document.createTextNode("text")));
    // let text = $(inputValue.append.text("text"));
    // $("#input").append(text);
  
  
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      // let list = document.querySelector('#list');
      // list.appendChild(li);
      $("#list").append(li);
    }
  
    //2. Crossing out an item from the list of items:
    function crossOut() {
      li.toggleClass("strike");
    }
  
    li.on("dblclick", crossOut);
  
    //3(i). Adding the delete button "X": 
    // let crossOutButton = document.createElement("crossOutButton");
    // crossOutButton.appendChild(document.createTextNode("X"));
    // li.appendChild(crossOutButton);
  
    let crossOutButton = $("<button class = 'crossOutButton'></button>");
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);
  
    crossOutButton.on("click", deleteListItem);
    //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
      function deleteListItem() {
        li.addClass("delete")
    }
    // 4. Reordering the items: 
    $('#list').sortable();
  
  }