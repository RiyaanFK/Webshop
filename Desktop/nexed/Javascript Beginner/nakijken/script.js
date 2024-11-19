<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rijlessen Controle</title>
</head>
<body>
    <h1 class="heading" id="mainHeading">Welkom op de rijschool website!</h1>

    <div class="person" id="leonie">
        <p class="name">Leonie</p>
        <p class="age">17</p>
    </div>

    <div class="person" id="mustafa">
        <p class="name">Mustafa</p>
        <p class="age">19</p>
    </div>

    <script>
        // Wacht totdat de HTML is geladen
        document.addEventListener("DOMContentLoaded", function() {
            const leonieElement = document.querySelector("#leonie");
            const mustafaElement = document.querySelector("#mustafa");

            const leonieAge = parseInt(leonieElement.querySelector(".age").textContent);
            const mustafaAge = parseInt(mustafaElement.querySelector(".age").textContent);

            const leonieName = leonieElement.querySelector(".name");
            if (leonieAge >= 18) {
                leonieName.textContent += " mag beginnen met rijlessen";
            } else {
                leonieName.textContent += " moet nog even wachten";
            }

            const mustafaName = mustafaElement.querySelector(".name");
            if (mustafaAge >= 18) {
                mustafaName.textContent += " mag beginnen met rijlessen";
            } else {
                mustafaName.textContent += " moet nog even wachten";
            }
        });
    </script>
</body>
</html>
