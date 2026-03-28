function calculateAge() {

    const dobInput = document.getElementById("dob").value;
    const result = document.getElementById("result");

    // ✅ Input Validation
    if (!dobInput) {
        result.innerHTML = "⚠ Please select your Date of Birth";
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    if (dob > today) {
        result.innerHTML = "⚠ Future date is not allowed";
        return;
    }

    // Calculate difference
    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    // Adjust days
    if (days < 0) {
        months--;
        const previousMonth =
            new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += previousMonth;
    }

    // Adjust months
    if (months < 0) {
        years--;
        months += 12;
    }

    // Output result
    result.innerHTML =
        ` Age: ${years} Years, ${months} Months, ${days} Days`;
}
