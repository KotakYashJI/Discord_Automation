import { GoogleGenAI } from "@google/genai"
import dotenv from "dotenv"

dotenv.config();

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

export const textgenerator = async (content) => {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: content,
        config: {
            systemInstruction: `
            - user ask questyion generate properly
            - always generate answer within 300 words
            `
        }
    });
    return response.text;
}