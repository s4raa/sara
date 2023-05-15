<script>
document.addEventListener("DOMContentLoaded", function() {
    var cookieMessage = document.getElementById("cookie-message");
    var acceptBtn = document.getElementById("accept-cookies");

    // Verifica se i cookie sono già stati accettati
    var cookiesAccepted = localStorage.getItem("cookiesAccepted");

    // Mostra il messaggio dei cookie solo se non sono ancora stati accettati
    if (!cookiesAccepted) {
        cookieMessage.style.display = "block";
    }

    // Accetta i cookie quando viene cliccato sul pulsante "Accetta"
    acceptBtn.addEventListener("click", function() {
        // Salva l'accettazione dei cookie nello storage locale
        localStorage.setItem("cookiesAccepted", true);

        // Nascondi il messaggio dei cookie
        cookieMessage.style.display = "none";
    });
});
</script>


