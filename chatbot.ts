const chatbotMessages = [
  { question: "Hai! Apa yang kamu rasakan hari ini?", keywords: ["hai", "hello"] },
  { question: "Coba ceritakan lebih detail...", keywords: ["sedih", "stress"] },
  { question: "Kamu tidak sendirian. Mau aku bantu cari konselor?", keywords: ["bantuan", "tolong"] }
];

document.getElementById('open-chatbot').addEventListener('click', () => {
  document.getElementById('chatbot-container').style.display = 'block';
  addBotMessage("Hai! Aku Chatbot Mental Health. Ada yang bisa kubantu?");
});

document.getElementById('user-input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const userMessage = e.target.value;
    addUserMessage(userMessage);
    e.target.value = '';
    
    // Respon otomatis
    setTimeout(() => {
      const botResponse = chatbotMessages.find(msg => 
        msg.keywords.some(keyword => userMessage.toLowerCase().includes(keyword))
      )?.question || "Aku mengerti. Mau coba ceritakan lebih lanjut?";
      addBotMessage(botResponse);
    }, 1000);
  }
});