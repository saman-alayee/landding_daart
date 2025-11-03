import jalaali from 'jalaali-js';

/**
 * Converts a Gregorian date string (YYYY-MM-DD) to a Shamsi (Jalali) date.
 * @param {string} gregorianDate - The Gregorian date string in "YYYY-MM-DD" format.
 * @returns {string} - The Shamsi date string in "YYYY/MM/DD" format or an error message.
 */
export function toShamsiDate(gregorianDate: string): string {
    try {
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateRegex.test(gregorianDate)) {
            throw new Error('Invalid date format. Use "YYYY-MM-DD".');
        }
        if (gregorianDate === '0000-00-00') {
            return ''; 
        }
        const [year, month, day] = gregorianDate.split('-').map(Number);
        if (isNaN(year) || isNaN(month) || isNaN(day)) {
            throw new Error('Invalid date values.');
        }
        if (year < 1000 || year > 9999) {
            throw new Error('Year is out of valid Gregorian range (1000-9999).');
        }

        const { jy, jm, jd } = jalaali.toJalaali(year, month, day);

        return `${jy}/${jm.toString().padStart(2, '0')}/${jd.toString().padStart(2, '0')}`;
    } catch (error) {
        return '_';
    }
}
export function toShamsiFromUnix(unixTimestamp: number): string {
    try {
        if (isNaN(unixTimestamp) || unixTimestamp <= 0) {
            throw new Error('Invalid Unix timestamp');
        }

        // Convert the Unix timestamp to a Gregorian date
        const date = new Date(unixTimestamp * 1000); // Multiply by 1000 to convert to milliseconds
        const gregorianYear = date.getUTCFullYear();
        const gregorianMonth = date.getUTCMonth() + 1; // getUTCMonth() is 0-based
        const gregorianDay = date.getUTCDate();

        // Convert the Gregorian date to Shamsi (Jalali)
        const { jy, jm, jd } = jalaali.toJalaali(gregorianYear, gregorianMonth, gregorianDay);

        // Return the Shamsi date in "YYYY/MM/DD" format
        return `${jy}/${jm.toString().padStart(2, '0')}/${jd.toString().padStart(2, '0')}`;
    } catch (error) {
        return '_';
    }
}

export function toShamsiFromUnixTime(unixTimestamp: number): string {
    try {
        if (isNaN(unixTimestamp) || unixTimestamp <= 0) {
            throw new Error('Invalid Unix timestamp');
        }

        // Convert the Unix timestamp to a Date object
        const date = new Date(unixTimestamp * 1000); // Convert seconds to milliseconds
        const gregorianYear = date.getUTCFullYear();
        const gregorianMonth = date.getUTCMonth() + 1; // getUTCMonth() is 0-based
        const gregorianDay = date.getUTCDate();
        const hours = date.getHours().toString().padStart(2, '0'); // Hours with leading zero
        const minutes = date.getMinutes().toString().padStart(2, '0'); // Minutes with leading zero

        // Convert the Gregorian date to Shamsi (Jalali)
        const { jy, jm, jd } = jalaali.toJalaali(gregorianYear, gregorianMonth, gregorianDay);

        // Return the Shamsi date in "YYYY/MM/DD HH:MM" format
        return `${jy}/${jm.toString().padStart(2, '0')}/${jd.toString().padStart(2, '0')} ${hours}:${minutes}`;
    } catch (error) {
        return '_';
    }
}