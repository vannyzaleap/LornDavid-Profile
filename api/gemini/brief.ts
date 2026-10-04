import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

export default async function handler(req: any, res: any) {
  // Set CORS headers for Vercel
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { idea, projectType, budget, timeline } = req.body || {};
    if (!idea || typeof idea !== 'string') {
      return res.status(400).json({ error: 'Project description is required' });
    }

    if (!process.env.GEMINI_API_KEY) {
      // Provide structured fallback if API key is not configured in Vercel environment
      return res.json({
        result: {
          summary: `Assessment for ${projectType || 'Digital Product'}: A high-impact engineering roadmap prioritizing performance, Swiss-inspired aesthetic, and rock-solid architecture.`,
          recommendedStack: ['React / TypeScript', 'Tailwind CSS', 'Node.js & Express', 'PostgreSQL', 'Docker'],
          deliverables: [
            'Interactive UX Wireframes & Neo-Brutalist Component System',
            'Full-Stack API & Database Schema Implementation',
            'Production Deployment with CI/CD & Lighthouse 95+ Optimization',
          ],
          estimatedScope: '3 - 6 Weeks (Sprint-based agile delivery)',
          davidFit: 'High alignment with LORN David’s selected work in systems design, responsive web architecture, and clean full-stack execution.',
          nextStep: 'Schedule an intro call or send the direct inquiry email to start building.',
        },
      });
    }

    const prompt = `You are the technical AI project estimator for LORN David, an elite Developer, Designer & Builder based in Phnom Penh, Cambodia (specializing in Neo-Brutalism, Swiss UI design, Vue, React, Node.js, Flutter, Docker, PostgreSQL).

A client has submitted an inquiry:
- Idea/Problem: "${idea}"
- Category: "${projectType || 'Web App / Digital Experience'}"
- Budget Range: "${budget || 'Standard'}"
- Timeline: "${timeline || 'Flexible'}"

Generate a sharp, highly technical, professional Neo-Brutalist assessment in JSON.
Required JSON schema:
{
  "summary": "2 direct, confident sentences summarizing the core product vision and architectural approach.",
  "recommendedStack": ["4 to 6 specific technologies/frameworks from David's stack"],
  "deliverables": ["3 to 4 concrete engineering and design milestones"],
  "estimatedScope": "Realistic time estimate in weeks with milestone structure",
  "davidFit": "1-2 sentences on why this fits LORN David's expertise in full-stack craft and design-engineering",
  "nextStep": "Clear actionable instruction to proceed"
}
Output only valid JSON.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    return res.json({ result: parsed });
  } catch (error: any) {
    console.error('Vercel Gemini brief generation error:', error);
    return res.json({
      result: {
        summary: 'Technical architecture scoping completed. Project aligns directly with modern component-driven engineering principles.',
        recommendedStack: ['TypeScript', 'React / Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
        deliverables: [
          'Design System & High-Fidelity Responsive Prototypes',
          'Scalable Microservices / REST API Architecture',
          'Production Deployment & Automated QA Pipeline',
        ],
        estimatedScope: '4 - 6 Weeks',
        davidFit: 'Direct match for LORN David’s multidisciplinary background in design engineering.',
        nextStep: 'Reach out directly via email or Telegram to lock in delivery schedule.',
      },
    });
  }
}
