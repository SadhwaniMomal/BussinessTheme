const testimonials = [
    {
      img: "../assest/testimonials-2.jpg",
      name: "Jena Karlis",
      role: "Store Owner",
      stars: 5,
      quote: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore.",
    },
    {
      img: "../assest/testimonials-5.jpg",
      name: "John Doe",
      role: "Web Developer",
      stars: 4,
      quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      img: "../assest/testimonials-5.jpg",
      name: "Anna Smith",
      role: "Graphic Designer",
      stars: 3,
      quote: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi.",
    },
  ];
  
  // Select DOM elements
  const testimonialImg = document.getElementById("testimonial-img");
  const testimonialName = document.getElementById("testimonial-name");
  const testimonialRole = document.getElementById("testimonial-role");
  const testimonialStars = document.getElementById("testimonial-stars");
  const testimonialQuote = document.getElementById("testimonial-quote");
  const dots = document.querySelectorAll(".dot");
  
  // Function to update the testimonial
  function updateTestimonial(index) {
    const testimonial = testimonials[index];
  
    // Update content
    testimonialImg.src = testimonial.img;
    testimonialName.textContent = testimonial.name;
    testimonialRole.textContent = testimonial.role;
    testimonialStars.innerHTML = Array(testimonial.stars)
      .fill('<i class="fas fa-star text-warning"></i>')
      .join("");
    testimonialQuote.innerHTML = `
      <i class="fas fa-quote-left"></i>
      ${testimonial.quote}
      <i class="fas fa-quote-right"></i>
    `;
  
    // Update active dot
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }
  
  // Add event listeners to dots
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.dataset.index, 10);
      updateTestimonial(index);
    });
  });
  
  // Initialize the first testimonial
  updateTestimonial(0);
  