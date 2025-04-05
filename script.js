document.addEventListener('DOMContentLoaded', () => {
    const scrollButton = document.getElementById('scrollButton');
    const videoSection = document.getElementById('videoSection');
    const funVideo = document.getElementById('funVideo');

    // Smooth scroll to video section
    scrollButton.addEventListener('click', () => {
        videoSection.scrollIntoView({ behavior: 'smooth' });
        
        // Add some fun effects
        scrollButton.style.transform = 'scale(1.1)';
        setTimeout(() => {
            scrollButton.style.transform = 'scale(1)';
        }, 200);

        // Start playing the video after scrolling
        setTimeout(() => {
            funVideo.play();
        }, 1000);
    });

    // Add some fun hover effects to the button
    scrollButton.addEventListener('mouseover', () => {
        scrollButton.style.transform = 'rotate(5deg)';
    });

    scrollButton.addEventListener('mouseout', () => {
        scrollButton.style.transform = 'rotate(0deg)';
    });

    // Add some fun effects to the main heading
    const mainHeading = document.querySelector('h2');
    mainHeading.addEventListener('mouseover', () => {
        mainHeading.style.transform = 'scale(1.1)';
        mainHeading.style.transition = 'transform 0.3s ease';
    });

    mainHeading.addEventListener('mouseout', () => {
        mainHeading.style.transform = 'scale(1)';
    });
}); 