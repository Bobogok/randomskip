function luck(){
    var luck = ["<h1>не повезло</h1>", "<h2>повезло</h2>", "<h2>повезло</h2", "<h2>повезло</h2", "<h2>повезло</h2", "<h2>повезло</h2"];

    var random = Math.floor(Math.random() * luck.length);

    if (random == 0) {
        var a = document.createElement("h2");
        var text = document.createTextNode("паъхапъхпаъхапъх");
        a.appendChild(text);
    };
    
    var your_luck = luck[random];
    var luckElement = document.getElementById("your_luck");
    luckElement.innerHTML = your_luck;
    a.innerHTML;
}
window.onload = luck;