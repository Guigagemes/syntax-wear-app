export const formatCurrency = (
  value: number,
  locale = 'pt-BR',
  currency = 'BRL'
): string =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value);

export const formatCurrencyBRL = (value: number): string =>
  formatCurrency(value, 'pt-BR', 'BRL');
