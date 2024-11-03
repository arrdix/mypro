export const currencyFormatter = (amount: number): string =>
    new Intl.NumberFormat('id', {
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
    }).format(amount)
