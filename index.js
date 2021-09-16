const getName = () => {
    let firstName = prompt("Lütfen isminizi giriniz:", "Serhat");
    document.getElementById("name").innerHTML = firstName + "!";
    document.getElementById("loading").classList.add("hide");
};
var days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
];
const getTime = () => {
    let date = new Date();
    let d = date.toLocaleString();
    var dayName = days[date.getDay()];
    document.getElementById("tarih").innerHTML = d + " " + dayName;
};

setInterval(getTime, 1000);
