// Arrays with message fragments

/*
// Array of star sign not needed anymore. Message will now require input of user
const starSigns = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];
*/

const msg1 = ["be having good luck today", "experiencing traumatic flashbacks", "have a great day today", "not fulfill your goals today", "face challenges", "face danger", "have challenging emotions"];

const msg2 = ["avoid acidy food", "pay attention to your fellow humans", "not go outside today", "be extra friendly today", "be on your guard", "not worry at all"];

const giveMeASign = (starSign) => {
    let randNum1 = Math.floor(Math.random()*7);
    let optMsg1 = msg1[randNum1]

    let randNum2 = Math.floor(Math.random()*6);
    let optMsg2 = msg2[randNum2];

    console.log(`You told me that your sign is ${starSign}!`);
    console.log(`You will ${optMsg1}.`);
    console.log(`You should ${optMsg2}.`);

};


// The star sign needs to be the argument of the function
giveMeASign("Aquarius");

