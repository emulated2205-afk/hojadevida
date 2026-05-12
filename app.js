const card = document.getElementById('card');
const cardFace = document.querySelector('.card-face');

card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;
    
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    
    
    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;
    cardFace.style.setProperty('--mouse-x', `${percentX}%`);
    cardFace.style.setProperty('--mouse-y', `${percentY}%`);
    
    
    const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) + 90;
    cardFace.style.setProperty('--angle', `${angle}deg`);
});

card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0)';
});