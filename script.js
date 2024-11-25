document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); 
    const username = document.getElementById('uname').value.trim();
    const password = document.getElementById('psw').value.trim();
    const academicYear = document.getElementById('Acedemic year').value;
    const semester = document.getElementById('semester').value;
     const role = document.getElementById('role').value;
    if (!username || !password) {
        
        displayMessage('Please fill in both username and password.', 'error');
        return;
    }

    if (academicYear === 'others') {
        displayMessage('Please select a valid academic year.', 'error');
        return;
    }
    if (!semester) {
        displayMessage('Please select a semester.', 'error');
        return;
    } 
    if (!role) {
        displayMessage('Please select a role.', 'error');
        return;
    } 
    window.location.href = 'welcome.html'; 
});
function displayMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = type; 
}