export const getGeminiResponse = async (message: string): Promise<string> => {
  const loweredMessage = message.toLowerCase().trim();

  // List of variations of "Who created you?" type questions
  const creatorQuestions = [
    "who created you",
    "who made you",
    "who built you",
    "who developed you",
    "who is your creator",
    "who is your developer",
    "who invented you",
    "who programmed you",
    "who coded you"
  ];

  if (creatorQuestions.some((q) => loweredMessage.includes(q))) {
    return "I was created by web developer Bekjon as part of the KindConnect project.";
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
