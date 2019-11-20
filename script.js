function alertButton() {
    // Inför url i variabeln url
    var url = new URL(window.location.href);
    // Leta efter variabel namn i url
    var urlVar = url.searchParams.get("teknist");

    // Utskrift av variabelns värde i konsolen
    console.log(urlVar);
}