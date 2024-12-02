// Function to toggle the FAQ body visibility
function toggleFaq(header) {
  const faqItem = header.parentElement;
  const faqBody = faqItem.querySelector('.faq-body');
  const isActive = header.classList.contains('active');

  // Collapse all open items
  document.querySelectorAll('.faq-header').forEach((el) => {
    el.classList.remove('active');
    el.parentElement.querySelector('.faq-body').style.display = 'none';
  });

  // Expand clicked item if it was not active
  if (!isActive) {
    header.classList.add('active');
    faqBody.style.display = 'block';
  }
}