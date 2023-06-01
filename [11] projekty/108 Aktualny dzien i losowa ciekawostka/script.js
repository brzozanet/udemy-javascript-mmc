const currentDay = document.querySelector(".current-day");
const funFact = document.querySelector(".fun-fact");

const facts = [
  "Krokodyl nie potrafi wystawić języka.",
  "Każdy człowiek spędził około pół godziny jako pojedyncza komórka.",
  "Dźwięk przemieszcza się 15 razy szybciej przez stal niż przez powietrze.",
  "Leniwce potrzebują dwóch tygodni na strawienie jedzenia.",
  "Goryle śpią nawet czternaście godzin dziennie.",
  "Język kameleona jest dwukrotnie dłuższy od jego ciała.",
  "Chińczycy w ciągu roku zużywają około 80 miliardów pałeczek.",
  "Żeby wejść na Wieżę Eiffla trzeba pokonać aż 1710 stopni.",
];

// const today = new Date().toString();

// if (today.includes("Mon")) {
//   currentDay.textContent = "poniediałek";
//   funFact.textContent = facts[0];
// } else if (today.includes("Tue")) {
//   currentDay.textContent = "wtorek";
//   funFact.textContent = facts[1];
// } else if (today.includes("Wed")) {
//   currentDay.textContent = "środa";
//   funFact.textContent = facts[2];
// } else if (today.includes("Thu")) {
//   currentDay.textContent = "czwartek";
//   funFact.textContent = facts[3];
// } else if (today.includes("Fri")) {
//   currentDay.textContent = "piątek";
//   funFact.textContent = facts[4];
// } else if (today.includes("Sat")) {
//   currentDay.textContent = "sobota";
//   funFact.textContent = facts[5];
// } else if (today.includes("Sun")) {
//   currentDay.textContent = "niedziela";
//   funFact.textContent = facts[6];
// }

const today = new Date();
currentDay.textContent = today.toLocaleString("default", { weekday: "long" });
const randomNumber = Math.floor(Math.random() * facts.length);
funFact.textContent = facts[randomNumber];

// funFact.textContent = facts[today.getDay() - 1];
