const typingText = document.querySelector(".typing-text p");
inpField = document.querySelector(".wrapper .input-field")

function randomParagraph() {
    //getting random number and it'll always less than the paragraphs length
    let randIndex = Math.floor(Math.random() * paragraphs.length);
    //getting random item from the paragraphs array, splitting all characters
    //of it , adding each character insde span and then adding this span inside p tag
    paragraphs[randIndex].split("").forEach(span => {
        let spanTag = `<span>${span}</span>`;
        typingText.innerHTML += spanTag;
    });

    //focusing input field on keydown
    document.addEventListener("keydown", () => inpField.focus());
}

randomParagraph();