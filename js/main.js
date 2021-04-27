/*SPECIAL EXHIBIT COLLAPSIBLES*/
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
/*SPECIAL EXHIBIT COLLAPSIBLES*/

/*GENERAL ADMITTANCE COUNTERS*/

const container = document.querySelectorAll('.counter-container');
const limit = 5;

container.forEach(function(c){
  const bm = c.querySelector('.counter-minus');
  const bp = c.querySelector('.counter-plus');
  const d = c.querySelector('.counter-display');
  let count = 0;
  bm.addEventListener('click',function(){
    if(count>0){
      count--;
      displayAndCheck();
    }
  })
  bp.addEventListener('click',function(){
    if(count<limit){
      count++;
      displayAndCheck();
    }
  })
  function displayAndCheck(){
    d.textContent = count;
    bm.disabled = count==0 ? true : false;
    bp.disabled = count<limit ? false : true;
  }
})

/*GENERAL ADMITTANCE COUNTERS*/


/*POPUP*/

var modal = document.getElementById("cart-confirm-popup");

var btn = document.getElementById("confirm-cart");

var span = document.getElementsByClassName("close-popup")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/*POPUP*/

/*POPUP ON CART*/



/*POPUP ON CART*/
