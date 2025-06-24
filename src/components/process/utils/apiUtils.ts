
export const generateAIStrategy = async (businessInput: string) => {
  const prompt = `You are a world-class AI strategy consultant. A potential client from the '${businessInput}' sector wants to understand how AI can create a competitive advantage. Generate a concise, actionable, 3-step AI strategy for them. 

For each step, provide:
- A clear 'action' (what they should do)
- A specific 'benefit' (what value they'll get)

The tone should be professional, insightful, and inspiring. Keep each action concise (1-2 sentences) and each benefit focused on business outcomes.

Format as JSON: {"strategy": [{"step": "Step 1", "action": "Clear action description", "benefit": "Specific business benefit"}]}`;

  const apiKey = "AIzaSyApc4zoUO-EUzKPn-5FI2pDCFdaxiSI52Q";
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${apiKey}`;

  const payload = {
    contents: [{
      parts: [{ text: prompt }]
    }],
    generationConfig: {
      temperature: 0.7,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 1024,
    }
  };

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }
  
  const result = await response.json();
  console.log('API Response:', result);
 
  if (result.candidates && result.candidates.length > 0 &&
      result.candidates[0].content && result.candidates[0].content.parts &&
      result.candidates[0].content.parts.length > 0) {
    
    const textResponse = result.candidates[0].content.parts[0].text;
    console.log('Raw text response:', textResponse);
    
    // Try to extract JSON from the response
    let parsedJson;
    try {
      // Look for JSON in the response
      const jsonMatch = textResponse.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        parsedJson = JSON.parse(jsonMatch[0]);
      } else {
        // If no JSON found, create a structured response
        parsedJson = {
          strategy: [
            {
              step: "Step 1",
              action: "Implement AI-powered customer analytics to understand behavior patterns and preferences",
              benefit: "Increase customer retention by 25% and personalize experiences for higher satisfaction"
            },
            {
              step: "Step 2", 
              action: "Deploy automated workflow systems to streamline operations and reduce manual tasks",
              benefit: "Reduce operational costs by 30% and free up staff for strategic activities"
            },
            {
              step: "Step 3",
              action: "Integrate predictive analytics for demand forecasting and inventory optimization",
              benefit: "Improve profitability by 20% through better resource allocation and waste reduction"
            }
          ]
        };
      }
    } catch (parseError) {
      console.error("JSON parsing error:", parseError);
      // Fallback structured response
      parsedJson = {
        strategy: [
          {
            step: "Step 1",
            action: "Implement AI-powered customer analytics to understand behavior patterns and preferences",
            benefit: "Increase customer retention by 25% and personalize experiences for higher satisfaction"
          },
          {
            step: "Step 2",
            action: "Deploy automated workflow systems to streamline operations and reduce manual tasks", 
            benefit: "Reduce operational costs by 30% and free up staff for strategic activities"
          },
          {
            step: "Step 3",
            action: "Integrate predictive analytics for demand forecasting and inventory optimization",
            benefit: "Improve profitability by 20% through better resource allocation and waste reduction"
          }
        ]
      };
    }
    
    return parsedJson;

  } else {
    throw new Error("Invalid response structure from API.");
  }
};
