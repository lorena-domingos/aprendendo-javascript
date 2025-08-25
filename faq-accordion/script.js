const faqItems = document.querySelectorAll(".faq-item");
const faqContents = document.querySelectorAll('.faq-content');
let changeIcon = document.querySelector('#changeIcon');

faqItems.forEach((item, index) => {

    item.addEventListener('click', () => {
        const currentItem = faqContents[index];
        const isActive = currentItem.classList.contains("active");

        faqContents.forEach((content) => {
            content.classList.remove("active");
        });

        if (!isActive) {
            currentItem.classList.add("active");
            changeIcon.innerHTML = "😎";
        } else {
            changeIcon.innerHTML = "😊";
        }
    });
});