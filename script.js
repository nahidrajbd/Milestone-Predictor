function calculateMilestones() {
    const birthYearInput = document.getElementById('birth-year').value;
    const highSchoolYearInput = document.getElementById('high-school-year').value;
    const resultsDiv = document.getElementById('results');
    let birthYear;

    // Validate input
    if (!birthYearInput && !highSchoolYearInput) {
        resultsDiv.innerHTML = '<pPlease enter either your year of birth or the year you completed SSC or equivalent.</p>';
        return;
    }

    if (birthYearInput) {
        // If birth year is provided
        birthYear = parseInt(birthYearInput);
    } else if (highSchoolYearInput) {
        // If high school completion year is provided
        birthYear = parseInt(highSchoolYearInput) - 16; // High school completion year - (6 years for school start + 10 years for schooling)
    }

    if (birthYear < 1900 || birthYear > new Date().getFullYear()) {
        resultsDiv.innerHTML = '<p>Please enter a valid year of birth or SSC year.</p>';
        return;
    }

    // Calculate milestones
    const startSchool = birthYear + 6;
    const completePrimary = startSchool + 5;
    const completeHighSchool = completePrimary + 5;
    const completeHigherSecondary = completeHighSchool + 2;
    const startGraduation = completeHigherSecondary;
    const completeGraduation = startGraduation + 5; // Assuming max 5 years for graduation
    const jobExpiry = birthYear + 30;

    // Display results
    resultsDiv.innerHTML = `
        <table>
            <tr>
                <th>Milestone</th>
                <th>Year</th>
            </tr>
            <tr>
                <td>Predicted Birth Year</td>
                <td>${birthYear}</td>
            </tr>
            <tr>
                <td>Start School at Class one</td>
                <td>${startSchool}</td>
            </tr>
            <tr>
                <td>Completes Primary School</td>
                <td>${completePrimary}</td>
            </tr>
            <tr>
                <td>Completes High School (SSC)</td>
                <td>${completeHighSchool}</td>
            </tr>
            <tr>
                <td>Completes Higher Secondary (HSC)</td>
                <td>${completeHigherSecondary}</td>
            </tr>
            <tr>
                <td>Starts Graduation</td>
                <td>${startGraduation}</td>
            </tr>
            <tr>
                <td>Completes Graduation</td>
                <td>${completeGraduation}</td>
            </tr>
            <tr>
                <td>Expires for Job</td>
                <td>${jobExpiry}</td>
            </tr>
        </table>
        <p><strong>Note:</strong> These years are approximate and may vary based on individual circumstances.</p>
    `;
}