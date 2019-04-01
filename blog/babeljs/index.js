var myFunction = () => {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};

customElements.define('my-custom', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "<b>My Blog!</b>";
  }

});
