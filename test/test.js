const assert = require('assert');
const { calculateDaysToChristmas, calculateAge, validateForm } = require('../source/index');

describe('Module Tests', () => {
  it('should calculate the correct days to Christmas', () => {
    const daysToChristmas = calculateDaysToChristmas();
    assert.strictEqual(daysToChristmas, 5); // Completa de esperando de días hasta Navidad
  });

  it('should calculate the correct age', () => {
    const birthDate = '1990-05-15';
    const age = calculateAge(birthDate);
    assert.strictEqual(age, 33); // Completa el valor esperado con la edad correcta
  });

  it('should validate the form correctly', () => {
    const validFormData = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      birthdate: '1990-01-01',
    };

    const invalidFormData = {
      name: '',
      email: 'invalidemail',
      birthdate: '1990-01-01',
    };

    const validErrors = validateForm(validFormData);
    const invalidErrors = validateForm(invalidFormData);

    assert.strictEqual(validErrors.length, 0); // Verifica que no haya errores en los datos válidos
    assert.strictEqual(invalidErrors.length, 2); // Verifica la cantidad de errores en los datos inválidos
  });
});
