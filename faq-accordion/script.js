const faqItems = document.querySelectorAll(".faq-item");
const faqContents = document.querySelectorAll('.faq-content');
let changeIcons = document.querySelectorAll('.changeIcon');

faqItems.forEach((item, index) => {

    item.addEventListener('click', () => {
        const currentItem = faqContents[index];
        const isActive = currentItem.classList.contains("active");

        faqContents.forEach((content) => {
            content.classList.remove("active");
        });

        changeIcons.forEach((icon) => {
            icon.innerHTML = "😊";
        })

        if (!isActive) {
            currentItem.classList.add("active");
            changeIcons[index].innerHTML = "😎";
        } 
    });
});