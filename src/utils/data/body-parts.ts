import type { BodyPart } from "@/contexts/symptoms-context"

export const bodyParts: BodyPart[] = [
  {
    id: "body-model-head",
    name: "Head & Face",
    symptoms: [
      {
        id: "headache",
        name: "Headache",
        severity: "moderate",
        description: "Persistent or recurring head pain",
      },
      {
        id: "morning-headache",
        name: "Morning Headaches",
        severity: "moderate",
        description: "Headaches that occur upon waking, often due to oxygen deprivation",
      },
      {
        id: "dizziness",
        name: "Dizziness",
        severity: "mild",
        description: "Feeling lightheaded or unsteady",
      },
      {
        id: "memory-problems",
        name: "Memory Problems",
        severity: "moderate",
        description: "Difficulty remembering or concentrating",
      },
      {
        id: "mood-changes",
        name: "Mood Changes",
        severity: "moderate",
        description: "Depression, anxiety, or irritability",
      },
    ],
  },
  {
    id: "body-model-eyes",
    name: "Eyes",
    symptoms: [
      {
        id: "eye-strain",
        name: "Eye Strain",
        severity: "mild",
        description: "Tired, aching, or burning eyes",
      },
      {
        id: "blurred-vision",
        name: "Blurred Vision",
        severity: "moderate",
        description: "Difficulty seeing clearly",
      },
      {
        id: "dry-eyes",
        name: "Dry Eyes",
        severity: "mild",
        description: "Eyes feel dry or gritty",
      },
    ],
  },
  {
    id: "body-model-ears",
    name: "Ears",
    symptoms: [
      {
        id: "ear-pain",
        name: "Ear Pain",
        severity: "moderate",
        description: "Pain or discomfort in the ears",
      },
      {
        id: "hearing-loss",
        name: "Hearing Difficulties",
        severity: "moderate",
        description: "Reduced hearing or muffled sounds",
      },
      {
        id: "tinnitus",
        name: "Ringing in Ears",
        severity: "mild",
        description: "Hearing ringing, buzzing, or other sounds",
      },
    ],
  },
  {
    id: "body-model-nose",
    name: "Nose",
    symptoms: [
      {
        id: "nasal-congestion",
        name: "Nasal Congestion",
        severity: "mild",
        description: "Blocked or stuffy nose",
      },
      {
        id: "runny-nose",
        name: "Runny Nose",
        severity: "mild",
        description: "Excessive nasal discharge",
      },
      {
        id: "loss-of-smell",
        name: "Loss of Smell",
        severity: "moderate",
        description: "Reduced or complete loss of smell",
      },
    ],
  },
  {
    id: "body-model-oral_cavity",
    name: "Mouth & Throat",
    symptoms: [
      {
        id: "sore-throat",
        name: "Sore Throat",
        severity: "mild",
        description: "Pain or irritation in the throat",
      },
      {
        id: "dry-mouth",
        name: "Dry Mouth",
        severity: "mild",
        description: "Lack of saliva or dry feeling in mouth",
      },
      {
        id: "difficulty-swallowing",
        name: "Difficulty Swallowing",
        severity: "moderate",
        description: "Pain or difficulty when swallowing",
      },
    ],
  },
  {
    id: "body-model-neck_or_throat",
    name: "Neck & Throat",
    symptoms: [
      {
        id: "loud-snoring",
        name: "Loud Snoring",
        severity: "moderate",
        description: "Disruptive snoring that affects sleep quality",
      },
      {
        id: "gasping",
        name: "Gasping During Sleep",
        severity: "severe",
        description: "Waking up gasping or choking",
      },
      {
        id: "neck-pain",
        name: "Neck Pain",
        severity: "moderate",
        description: "Pain or stiffness in the neck area",
      },
      {
        id: "swollen-glands",
        name: "Swollen Lymph Nodes",
        severity: "moderate",
        description: "Enlarged or tender lymph nodes in neck",
      },
    ],
  },
  {
    id: "body-model-chest",
    name: "Chest & Heart",
    symptoms: [
      {
        id: "chest-pain",
        name: "Chest Pain",
        severity: "severe",
        description: "Pain or discomfort in the chest area",
      },
      {
        id: "shortness-breath",
        name: "Shortness of Breath",
        severity: "moderate",
        description: "Difficulty breathing or feeling winded",
      },
      {
        id: "irregular-heartbeat",
        name: "Irregular Heartbeat",
        severity: "severe",
        description: "Heart palpitations or irregular rhythm",
      },
      {
        id: "high-blood-pressure",
        name: "High Blood Pressure",
        severity: "severe",
        description: "Elevated blood pressure readings",
      },
      {
        id: "night-sweats",
        name: "Night Sweats",
        severity: "mild",
        description: "Excessive sweating during sleep",
      },
    ],
  },
  {
    id: "body-model-upper_arm",
    name: "Upper Arms",
    symptoms: [
      {
        id: "arm-pain",
        name: "Arm Pain",
        severity: "moderate",
        description: "Pain in the upper arm area",
      },
      {
        id: "arm-weakness",
        name: "Arm Weakness",
        severity: "severe",
        description: "Weakness or loss of strength in arms",
      },
      {
        id: "arm-numbness",
        name: "Arm Numbness",
        severity: "moderate",
        description: "Tingling or numbness in arms",
      },
    ],
  },
  {
    id: "body-model-upper_abdomen",
    name: "Upper Abdomen",
    symptoms: [
      {
        id: "upper-abdominal-pain",
        name: "Upper Abdominal Pain",
        severity: "moderate",
        description: "Pain in the upper stomach area",
      },
      {
        id: "nausea",
        name: "Nausea",
        severity: "mild",
        description: "Feeling sick to your stomach",
      },
      {
        id: "indigestion",
        name: "Indigestion",
        severity: "mild",
        description: "Discomfort after eating",
      },
    ],
  },
  {
    id: "body-model-forearm",
    name: "Forearms",
    symptoms: [
      {
        id: "forearm-pain",
        name: "Forearm Pain",
        severity: "moderate",
        description: "Pain in the forearm area",
      },
      {
        id: "forearm-stiffness",
        name: "Forearm Stiffness",
        severity: "mild",
        description: "Stiffness or reduced mobility in forearms",
      },
      {
        id: "forearm-swelling",
        name: "Forearm Swelling",
        severity: "moderate",
        description: "Swelling in the forearm area",
      },
    ],
  },
  {
    id: "body-model-mid_abdomen",
    name: "Mid Abdomen",
    symptoms: [
      {
        id: "abdominal-pain",
        name: "Abdominal Pain",
        severity: "moderate",
        description: "Pain in the middle stomach area",
      },
      {
        id: "bloating",
        name: "Bloating",
        severity: "mild",
        description: "Abdominal swelling or fullness",
      },
      {
        id: "acid-reflux",
        name: "Acid Reflux (GERD)",
        severity: "moderate",
        description: "Heartburn or acid reflux, especially at night",
      },
    ],
  },
  {
    id: "body-model-lower_abdomen",
    name: "Lower Abdomen",
    symptoms: [
      {
        id: "lower-abdominal-pain",
        name: "Lower Abdominal Pain",
        severity: "moderate",
        description: "Pain in the lower stomach area",
      },
      {
        id: "frequent-urination",
        name: "Frequent Urination",
        severity: "moderate",
        description: "Need to urinate more often than usual",
      },
      {
        id: "weight-gain",
        name: "Unexplained Weight Gain",
        severity: "moderate",
        description: "Weight gain without changes in diet or exercise",
      },
    ],
  },
  {
    id: "body-model-hand",
    name: "Hands",
    symptoms: [
      {
        id: "hand-pain",
        name: "Hand Pain",
        severity: "mild",
        description: "Pain or aching in the hands",
      },
      {
        id: "hand-numbness",
        name: "Hand Numbness",
        severity: "moderate",
        description: "Tingling or numbness in hands",
      },
      {
        id: "hand-stiffness",
        name: "Hand Stiffness",
        severity: "mild",
        description: "Stiffness or reduced mobility in hands",
      },
      {
        id: "cold-hands",
        name: "Cold Hands",
        severity: "mild",
        description: "Hands feel unusually cold",
      },
    ],
  },
  {
    id: "body-model-sexual_organs",
    name: "Pelvic Area",
    symptoms: [
      {
        id: "pelvic-pain",
        name: "Pelvic Pain",
        severity: "moderate",
        description: "Discomfort in the pelvic region",
      },
      {
        id: "sexual-dysfunction",
        name: "Sexual Dysfunction",
        severity: "moderate",
        description: "Reduced libido or sexual function issues",
      },
      {
        id: "urinary-issues",
        name: "Urinary Issues",
        severity: "moderate",
        description: "Problems with urination",
      },
    ],
  },
  {
    id: "body-model-thigh",
    name: "Thighs",
    symptoms: [
      {
        id: "thigh-pain",
        name: "Thigh Pain",
        severity: "moderate",
        description: "Pain in the thigh area",
      },
      {
        id: "thigh-weakness",
        name: "Thigh Weakness",
        severity: "moderate",
        description: "Weakness in the thigh muscles",
      },
      {
        id: "thigh-numbness",
        name: "Thigh Numbness",
        severity: "mild",
        description: "Tingling or numbness in thighs",
      },
    ],
  },
  {
    id: "body-model-knee",
    name: "Knees",
    symptoms: [
      {
        id: "knee-pain",
        name: "Knee Pain",
        severity: "moderate",
        description: "Pain in the knee joint",
      },
      {
        id: "knee-stiffness",
        name: "Knee Stiffness",
        severity: "mild",
        description: "Stiffness or reduced mobility in knees",
      },
      {
        id: "knee-swelling",
        name: "Knee Swelling",
        severity: "moderate",
        description: "Swelling around the knee area",
      },
    ],
  },
  {
    id: "body-model-lower_leg",
    name: "Lower Legs",
    symptoms: [
      {
        id: "leg-pain",
        name: "Leg Pain",
        severity: "moderate",
        description: "Pain in the lower leg area",
      },
      {
        id: "leg-swelling",
        name: "Leg Swelling",
        severity: "moderate",
        description: "Swelling or fluid retention in legs",
      },
      {
        id: "leg-cramps",
        name: "Leg Cramps",
        severity: "mild",
        description: "Muscle cramps in legs, especially at night",
      },
      {
        id: "restless-legs",
        name: "Restless Legs",
        severity: "mild",
        description: "Uncomfortable sensations and urge to move legs",
      },
    ],
  },
  {
    id: "body-model-foot",
    name: "Feet",
    symptoms: [
      {
        id: "foot-pain",
        name: "Foot Pain",
        severity: "mild",
        description: "Pain or discomfort in the feet",
      },
      {
        id: "foot-swelling",
        name: "Foot Swelling",
        severity: "moderate",
        description: "Swelling in the feet or ankles",
      },
      {
        id: "foot-numbness",
        name: "Foot Numbness",
        severity: "moderate",
        description: "Tingling or numbness in feet",
      },
      {
        id: "cold-feet",
        name: "Cold Feet",
        severity: "mild",
        description: "Feet feel unusually cold",
      },
    ],
  },
]
