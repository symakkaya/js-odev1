let clock = prompt("Merhaba, isminiz nedir?")
function showTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    document.getElementById("myClock").innerHTML = h + ":" + m + ":" + s  + "/" + d[today.getDay()];
    setTimeout(showTime, 1000);
    
  }
  showTime();

  