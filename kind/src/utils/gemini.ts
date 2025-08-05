export const getGeminiResponse = async (message: string): Promise<string> => {
  const loweredMessage = message.toLowerCase().trim();

  // All possible variations of "Who created you?" type questions
  const creatorQuestions = [
    // Basic forms
    "who created you",
    "who made you",
    "who built you",
    "who developed you",
    "who coded you",
    "who programmed you",
    "who invented you",

    // Extended forms
    "who is your creator",
    "who is your developer",
    "who is your builder",
    "who is your maker",
    "who is your inventor",
    "who is your programmer",

    // With extra words
    "can you tell me who created you",
    "can you tell me who made you",
    "can you tell me who built you",
    "can you tell me who developed you",
    "can you tell me who invented you",
    "can you tell me who coded you",
    "can you tell me who programmed you",

    // Reversed / indirect
    "who was your creator",
    "who was your developer",
    "who was your builder",
    "who was your inventor",
    "who was your programmer",

    // Variations with AI/chatbot/system
    "who created this ai",
    "who developed this ai",
    "who made this chatbot",
    "who built this system",
    "who coded this bot",

    // Extra wordings
    "who designed you",
    "who wrote you",
    "who engineered you",
    "who set you up",

    // Slang / short
    "who did you",
    "who owns you",
    "who made this",
    "who owns this ai",

    // Common typos (optional)
    "who creatd you",
    "who devloped you",
    "who codedd you"
  ];

  // Check if message contains any of the creator-related questions
  if (creatorQuestions.some((q) => loweredMessage.includes(q))) {
    return "I was created by Bekjon web developer as part of the KindConnect project.";
  }

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" +
        import.meta.env.VITE_GEMINI_API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: message,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();
    const content = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    return content || "The AI could not generate a response.";
  } catch (error) {
    console.error("Gemini API error:", error);
    return "Sorry, I couldn't respond. Please try again.";
  }
};
