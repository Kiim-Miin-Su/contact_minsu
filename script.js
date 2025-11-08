// Profile image click effect
const profileImg = document.getElementById('profile-img');
profileImg.addEventListener('click', () => {
    this.style.transform = 'scale(1.1) rotate(10deg)';
    setTimeout(() => {
        this.style.transform = 'scale(1) rotate(0deg)';
    }, 300);
});

// Phone contact click functionality
const phoneInfo = document.querySelector('.phone-info');
phoneInfo.addEventListener('click', () => {
    if (confirm('전화를 걸까요?')) {
        const phoneNumber = document.getElementById('phone-number').textContent;
        window.open('tel:' + phoneNumber);
    }
});

// Address click functionality
const addressInfo = document.querySelector('.address-info');
addressInfo.addEventListener('click', () => {
    if (confirm('지도에서 주소를 확인하시겠습니까?')) {
        const address = document.getElementById('address').split(' ').join('+'); // 주소 공백 -> + 변환
        window.open('https://maps.google.com/?q=' + address, '_blank');
    }
});

// Sparkle effect on hover for all interactive elements
function createSparkle(element, event) {
    const rect = element.getBoundingClientRect();
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = (event.clientX - rect.left) + 'px';
    sparkle.style.top = (event.clientY - rect.top) + 'px';
    element.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Add sparkle effect to interactive elements
document.querySelectorAll('.container-phone, .container-news, .container-aside, .aside-news, .phone-info, .address-info').forEach(element => {
    element.addEventListener('mouseenter', (event) => {
        createSparkle(this, event);
    });
});

// Smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add floating animation to cards
const cards = document.querySelectorAll('.container-phone, .container-news, .container-aside');
cards.forEach((card, index) => {
    card.style.animation = `float ${3 + index * 0.5}s ease-in-out infinite`;
});

// Add CSS for floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-5px); }
    }
`;
document.head.appendChild(style);