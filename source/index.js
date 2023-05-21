const utils = require('./utils');
const validators = require('./validators');

function calculateDaysToChristmas() {
    const today = new Date();
    const navidad = new Date(today.getFullYear(), 11, 25); 
  
    if (today.getMonth() === 11 && today.getDate() > 25) {
      // Si ya pasó la Navidad de este año, se establece la fecha de Navidad para el próximo año
      navidad.setFullYear(today.getFullYear() + 1);
    }
  
    const timeDiff = navidad.getTime() - today.getTime();
    const daysToChristmas = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  
    return daysToChristmas;
  }

  const daysToChristmas = calculateDaysToChristmas();
  console.log(`Faltan ${daysToChristmas} días para Navidad.`);
  






function cacularedad(birthDate) {
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
  const birthDate = '1990-05-15';
  const age = cacularedad(birthDate);
  console.log(`La edad de la persona es: ${age} años.`);



function validateForm(formData) {
    const requiredFields = ['name', 'email'];
    const errors = [];
  
    // Verificar campos obligatorios
    for (const field of requiredFields) {
      if (!formData[field]) {
        errors.push(`El campo '${field}' es obligatorio.`);
      }
    }
  
    // Verificar formato de correo electrónico
    if (formData.email && !isValidEmail(formData.email)) {
      errors.push(`El campo 'email' tiene un formato inválido.`);
    }
  
    return errors;
  }
  
  function isValidEmail(email) {
    // Expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  
  const formData = {
    name: 'Brigit Trujillo Flores',
    email: 'brigit@gmail.com',
    birthdate: '2002-11-03',
  };
  
  const errors = validateForm(formData);
  
  if (errors.length === 0) {
    console.log('Los datos del formulario son válidos.');
  } else {
    console.log('Se encontraron los siguientes errores:');
    for (const error of errors) {
      console.log(`- ${error}`);
    }
  }
  
  