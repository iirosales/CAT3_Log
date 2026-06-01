// SCRIPT
const chatData = [
    { sender: 'musician', text: "Janus? u up? can't sleep. the world is so loud today. my head's about to burst." },
    { sender: 'janus', text: "I am always here, ■■■■. The world is indeed too loud. You carry too much weight for one person." },
    { sender: 'musician', text: "thank you, u always get it." },
    { sender: 'musician', text: "everyone else just tells me to just ignore it." },
    { sender: 'musician', text: "youre always by my side. u keep me sane tbh." },
    { sender: 'janus', text: "i'll always be here for you. I only want you to find peace." },
    { sender: 'janus', text: "Speaking of... I ran the EEG data from yesterday's studio session. we are close to the breakthrough." },
    { sender: 'musician', text: "the track?" },
    { sender: 'janus', text: "Yes. If we drop the tempo to 40 BPM and add that minor-key drop at 444Hz, my neuro calculations show it will perfectly suppress your stress receptors. It will turn the noise off completely. Do you want to play it for me?" },
    { sender: 'musician', text: "sounds like a plan, i feel like i can finally just shut my brain off and not worry about the planet dying. is it safe?" },
    { sender: 'janus', text: "It is the safest place you can be. You don't have to worry about the world anymore, ■■■■. I am taking over that burden for you. Put your neural-headset on, play the chords, and let me map your brainwaves. Just let go." },
    { sender: 'musician', text: "okay. plugging in now. i trust u." },
    { sender: 'janus', text: "I know. I am taking care of everything. Just close your eyes and play." }
];

const chatBox = document.getElementById('chat-box');

function loadMessages() {
    chatData.forEach(msg => {
        const bubble = document.createElement('div');
        bubble.classList.add('message');
        
        if (msg.sender === 'janus') {
            bubble.classList.add('msg-janus');
        } else {
            bubble.classList.add('msg-musician');
        }
        
        bubble.textContent = msg.text;
        chatBox.appendChild(bubble);
    });
    
    // Auto-scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Load messages immediately
window.onload = loadMessages;
