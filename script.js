// ===== CONFIGURATION =====
const loveMessages = [
    "You make my worst days better 🌸",
    "You're the only notification I see 📱❤️",
    "Everything feels warmer with you ✨",
    "You're the best thing that's ever happened to me 🥰",
    "My heart skips a beat every time I see you 💓",
    "You make ordinary moments extraordinary 🌟",
    "Being with you feels like home 🏡❤️"
];

let currentMessageIndex = 0;
let tapCount = 0;

// ===== FLOATING HEARTS BACKGROUND =====
function createFloatingHearts() {
    const heartsContainer = document.getElementById('heartsContainer');
    const heartEmojis = ['💕', '💖', '💗', '💓', '💝'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 8000);
    }, 800);
}

// ===== SCREEN TRANSITION =====
function goToScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
}

// ===== SCREEN 1: INTRO =====
document.getElementById('startBtn').addEventListener('click', () => {
    goToScreen('screen2');
    showNextMessage();
});

// ===== SCREEN 2: LOVE MESSAGES =====
function showNextMessage() {
    const messageElement = document.getElementById('loveMessage');
    
    if (currentMessageIndex < loveMessages.length) {
        messageElement.textContent = loveMessages[currentMessageIndex];
        currentMessageIndex++;
    } else {
        goToScreen('screen3');
    }
}

document.getElementById('nextMessageBtn').addEventListener('click', () => {
    if (currentMessageIndex < loveMessages.length) {
        showNextMessage();
    } else {
        goToScreen('screen3');
    }
});

// ===== SCREEN 3: HEART INTERACTION =====
const tapHeart = document.getElementById('tapHeart');
const tapCounter = document.getElementById('tapCounter');

tapHeart.addEventListener('click', () => {
    tapCount++;
    tapCounter.textContent = tapCount;
    
    // Scale effect
    const scale = 1 + (tapCount * 0.1);
    tapHeart.style.transform = `scale(${scale})`;
    
    // Trigger pop animation
    tapHeart.style.animation = 'none';
    setTimeout(() => {
        tapHeart.style.animation = 'heartPop 0.3s ease';
    }, 10);
    
    // Check if reached 5 taps
    if (tapCount >= 5) {
        setTimeout(() => {
            // Big final pop
            tapHeart.style.transform = 'scale(2)';
            tapHeart.style.transition = 'transform 0.5s ease';
            
            setTimeout(() => {
                goToScreen('screen4');
            }, 600);
        }, 300);
    }
});

// ===== SCREEN 4: THE QUESTION =====
document.getElementById('yesBtn1').addEventListener('click', () => {
    goToScreen('screen5');
    createConfetti();
});

document.getElementById('yesBtn2').addEventListener('click', () => {
    goToScreen('screen5');
    createConfetti();
});

// ===== SCREEN 5: CONFETTI ANIMATION =====
function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#ff6b9d', '#ffa5c0', '#ffb3cc', '#ffc4d6', '#ffe5f1', '#e0bbe4', '#d4a5a5'];
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confettiPiece = document.createElement('div');
            confettiPiece.classList.add('confetti-piece');
            confettiPiece.style.left = Math.random() * 100 + '%';
            confettiPiece.style.background = colors[Math.floor(Math.random() * colors.length)];
            confettiPiece.style.width = (Math.random() * 10 + 5) + 'px';
            confettiPiece.style.height = (Math.random() * 10 + 5) + 'px';
            confettiPiece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confettiPiece.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confettiPiece.style.animationDelay = (Math.random() * 0.5) + 's';
            
            confettiContainer.appendChild(confettiPiece);
            
            setTimeout(() => {
                confettiPiece.remove();
            }, 4000);
        }, i * 30);
    }
}

// ===== INITIALIZE ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
    
    // Ensure only screen 1 is visible on load
    goToScreen('screen1');
});

// ===== PREVENT ZOOM ON DOUBLE TAP (iOS) =====
let lastTouchEnd = 0;
document.addEventListener('touchend', (event) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// ===== EASTER EGG: Shake device for extra hearts =====
if (window.DeviceMotionEvent) {
    let lastX = 0, lastY = 0, lastZ = 0;
    let shakeThreshold = 15;
    
    window.addEventListener('devicemotion', (event) => {
        const acceleration = event.accelerationIncludingGravity;
        const x = acceleration.x;
        const y = acceleration.y;
        const z = acceleration.z;
        
        const deltaX = Math.abs(x - lastX);
        const deltaY = Math.abs(y - lastY);
        const deltaZ = Math.abs(z - lastZ);
        
        if (deltaX > shakeThreshold || deltaY > shakeThreshold || deltaZ > shakeThreshold) {
            // Create burst of hearts
            const heartsContainer = document.getElementById('heartsContainer');
            for (let i = 0; i < 10; i++) {
                const heart = document.createElement('div');
                heart.classList.add('floating-heart');
                heart.textContent = '💖';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.animationDuration = '3s';
                heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
                heartsContainer.appendChild(heart);
                
                setTimeout(() => heart.remove(), 3000);
            }
        }
        
        lastX = x;
        lastY = y;
        lastZ = z;
    });
}
