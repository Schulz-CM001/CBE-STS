/*

var req = new XMLHttpRequest();

req.addEventListener("load", function() {
    const data = JSON.parse(this.responseText);
    document.body.append(document.createTextNode(data.kraut));

})

req.open("GET", "https://krautipsum.com/api/kraut");

req.send();

*/

fetch('https://krautipsum.com/api/kraut')
.then(response => response.json())
.then(data => {
    document.body.append(document.createTextNode(data.kraut))
});

