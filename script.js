<<<<<<< HEAD
```javascript
$(document).ready(function () {

    $("#studentForm").submit(function (event) {

        event.preventDefault();

        // Clear previous error messages
        $("small").text("");

        let valid = true;


        // First Name
        let firstName = $("#firstName").val().trim();

        if (firstName === "") {

            $("#firstNameError").text(
                "First name is required"
            );

            valid = false;
        }


        // Last Name
        let lastName = $("#lastName").val().trim();

        if (lastName === "") {

            $("#lastNameError").text(
                "Last name is required"
            );

            valid = false;
        }


        // Email
        let email = $("#email").val().trim();

        let emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {

            $("#emailError").text(
                "Email is required"
            );

            valid = false;

        } else if (!emailPattern.test(email)) {

            $("#emailError").text(
                "Enter a valid email"
            );

            valid = false;
        }


        // Phone Number
        let phone = $("#phone").val().trim();

        if (phone === "") {

            $("#phoneError").text(
                "Phone number is required"
            );

            valid = false;

        } else if (!/^[0-9]{10}$/.test(phone)) {

            $("#phoneError").text(
                "Enter exactly 10 digits"
            );

            valid = false;
        }


        // Date of Birth
        if ($("#dob").val() === "") {

            $("#dobError").text(
                "Date of birth is required"
            );

            valid = false;
        }


        // Gender
        if ($("input[name='gender']:checked").length === 0) {

            $("#genderError").text(
                "Please select your gender"
            );

            valid = false;
        }


        // Course
        if ($("#course").val() === "") {

            $("#courseError").text(
                "Please select a course"
            );

            valid = false;
        }


        // Department
        if ($("#department").val() === "") {

            $("#departmentError").text(
                "Please select a department"
            );

            valid = false;
        }


        // Address
        if ($("#address").val().trim() === "") {

            $("#addressError").text(
                "Address is required"
            );

            valid = false;
        }


        // Password
        let password = $("#password").val();

        if (password === "") {

            $("#passwordError").text(
                "Password is required"
            );

            valid = false;

        } else if (password.length < 6) {

            $("#passwordError").text(
                "Password must contain at least 6 characters"
            );

            valid = false;
        }


        // Confirm Password
        let confirmPassword =
            $("#confirmPassword").val();

        if (confirmPassword === "") {

            $("#confirmPasswordError").text(
                "Please confirm your password"
            );

            valid = false;

        } else if (password !== confirmPassword) {

            $("#confirmPasswordError").text(
                "Passwords do not match"
            );

            valid = false;
        }


        // Terms and Conditions
        if (!$("#terms").is(":checked")) {

            $("#termsError").text(
                "Please accept the terms and conditions"
            );

            valid = false;
        }


        // Registration Successful
        if (valid) {

            $("#successMessage").slideDown();

            $("#studentForm")[0].reset();

            setTimeout(function () {

                $("#successMessage").slideUp();

            }, 4000);
        }

    });


    // Allow only numbers in phone number
    $("#phone").on("input", function () {

        this.value =
            this.value.replace(/[^0-9]/g, "");

    });

});
```
=======
// Event Search using jQuery

$(document).ready(function () {

    $("#searchEvent").on("keyup", function () {

        let searchText = $(this).val().toLowerCase();

        $(".event-card").each(function () {

            let eventName = $(this).find(".card-title").text().toLowerCase();

            if (eventName.includes(searchText)) {
                $(this).show();
            } else {
                $(this).hide();
            }

        });

    });


    // Register Button

    $(".register-button").click(function () {

        let eventName = $(this)
            .closest(".card")
            .find(".card-title")
            .text()
            .trim();

        $("#event").val(eventName);

        $("#register")[0].scrollIntoView({
            behavior: "smooth"
        });

    });


    // Registration Form Validation

    $("#registrationForm").submit(function (event) {

        event.preventDefault();

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let phone = $("#phone").val().trim();
        let selectedEvent = $("#event").val();
        let tickets = $("#tickets").val();


        if (name === "") {

            alert("Please enter your name.");
            return;

        }


        if (email === "") {

            alert("Please enter your email.");
            return;

        }


        if (phone === "") {

            alert("Please enter your phone number.");
            return;

        }


        if (selectedEvent === "") {

            alert("Please select an event.");
            return;

        }


        if (tickets === "" || tickets < 1) {

            alert("Please enter the number of tickets.");
            return;

        }


        // Show success message

        $("#successMessage")
            .stop(true, true)
            .fadeIn();

        // Clear form

        $("#registrationForm")[0].reset();


        // Hide success message after 4 seconds

        setTimeout(function () {

            $("#successMessage").fadeOut();

        }, 4000);

    });

});
>>>>>>> e56d54a676ae70d696fcacf74b41b5a190a97e11
