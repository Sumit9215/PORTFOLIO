// Function to open the modal
function openModal() {
    document.getElementById('addSkillModal').style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    document.getElementById('addSkillModal').style.display = 'none';
}

// Handling form submission
document.getElementById('addSkillForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Getting form values
    const domain = document.getElementById('domain').value;
    const skill = document.getElementById('skill').value;
    const percentage = document.getElementById('percentage').value;

    // Create a new skill card and append it to the skills grid
    const skillsGrid = document.getElementById('skillsGrid');

    const skillCard = document.createElement('div');
    skillCard.classList.add('skill-card');

    const skillHeader = document.createElement('h3');
    skillHeader.textContent = domain;

    const skillElement = document.createElement('div');
    skillElement.classList.add('skill');

    const skillSpan = document.createElement('span');
    skillSpan.textContent = skill;

    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');

    const progress = document.createElement('div');
    progress.classList.add('progress');
    progress.style.width = percentage + '%';

    // Append elements
    progressBar.appendChild(progress);
    skillElement.appendChild(skillSpan);
    skillElement.appendChild(progressBar);
    skillCard.appendChild(skillHeader);
    skillCard.appendChild(skillElement);
    skillsGrid.appendChild(skillCard);

    // Clear form fields and close modal
    document.getElementById('addSkillForm').reset();
    closeModal();
});
