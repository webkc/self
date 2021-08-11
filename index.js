let sendButton = document.querySelector('button');

function send() {
  let name = document.querySelector('#nameValue').value;
  let phone = document.querySelector('#phoneValue').value;
  let demand = document.querySelector('#demandValue').value;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbxsYLMOqlCZGHThmK376fgGIKFZmXLGmVIlEUIjK1KVDrutkv0/exec",
    data: {
        "name": name,
        "phone": phone,
        "demand": demand
    },
    success: function(response) {
      if(response == "���\"){
        alert("���\");
      }
    },
  });
};

sendButton.addEventListener('click', send);