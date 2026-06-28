function login() {

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (username === "admin" && password === "12345") {

        alert("Login Successful!");
        window.location.href = "./work.html";

    } else {

        alert("Invalid Username or Password!");

    }

}

function logout() {

    let confirmLogout = confirm("Are you sure you want to logout?");

    if (confirmLogout) {
        window.location.href = "./index.html";
    }

}

function submitForm() {

    let fullname = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let department = document.getElementById("department").value;

    if (fullname === "") {
        alert("Please enter your Full Name.");
        document.getElementById("fullname").focus();
        return;
    }

    if (email === "") {
        alert("Please enter your Email Address.");
        document.getElementById("email").focus();
        return;
    }

    if (department === "") {
        alert("Please select your Department.");
        document.getElementById("department").focus();
        return;
    }

    alert(
        "Registration Completed Successfully!\n\n" +
        "Name: " + fullname +
        "\nEmail: " + email +
        "\nDepartment: " + department
    );

    document.getElementById("fullname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("department").selectedIndex = 0;

    let gender = document.getElementsByName("gender");
    for (let i = 0; i < gender.length; i++) {
        gender[i].checked = false;
    }

    let skills = document.querySelectorAll("input[type='checkbox']");
    skills.forEach(skill => skill.checked = false);

    document.getElementById("fullname").focus();

}
