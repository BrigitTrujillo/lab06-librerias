function validateForm(formData) {
    // Implementa la lógica de validación aquí
    // Retorna true o false según si el formulario es válido o no
  }
  
  module.exports = {
    validateForm,
  };

  
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
  
  // Ejemplo de uso
  const birthDate = '1995-06-12';
  const age = calculateAge(birthDate);
  console.log(`La edad de la persona es: ${age} años.`);
  