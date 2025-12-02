import { GoogleGenAI } from "@google/genai";

export const getCareerAdvice = async (profileName: string, role: string, missingInfo: string) => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("API Key not found, returning mock response");
      return "Please configure your API key to get real AI advice. For now: Focus on adding more quantitative results to your recent job descriptions to boost your profile score.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const prompt = `
      You are a helpful career coach. 
      The user ${profileName} is a ${role}. 
      Their profile is incomplete because it is missing: ${missingInfo}.
      
      Give one short, punchy paragraph of advice (max 50 words) on why adding this specific information will help them get hired. Be encouraging.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error fetching career advice:", error);
    return "Could not connect to AI career coach. Please try again later.";
  }
};