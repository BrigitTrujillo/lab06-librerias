function calculardiasnavidad() {
  const today = new Date();
  const christmasDate = new Date(today.getFullYear(), 11, 25); // 11 representa diciembre (los meses en JavaScript son indexados desde 0)

  if (today.getMonth() === 11 && today.getDate() > 25) {
    // Si ya pasó la Navidad de este año, se establece la fecha de Navidad para el próximo año
    christmasDate.setFullYear(today.getFullYear() + 1);
  }

  const timeDiff = christmasDate.getTime() - today.getTime();
  const daysToChristmas = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return daysToChristmas;
}

function calculateAge(birthDate) {
  const today = new Date();
  const birthDateObj = new Date(birthDate);

  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDiff = today.getMonth() - birthDateObj.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
    age--;
  }

  return age;
}

module.exports = {
  calculardiasnavidad,
  calculateAge,
};
