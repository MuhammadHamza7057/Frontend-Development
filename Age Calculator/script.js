function calculateAge() {
    // Get the current date values
    let cy = parseInt(document.getElementById('cy').value);
    let cm = parseInt(document.getElementById('cm').value);
    let cd = parseInt(document.getElementById('cd').value);

    // Get the birth date values
    let by = parseInt(document.getElementById('by').value);
    let bm = parseInt(document.getElementById('bm').value);
    let bd = parseInt(document.getElementById('bd').value);

    // Calculate age in years
    let newy = cy - by;

    // Calculate months
    let newm;
    if (cm >= bm) {
        newm = cm - bm;
    } else {
        newm = cm + (12 - bm);
        newy--; // Decrease a year if current month is before the birth month
    }

    // Calculate days
    let newd;
    if (cd >= bd) {
        newd = cd - bd;
    } else {
        newd = cd + (30 - bd);
        newm--; // Decrease a month if current day is before the birth day
    }

    // Output the result
    document.getElementById('result').innerHTML = `The Age is: ${newy} Years, ${newm} Months, and ${newd} Days.`;
}
