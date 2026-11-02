
// ==========================================
// ENQUIRY FORM EMAILJS SUBMISSION
// ==========================================

const enquiryForm = document.getElementById("enquiryForm");
const enquiryFeedback = document.getElementById("enquiryFeedback");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function (event) {

        event.preventDefault();

        if (!enquiryForm.checkValidity()) {
            enquiryForm.reportValidity();
            return;
        }

        const submitButton = enquiryForm.querySelector('button[type="submit"]');

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "Sending...";
        }

        if (enquiryFeedback) {
            enquiryFeedback.textContent = "Sending your enquiry...";
        }

        emailjs.sendForm(
            "service_rbqdao5",
            "template_csyg523",
            enquiryForm,
            {
                publicKey: "jfL0B2thju9J9WzVE"
            }
        )
        .then(function () {

            if (enquiryFeedback) {
                enquiryFeedback.textContent =
                    "Thank you! Your enquiry has been sent successfully. We will contact you soon.";
            }

            enquiryForm.reset();

        })
        .catch(function (error) {

            console.error("EmailJS error:", error);

            if (enquiryFeedback) {
                enquiryFeedback.textContent =
                    "Sorry, your enquiry could not be sent. Please try again later.";
            }

        })
        .finally(function () {

            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = "Submit Enquiry";
            }

        });

    });

}


 // ==========================================
// AUTOMATIC EVENT TYPE SELECTION
// ==========================================

const eventTypeField = document.getElementById("eventType");

if (eventTypeField) {

    const urlParameters = new URLSearchParams(window.location.search);
    const selectedService = urlParameters.get("service");

    const serviceOptions = {
        wedding: "Wedding",
        birthday: "Birthday",
        corporate: "Corporate Event",
        catering: "Catering"
    };

    if (serviceOptions[selectedService]) {
        eventTypeField.value = serviceOptions[selectedService];
    }

}
