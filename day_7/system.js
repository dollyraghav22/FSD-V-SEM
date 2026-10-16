const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const course = document.getElementById("course").value;
    const dob = document.getElementById("dob").value;
    const address = document.getElementById("address").value;
    const genderElement = document.querySelector('input[name="gender"]:checked');
    const gender = genderElement.value;
    const row = document.createElement("tr");
    row.innerHTML =`
        <td>${name}</td>
        <td>${roll}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>${course}</td>
        <td>${gender}</td>
        <td>${dob}</td>
        <td>${address}</td>
        <td>
        <button class="delete-btn" onclick="deleteStudent(this)">Delete</button></td>
    `;
    table.appendChild(row);
    form.reset();
});
function deleteStudent(button) {
    button.parentElement.parentElement.remove();
}