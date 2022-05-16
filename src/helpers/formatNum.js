export const formatNumber = (num) => {
    return new Intl.NumberFormat( "ES-CO", {
        style: 'currency',
        currency: 'COP'
    }).format(num)
}