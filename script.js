document.getElementById('sendButton').addEventListener('click', sendMessage);
let queryCount = 0;

const responses = {
    greeting: "Hello!  ",
    farewell: "Goodbye! !",
    default: "I'm here to help! ***************** more details.",
    limit: "You've reached your query limit ."
};

function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() === "") return;

    queryCount++;
    if (queryCount > 10) {
        addMessageToChat("Gemini", responses.limit);
        return;
    }

    addMessageToChat("User", userInput);
    document.getElementById('userInput').value = "";

    let response;
    if (userInput.toLowerCase().includes("hello")) {
        response = responses.greeting;
    } else if (userInput.toLowerCase().includes("bye")) {
        response = responses.farewell;
    } else {
        response = responses.default;
    }

    addMessageToChat("Gemini", response);
}

function addMessageToChat(sender, message) {
    const chatWindow = document.getElementById('chatWindow');
    const messageElement = document.createElement('div');
    messageElement.className = 'chat-message';
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}
