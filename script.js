// SCROLL TO SECTION
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// CHATBOT (Mocked for Hackathon)
function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (!message) return;

  appendMessage(message, "user");
  input.value = "";

  // Get bot reply
  const botReply = getBotReply(message);
  appendMessage(botReply, "bot");
}

function appendMessage(text, sender) {
  const chat = document.getElementById("chatMessages");
  const div = document.createElement("div");
  div.classList.add("message", sender);
  div.textContent = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

// Mocked bot replies
function getBotReply(message) {
  message = message.toLowerCase();

  // Destinations
  if (message.includes("netarhat")) {
    return "Netarhat is a beautiful hill station in Jharkhand, famous for sunrise points and serene landscapes.";
  } 
  if (message.includes("betla")) {
    return "Betla National Park is a wildlife sanctuary in Jharkhand, home to tigers, elephants, and rich flora.";
  } 
  if (message.includes("hundru")) {
    return "Hundru Falls is one of the tallest waterfalls in Jharkhand, surrounded by lush forests.";
  }

  // Culture
  if (message.includes("dance") || message.includes("tribal")) {
    return "Jharkhand's tribal dances are vibrant and colorful, reflecting the rich culture of local communities.";
  } 
  if (message.includes("handicraft") || message.includes("crafts")) {
    return "Support local artisans! Jharkhand has unique handicrafts made from bamboo, clay, and fabrics.";
  }

  // Marketplace
  if (message.includes("buy") || message.includes("marketplace")) {
    return "You can explore Jharkhand's marketplace to buy authentic crafts and souvenirs.";
  }

  // Default
  return "Explore Jharkhand's eco and cultural destinations, festivals, and marketplace. Ask me about a place!";
}
