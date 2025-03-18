document.addEventListener("DOMContentLoaded", () => {
    // Responsive Navbar Toggle
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links li a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    // Automatic Scrolling Image Slider
    const sliderTrack = document.querySelector(".slider-track");
    const slides = Array.from(document.querySelectorAll(".slide"));

    slides.forEach(slide => {
        let clone = slide.cloneNode(true);
        sliderTrack.appendChild(clone);
    });

    // Open Popup on Login Button Click
    const loginBtn = document.querySelector(".login-btn");
    const popupForm = document.getElementById("popup-form");
    const closeBtn = document.getElementById("close-popup");
    const form = document.getElementById("application-form");

    loginBtn.addEventListener("click", () => {
        popupForm.style.display = "flex";
        document.body.style.overflow = "hidden"; // Prevent scrolling
    });

    closeBtn.addEventListener("click", () => {
        popupForm.style.display = "none";
        document.body.style.overflow = "auto"; // Restore scrolling
    });

    // Handle Form Submission
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const fullName = document.getElementById("full-name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!fullName || !email || !phone || !message) {
            alert("Please fill in all the fields.");
            return;
        }

        console.log("User Details Submitted:", { fullName, email, phone, message });
        alert("Your application has been submitted successfully!");

        popupForm.style.display = "none";
        document.body.style.overflow = "auto";
        form.reset();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.querySelector(".footer-bottom p");
    const currentYear = new Date().getFullYear();
    yearSpan.innerHTML = `© Genovate Company, ${currentYear}`;
});
function openForm() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let isChecked = false;

    // Check if at least one checkbox is selected
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            isChecked = true;
        }
    });

    if (!isChecked) {
        alert("Please select at least one option before continuing.");
        return;
    }

    // Hide the options section and show the application form
    document.querySelector('.options').style.display = 'none';
    document.getElementById('applicationForm').style.display = 'block';
}

function submitForm() {
    const fullName = document.getElementById('fullName').value.trim();
    const emailAddress = document.getElementById('emailAddress').value.trim();
    const goals = document.getElementById('goals').value.trim();
    const errorMessage = document.getElementById('error-message');

    // Validate the form fields
    if (fullName === "" || emailAddress === "" || goals === "") {
        errorMessage.textContent = "Please fill out all fields.";
        return;
    }

    // Clear error message and display success
    errorMessage.textContent = "";
    alert("Form submitted successfully!");
    
    // Redirect to the home page after form submission (adjust the URL as needed)
    window.location.href = "index.html";  // Replace with your actual home page URL
}
const checkboxes = document.querySelectorAll('.checkbox-group input[type="checkbox"]');

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            checkboxes.forEach((cb) => {
                if (cb !== this) cb.checked = false;
            });
        }
    });
});

function showPopup() {
    document.getElementById("popupForm").style.display = "block";
}

function hidePopup() {
    document.getElementById("popupForm").style.display = "none";
}

function submitForm(event) {
    event.preventDefault();
    alert("Form Submitted Successfully!");
    hidePopup();
    document.getElementById("applicationForm").reset();
}

const images = {
    trending: [
        "./image/3.jpg",
        "./image/2.jpg",
        "./image/1.jpg"
    ],
    acting: [
        "./image/1.jpg",
        "./image/2.jpg",
        "./image/3.jpg"
    
    ],
    "art-design": [
        "./image/2.jpg",
        "./image/3.jpg",
        "./image/1.jpg"
    ],
    business: [
        "./image/3.jpg",
        "./image/1.jpg",
        "./image/2.jpg"
    ],
    community: [
        "./image/1.jpg",
        "./image/3.jpg",
        "./image/5.jpg"
    ],
    "film-tv": [
        "./image/5.jpg",
        "./image/4.jpg",
        "./image/3.jpg"
    ],
    "food-drink": [
        "./image/3.jpg",
        "./image/4.jpg",
        "./image/5.jpg"
    ],
    games: [
        "./image/4.jpg",
        "./image/5.jpg",
        "./image/2.jpg"
    ],
    health: [
        "./image/1.jpg",
        "./image/3.jpg",
        "./image/5.jpg"
    ],
    music: [
        "./image/2.jpg",
        "./image/3.jpg",
        "./image/4.jpg"
    ]
};

function showCategory(category) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";
    images[category].forEach((imgUrl) => {
        const img = document.createElement("img");
        img.src = imgUrl;
        gallery.appendChild(img);
    });
}

