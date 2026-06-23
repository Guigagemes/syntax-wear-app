export function isValidCPF(cpf: string): boolean {
  // Remove tudo que não for número
  const cleanedCPF = cpf.replace(/\D/g, "");

  // CPF deve ter 11 dígitos
  if (cleanedCPF.length !== 11) {
    return false;
  }

  // Rejeita CPFs com todos os dígitos iguais
  if (/^(\d)\1{10}$/.test(cleanedCPF)) {
    return false;
  }

  const digits = cleanedCPF.split("").map(Number);

  // Calcula o primeiro dígito verificador
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += digits[i] * (10 - i);
  }

  let firstCheckDigit = (sum * 10) % 11;
  if (firstCheckDigit === 10) {
    firstCheckDigit = 0;
  }

  if (firstCheckDigit !== digits[9]) {
    return false;
  }

  // Calcula o segundo dígito verificador
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += digits[i] * (11 - i);
  }

  let secondCheckDigit = (sum * 10) % 11;
  if (secondCheckDigit === 10) {
    secondCheckDigit = 0;
  }

  if (secondCheckDigit !== digits[10]) {
    return false;
  }

  return true;
}