let currentLevel = 1;

function startGame() {
    document.getElementById('setup-screen').style.display = 'none';
    document.getElementById('stage-1').style.display = 'flex';
}

function showRules() {
    document.getElementById('setup-screen').style.display = 'none';
    document.getElementById('rules-screen').style.display = 'flex';
    document.getElementById('rules-screen').style.flexDirection = 'column';
}

function startActualGame() {
    document.getElementById('rules-screen').style.display = 'none';
    // This triggers your first hardcoded stage
    document.getElementById('stage-1').style.display = 'flex';
}

function wrongAnswer() {
    alert("Error: That's NOT how Shion responds. Try again! 😂");
}

function showProof(imgSrc, level) {
    document.getElementById('stage-' + level).style.display = 'none';
    
    document.getElementById('proof-screen').style.display = 'flex';
    document.getElementById('proof-img').src = imgSrc;
}

function nextStage() {
    document.getElementById('proof-screen').style.display = 'none';
    currentLevel++;
    
    if (currentLevel <= 5) {
        document.getElementById('stage-' + currentLevel).style.display = 'flex';
    } else {
        document.getElementById('congrats-screen').style.display = 'flex';
    }
}

function openLetter() {
    document.getElementById('game-container').style.display = 'none';
    
    const letter = document.getElementById('letter-page');
    letter.classList.remove('hidden');
    
    document.body.style.overflow = 'auto'; 
}

function wrongAnswer() {
    const teaseBox = document.getElementById('tease-overlay');
    const teaseText = document.getElementById('tease-text');
    const teaseEmoji = document.querySelector('.tease-emoji');
    
    const messages = [
        { text: "Nasan ang barillll... - Wifey", emoji: "😠🔫" },
        { text: "Talaga naman... - Cera", emoji: "🙄😑" },
        { text: "Subukan mo! - Crystal", emoji: "😊🔪" },
        { text: "HEH! - Jane", emoji: "😤😠" }
    ];
    
    const randomObj = messages[Math.floor(Math.random() * messages.length)];
    
    teaseText.innerText = randomObj.text;
    teaseEmoji.innerText = randomObj.emoji;
    
    teaseBox.style.display = 'flex';
    
    setTimeout(() => {
        teaseBox.style.display = 'none';
    }, 2500);
}