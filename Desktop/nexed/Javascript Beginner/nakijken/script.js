let ingevoerdePincode = parseInt(process.argv[2]);
let functie = process.argv[3];
let dagVanDeWeek = parseInt(process.argv[4]);

const correctePincode = 123752;
const weekend = (dagVanDeWeek === 5 || dagVanDeWeek === 6);

if (ingevoerdePincode === correctePincode && (functie === "bestuur" || functie === "administratief medewerker")) {
    console.log("Toegang verleend");
} else if (weekend) {
    console.log("Veiligheidsdiensten worden ingeschakeld");
} else {
    console.log("Verkeerde pincode of je hebt niet de juiste rechten");
}
