const DPI_RATIO = 0.664;
const conversions = [];

const storeConversion = () => {
    // Get the number entered in the input box
    const originalNumber = parseInt(document.getElementById("numberToConvert").value);

    // Convert that number to the 305dpi equivalent according to the ratio
    const convertedNumber = Math.round(originalNumber / DPI_RATIO);

    // Check if the entered number exists already or not.
    const doesExist = conversions.some(conversion => conversion.originalValue === originalNumber);

    // If it does not exist, add an object to our array of conversions
    if (!doesExist) {
        conversions.push({
            originalValue: originalNumber,
            convertedValue: convertedNumber
        });
    }

    // Clear the input box
    document.getElementById("numberToConvert").value = "";

    updateTable(originalNumber);
}

const updateTable = (lastNumberEntered) => {
    // Sort the conversions array by the entered numbers
    const sortedRows = conversions.sort((a, b) => a.originalValue - b.originalValue);
    // Create an array of table row elements with the corresponding old and new values
    const tableRows = sortedRows.map(({ originalValue, convertedValue }) => (
        `<tr class="conversionRow ${originalValue === lastNumberEntered ? 'lastAdded' : ''}">
            <td>${originalValue}</td>
            <td>${convertedValue}</td>
        </tr>`
    ));

    // Turn the array of table rows into one long string of html, and then insert it inside the table body element
    document.getElementById("conversionTable_Body").innerHTML = tableRows.join('');
}