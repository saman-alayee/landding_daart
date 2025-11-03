export function formatPrice(price: number | null | undefined): string {
    if (price === null || price === undefined || isNaN(price)) {
        return '0'; // Return a default value
    }
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
