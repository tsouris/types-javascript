const mssg = "There are 37 symbols in this sentence";
console.log(mssg.length);

const firstName = "Niko";
const lastName = "Tsouris";
const fullName = firstName + " " + lastName
console.log(fullName);

console.log('${firstName} ${lastName}');

const roomNumber = 32;
const userName = "Tsouris Nikolas";
const hotelName = "Rizord";

console.log(`Guest: ${userName} Hotel: ${hotelName} Room number: ${roomNumber}`);

let btnName = "send";
btnName = btnName.toUpperCase();
console.log(btnName);

const blackListWord1 = "spam";
const blackListWord2 = "advertisement";
const string1 = "Hello, Im prince Abdul, this is not spam, im sending you a million";
const string2 = "This is not an advertisement";
const string3 = "New adidas shoes available now";

console.log(string1.includes(blackListWord1));
console.log(string2.includes(blackListWord2));
console.log(string3.includes(blackListWord1, blackListWord2));

