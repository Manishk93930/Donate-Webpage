
document.addEventListener("DOMContentLoaded", function() {
    loadContent('home');
});

function loadContent(page) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("indexcontent").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", page + ".html", true);
    xhttp.send();
}

function handleclick() {
    var donateBtn = document.getElementById('donatebtn');
    var amntDiv = document.getElementById('amntbtn');
  
    donateBtn.classList.add('donate-clicked');
    amntDiv.classList.add('amnt-disp');
  }
  
function handlePayment() {
    var amountval = document.getElementById('donat');
    var amountvalue = amountval.value;
    if (amountvalue === "") {
      alert("Please enter the amount");
    } else {
      var options = {
        key: "rzp_live_n81beu3Uo0gUda",
        key_secret: "KCQ9eBMGsm5EguloA6Nn3rkk",
        amount: amountvalue * 100,
        currency: "INR",
        name: "Donate",
        description: "Contribute to Elevate",
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: "Gandhi",
          email: "loveuappa03@gmail.com",
          Contact: "9789799120",
        },
        notes: {
          address: "Razorpay corporate office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }
  

  function updateNavbarStyle() {
    var currentLocation = window.location.hash;
    var navbar = document.getElementById('navbar1');
    var nav = document.querySelectorAll('#nave li a');
    if (currentLocation === '#contact.html') {
        navbar.style.backgroundColor = '#fff'; 
        nav.forEach(function(link){
          link.style.color='maroon';
        });
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; 
        nav.forEach(function(link){
          link.style.color='#fff';
        });
    }
}

updateNavbarStyle();
setInterval(updateNavbarStyle, 500);

function addlist(){
  var element = document.getElementById('cntcontent');
  var element2 = document.getElementById('writtencontent');
  element.classList.add('active');
  element2.classList.add('disable');
}
