function applyChanges() {
    document.getElementById("hello").innerHTML = "Hello " + uName.value;
    document.getElementById("p1").innerHTML = uMessage.value;
    b1.style.setProperty("background-color",uBc.value);

};