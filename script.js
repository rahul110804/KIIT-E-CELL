document.addEventListener('DOMContentLoaded', () => {
    const purposeText = "KIIT E-Cell fosters entrepreneurship by promoting innovation, building networks, and providing resources. It handles everything from marketing and content creation to tech development and research, creating a dynamic environment for aspiring entrepreneurs to grow and succeed.";
    
    let index = 0;
    const typingSpeed = 50;

    function type() {
        if (index < purposeText.length) {
            document.getElementById('purpose').textContent += purposeText.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        }
    }

    type();
});
