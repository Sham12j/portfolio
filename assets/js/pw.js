document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Contact Form Validation
    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();
        let name = this.querySelector("input[type='text']").value.trim();
        let email = this.querySelector("input[type='email']").value.trim();
        let message = this.querySelector("textarea").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }
        alert("Message sent successfully!");
        this.reset();
    });

    // Lightbox Effect for Gallery Images
    const galleryImages = document.querySelectorAll(".gallery img");
    galleryImages.forEach(img => {
        img.addEventListener("click", function () {
            const lightbox = document.createElement("div");
            lightbox.id = "lightbox";
            lightbox.style.position = "fixed";
            lightbox.style.top = "0";
            lightbox.style.left = "0";
            lightbox.style.width = "100%";
            lightbox.style.height = "100%";
            lightbox.style.background = "rgba(0,0,0,0.8)";
            lightbox.style.display = "flex";
            lightbox.style.alignItems = "center";
            lightbox.style.justifyContent = "center";
            lightbox.style.zIndex = "1000";

            const imgElement = document.createElement("img");
            imgElement.src = this.src;
            imgElement.style.maxWidth = "90%";
            imgElement.style.maxHeight = "80vh";
            imgElement.style.borderRadius = "10px";
            imgElement.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.4)";

            lightbox.appendChild(imgElement);
            document.body.appendChild(lightbox);

            lightbox.addEventListener("click", function () {
                lightbox.remove();
            });
        });
    });
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function plusSlides(n) {
  slideIndex += n - 1;
  showSlides();
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}


document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll(".social-icon");

    icons.forEach(icon => {
        icon.addEventListener("mouseover", () => {
            icon.style.transform = "scale(1.2)";
        });

        icon.addEventListener("mouseout", () => {
            icon.style.transform = "scale(1)";
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".thumbnail img");
    const modal = document.getElementById("imageModal");
    const fullImage = document.getElementById("fullImage");
    const closeBtn = document.querySelector(".close");

    thumbnails.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "block";
            fullImage.src = img.src;
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

/* Hover*/

document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".thumbnail img");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("fullImage");
    const closeModal = document.querySelector(".close");

    thumbnails.forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "block";
            modalImg.src = this.src;
        });

        img.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
            this.style.transition = "transform 0.3s ease";
            this.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
        });

        img.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "none";
        });
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});


/* Emailer */

document.addEventListener("DOMContentLoaded", function () {
    const emailerImages = document.querySelectorAll("#emailer img");
    const modal = document.createElement("div");
    modal.id = "imageModal";
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.background = "rgba(0,0,0,0.8)";
    modal.style.display = "none";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.zIndex = "1000";

    const modalImg = document.createElement("img");
    modalImg.style.maxWidth = "90%";
    modalImg.style.maxHeight = "80vh";
    modalImg.style.borderRadius = "10px";
    modalImg.style.boxShadow = "0 4px 15px rgba(255, 255, 255, 0.3)";
    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    emailerImages.forEach(img => {
        img.style.transition = "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out";
        img.style.cursor = "pointer";
        
        img.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)";
            this.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.3)";
        });

        img.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "none";
        });

        img.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImg.src = this.src;
        });
    });

    modal.addEventListener("click", function () {
        modal.style.display = "none";
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    dropdown.addEventListener("click", function (event) {
        event.preventDefault();
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });
});

/*Thank You*/
