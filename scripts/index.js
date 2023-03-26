function getAge() {
  const now = new Date();
  const birth = new Date(2009, 8, 16);
  const difference = now - birth;
  const age = difference / 1000 / 60 / 60 / 24 / 365;
  return age;
}
function updateAge() {
  const ageElement = document.getElementById("age");
  ageElement.innerText = getAge().toFixed(6);
}

setInterval(updateAge, 1000);
