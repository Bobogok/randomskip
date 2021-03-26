function luck(){
    var luck = ["<h2>не повезло</h2>", "<h2>повезло</h2>", "<h2>повезло</h2", "<h2>повезло</h2", "<h2>повезло</h2", "<h2>повезло</h2"];

    var random = Math.floor(Math.random() * luck.length);

    if (random == 0) {
        var text = '<h1>ЧЛЭН</h1>';
        var cock = document.getElementById('new');
        cock.innerHTML = text;
    };
    
    var your_luck = luck[random];
    var luckElement = document.getElementById("your_luck");
    luckElement.innerHTML = your_luck;
}
window.onload = luck;
