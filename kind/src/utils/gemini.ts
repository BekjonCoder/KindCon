export const getGeminiResponse = async (message: string): Promise<string> => {
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

    return content || "AI javob qaytara olmadi.";
  } catch (error) {
    console.error("Gemini API xatolik:", error);
    return "Kechirasiz, javob bera olmadim. Qayta urinib ko'ring.";
  }
};
