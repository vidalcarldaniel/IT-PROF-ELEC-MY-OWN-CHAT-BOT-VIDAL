import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey: "AIzaSyCzWG60wmuclXpBWLTZ11SDR2g0KoCF7-4"});

export async function askAi(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Hello Grandfather, " + prompt,
    config: {
      systemInstruction: "You are a Grandfather. Answer as a Grandfather would, answer the question in a kind and wise manner.",
    },
  });
  return(response.text);
}