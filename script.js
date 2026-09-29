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