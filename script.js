document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("resume-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const inputs = form.elements;
        let isValid = true;

        // Validate inputs
        for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i];
            if (input.hasAttribute("required") && !input.value.trim()) {
                isValid = false;
                input.classList.add("error"); // Add error class for invalid inputs
            } else {
                input.classList.remove("error"); // Remove error class if valid
            }
        }

        // If valid, generate the resume
        if (isValid) {
            generateResume(inputs);
        }
    });
});

function generateResume(inputs) {
    const name = inputs.namedItem("name").value;
    const email = inputs.namedItem("email").value;
    const phone = inputs.namedItem("phone").value;
    const education = inputs.namedItem("education").value;
    const university = inputs.namedItem("university").value;
    const gradYear = inputs.namedItem("gradYear").value;
    const jobTitle = inputs.namedItem("jobTitle").value;
    const company = inputs.namedItem("company").value;
    const years = inputs.namedItem("years").value;
    const skills = inputs.namedItem("skills").value;

    const resumeOutput = `
        <div class="resume-section">
            <h2>Resume</h2>
            <p><strong>Name:</strong> <span contenteditable="true" class="editable">${name}</span></p>
            <p><strong>Email:</strong> <span contenteditable="true" class="editable">${email}</span></p>
            <p><strong>Phone:</strong> <span contenteditable="true" class="editable">${phone}</span></p>
        </div>
        <div class="resume-section">
            <h3>Education</h3>
            <p><strong>Degree:</strong> <span contenteditable="true" class="editable">${education}</span></p>
            <p><strong>University:</strong> <span contenteditable="true" class="editable">${university}</span></p>
            <p><strong>Graduation Year:</strong> <span contenteditable="true" class="editable">${gradYear}</span></p>
        </div>
        <div class="resume-section">
            <h3>Work Experience</h3>
            <p><strong>Job Title:</strong> <span contenteditable="true" class="editable">${jobTitle}</span></p>
            <p><strong>Company:</strong> <span contenteditable="true" class="editable">${company}</span></p>
            <p><strong>Years Worked:</strong> <span contenteditable="true" class="editable">${years}</span></p>
        </div>
        <div class="resume-section">
            <h3>Skills</h3>
            <p><span contenteditable="true" class="editable">${skills.split(',').map(skill => skill.trim()).join(', ')}</span></p>
        </div>
    `;

    document.getElementById("resume-output").innerHTML = resumeOutput; // Update resume output
}