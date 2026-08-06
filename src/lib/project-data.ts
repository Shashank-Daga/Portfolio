export type ProjectStatus = "complete" | "in-progress";

export interface Project {
  slug: string;
  title: string;
  status: ProjectStatus;
  statusLabel: string;
  summary: string;
  problem: string;
  approach: string;
  impact: string;
  stack: string[];
  githubUrl?: string; // omitted -> "Code available on request"
}

export const projects: Project[] = [
  {
    slug: "fraudshield",
    title: "FraudShield",
    status: "complete",
    statusLabel: "Complete",
    summary:
      "Multimodal fraud detection system analyzing text, metadata, and audio to catch scam communications and deepfake voice attacks in real time.",
    problem:
      "Scam communications now span SMS, spoofed metadata, and AI-generated deepfake audio — single-signal filters miss most of it.",
    approach:
      "Built three coordinated detection models: a BERT-based classifier for SMS text, a Random Forest model for metadata-based fraud signals, and a CNN for deepfake audio detection, served through a Flask backend.",
    impact:
      "99.01% SMS fraud detection accuracy (BERT, 5,574 messages), 92%+ metadata fraud detection accuracy, and 95%+ deepfake audio detection accuracy.",
    stack: [
      "Python",
      "Flask",
      "TensorFlow",
      "Keras",
      "Hugging Face Transformers",
      "scikit-learn",
    ],
    // githubUrl intentionally omitted — link pending
  },
  {
    slug: "Finsentinel",
    title: "FinSentinel",
    status: "in-progress",
    statusLabel: "In Progress",
    summary:
      "A hybrid, real-time financial fraud detection backend combining deterministic rules with ML-based anomaly scoring.",
    problem:
      "Financial transaction fraud evolves faster than static rule sets can keep up with, and pure ML models are often too opaque to explain a block or review decision.",
    approach:
      "Designed a pipeline where a rule engine and an ML anomaly-scoring layer both contribute to a combined risk score, which a decision engine routes to Approve, Review, or Block. The rule engine, risk scoring, and decision engine are live; the AI anomaly-detection model and adaptive rule-generation layer are in active development.",
    impact:
      "Core transaction pipeline (Rule Engine → Risk Scoring → Decision Engine) is functional end-to-end in Java, with the ML anomaly layer next in the roadmap.",
    stack: ["Java", "Spring Boot", "MySQL", "Python", "REST APIs"],
    githubUrl: "https://github.com/Shashank-Daga/FinSentinel",
  },
  {
    slug: "dataprepx",
    title: "DataPrepX",
    status: "complete",
    statusLabel: "Complete",
    summary:
      "An end-to-end AutoML platform that automates data preprocessing, feature engineering, model training, and explainable report generation.",
    problem:
      "Manual data cleaning and model selection are slow, and most AutoML output is a black box with no explanation for its decisions or a report a non-technical stakeholder can read.",
    approach:
      "Built a scalable pipeline handling datasets up to 100K records, integrating SHAP and LIME for explainability, and auto-generating professional PDF/DOCX reports with actionable insights via a Streamlit interface.",
    impact:
      "Processed datasets up to 100,000 records end-to-end, from raw data to an explainable, stakeholder-ready report.",
    stack: [
      "Python",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "Streamlit",
      "SHAP",
      "LIME",
      "ReportLab",
    ],
    githubUrl: "https://github.com/Shashank-Daga/DataPerpX",
  },
  {
    slug: "ai-crm",
    title: "AI-Based CRM",
    status: "complete",
    statusLabel: "Complete",
    summary:
      "A sponsored, full-stack CRM with AI-driven automation, customer insights, and integrated communication tooling.",
    problem:
      "Teams need CRM tooling that goes beyond static record-keeping to actively automate outreach and surface customer insight.",
    approach:
      "Built the full-stack application end-to-end on the MERN stack, integrated AI chatbots for automation and NLP-driven customer insights, and wired in the Twilio API for seamless communication.",
    impact:
      "Delivered a complete sponsored full-stack CRM covering backend, frontend, database, and AI-assisted automation.",
    stack: ["MongoDB", "Express", "React", "Node.js", "NLP", "Twilio API"],
    // githubUrl intentionally omitted — link pending
  },
];
