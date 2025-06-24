import type { Treatment } from "@/contexts/symptoms-context"

export const treatmentsData: Record<string, Treatment[]> = {
  headache: [
    {
      id: "headache-rest",
      name: "Rest in Dark Room",
      type: "lifestyle",
      description: "Rest in a quiet, dark room to reduce headache intensity",
      severity: "mild",
      instructions: "Lie down in a dark, quiet room for 30-60 minutes. Apply a cold compress to your forehead.",
      precautions: "If headaches persist for more than 3 days, consult a doctor.",
    },
    {
      id: "headache-hydration",
      name: "Increase Hydration",
      type: "home_remedy",
      description: "Dehydration can cause headaches",
      severity: "mild",
      instructions: "Drink 2-3 glasses of water slowly. Continue drinking water throughout the day.",
    },
    {
      id: "headache-otc",
      name: "Over-the-Counter Pain Relief",
      type: "medication",
      description: "Ibuprofen, acetaminophen, or aspirin for pain relief",
      severity: "moderate",
      instructions: "Take as directed on package. Do not exceed recommended dosage.",
      precautions: "Consult doctor if taking other medications or have medical conditions.",
    },
  ],
  "morning-headache": [
    {
      id: "sleep-position",
      name: "Improve Sleep Position",
      type: "lifestyle",
      description: "Elevate head while sleeping to improve breathing",
      severity: "mild",
      instructions: "Use 2-3 pillows or elevate the head of your bed by 4-6 inches.",
    },
    {
      id: "sleep-study",
      name: "Sleep Study Evaluation",
      type: "medical_procedure",
      description: "Professional evaluation for sleep disorders",
      severity: "severe",
      instructions: "Consult a sleep specialist for comprehensive evaluation.",
      precautions: "Morning headaches can indicate sleep apnea or other serious conditions.",
    },
  ],
  "chest-pain": [
    {
      id: "emergency-care",
      name: "Seek Emergency Care",
      type: "medical_procedure",
      description: "Chest pain requires immediate medical attention",
      severity: "severe",
      instructions: "Call 911 or go to emergency room immediately. Do not drive yourself.",
      precautions: "Chest pain can indicate heart attack or other serious conditions.",
    },
  ],
  "shortness-breath": [
    {
      id: "breathing-exercises",
      name: "Deep Breathing Exercises",
      type: "therapy",
      description: "Controlled breathing to improve oxygen flow",
      severity: "mild",
      instructions:
        "Sit upright, breathe in slowly through nose for 4 counts, hold for 4, exhale through mouth for 6 counts.",
    },
    {
      id: "medical-evaluation",
      name: "Medical Evaluation",
      type: "medical_procedure",
      description: "Professional assessment for breathing difficulties",
      severity: "moderate",
      instructions: "Schedule appointment with healthcare provider for evaluation.",
      precautions: "Persistent shortness of breath requires medical attention.",
    },
  ],
  fatigue: [
    {
      id: "sleep-hygiene",
      name: "Improve Sleep Hygiene",
      type: "lifestyle",
      description: "Better sleep habits for improved energy",
      severity: "mild",
      instructions: "Maintain regular sleep schedule, avoid screens before bed, keep bedroom cool and dark.",
    },
    {
      id: "exercise-routine",
      name: "Regular Exercise",
      type: "lifestyle",
      description: "Light to moderate exercise can boost energy levels",
      severity: "mild",
      instructions: "Start with 15-20 minutes of walking daily. Gradually increase duration and intensity.",
    },
  ],
  nausea: [
    {
      id: "ginger-tea",
      name: "Ginger Tea",
      type: "home_remedy",
      description: "Natural remedy for nausea relief",
      severity: "mild",
      instructions: "Steep fresh ginger slices in hot water for 10 minutes. Drink slowly.",
    },
    {
      id: "bland-diet",
      name: "BRAT Diet",
      type: "lifestyle",
      description: "Bananas, Rice, Applesauce, Toast for upset stomach",
      severity: "mild",
      instructions: "Eat small portions of bland foods. Avoid spicy, fatty, or dairy foods.",
    },
  ],
  "leg-pain": [
    {
      id: "elevation",
      name: "Leg Elevation",
      type: "lifestyle",
      description: "Elevate legs to improve circulation",
      severity: "mild",
      instructions: "Lie down and elevate legs above heart level for 15-20 minutes several times daily.",
    },
    {
      id: "compression",
      name: "Compression Stockings",
      type: "lifestyle",
      description: "Improve blood flow in legs",
      severity: "mild",
      instructions: "Wear graduated compression stockings during the day. Remove at night.",
    },
  ],
}

export function getTreatmentsForSymptom(symptomId: string): Treatment[] {
  return treatmentsData[symptomId] || []
}

export function getAllTreatmentsForSymptoms(symptomIds: string[]): Treatment[] {
  const allTreatments: Treatment[] = []
  symptomIds.forEach((symptomId) => {
    const treatments = getTreatmentsForSymptom(symptomId)
    allTreatments.push(...treatments)
  })
  return allTreatments
}
