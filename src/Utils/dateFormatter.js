// Function to format the date
export const getFormattedDate = (date) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const day = date.getDate();
    let daySuffix;

    if (day > 3 && day < 21) daySuffix = 'th'; // Covers 11th-19th
    else {
        switch (day % 10) {
            case 1: daySuffix = 'st'; break;
            case 2: daySuffix = 'nd'; break;
            case 3: daySuffix = 'rd'; break;
            default: daySuffix = 'th';
        }
    }

    // Use toLocaleDateString for the month and year, and manually add the day with suffix
    return `${day}${daySuffix} ${date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`;
};