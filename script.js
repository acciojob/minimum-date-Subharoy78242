function minDate(dates) {
    // Initialize minDate with a large future date
    let minDate = new Date('9999-12-31');
    
    // Loop through each date string
    for (let dateStr of dates) {
        // Convert date string to Date object
        let currentDate = new Date(dateStr);
        
        // Compare with minDate
        if (currentDate < minDate) {
            minDate = currentDate;
        }
    }
    
    // Format minDate to YYYY/MM/DD
    let year = minDate.getFullYear();
    let month = String(minDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    let day = String(minDate.getDate()).padStart(2, '0');
    
    return `${year}/${month}/${day}`;
}

// Example usage:
let dates1 = ["2023/03/01", "2023/03/02", "2023/03/03"];
console.log(minDate(dates1)); // Output: "2023/03/01"

let dates2 = ["2023/01/01", "2023/02/02", "2022/12/31"];
console.log(minDate(dates2)); // Output: "2022/12/31"