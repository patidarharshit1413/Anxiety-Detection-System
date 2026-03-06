# 🧠 AI Exam Anxiety Detector

A modern web application that evaluates **student exam anxiety levels** using a psychological questionnaire and visualizes stress insights through an interactive dashboard.

The system analyzes questionnaire responses, calculates an anxiety score, and classifies it into **Low, Moderate, or High anxiety levels**, helping students understand their stress before exams.

---

# ✨ Features

✔ 15-Question Psychological Assessment
✔ Automated Anxiety Score Calculation
✔ Anxiety Level Classification
✔ Emotion Detection Simulation
✔ Interactive Stress Dashboard
✔ Chart-Based Data Visualization
✔ Personalized Stress Management Suggestions

---

# 🛠 Tech Stack

## Frontend

* React
* Tailwind CSS
* Chart.js
* Framer Motion
* Wouter (Routing)

## Backend

* Node.js
* Express.js

## Database

* PostgreSQL

## Additional Tools

* Drizzle ORM
* Zod Validation

---

# 📂 Project Architecture

```
AI-Exam-Anxiety-Detector
│
├── client
│   └── src
│       ├── components
│       │    └── StressChart.jsx
│       │
│       ├── pages
│       │    ├── Home.jsx
│       │    ├── Questionnaire.jsx
│       │    └── Dashboard.jsx
│       │
│       ├── App.jsx
│       └── main.jsx
│
├── server
│   ├── index.js
│   └── routes.js
│
├── shared
│   └── schema.js
│
├── package.json
└── README.md
```

---

# 🧩 System Workflow

1️⃣ User opens the web application
2️⃣ Starts the anxiety assessment
3️⃣ Answers a **15-question questionnaire**
4️⃣ System calculates the **total stress score**
5️⃣ Emotion detection simulation adjusts the score
6️⃣ Anxiety level is classified
7️⃣ Results are displayed on the **dashboard with charts**

---

# 📊 Anxiety Score Classification

| Score Range | Anxiety Level    |
| ----------- | ---------------- |
| 0 – 25      | Low Anxiety      |
| 26 – 50     | Moderate Anxiety |
| 51 – 75     | High Anxiety     |

---

# 📈 Dashboard Analytics

The dashboard provides:

• Stress Percentage Indicator
• Answer Distribution Chart
• Historical Stress Insights
• Personalized Suggestions

Example Suggestions:

Low Anxiety

* Maintain study routine
* Continue light revision
* Ensure healthy sleep

Moderate Anxiety

* Practice deep breathing
* Use Pomodoro study technique
* Maintain daily planning

High Anxiety

* Try guided meditation
* Reduce caffeine intake
* Talk with mentors or counselors

---

# 🔮 Future Improvements

* Real AI emotion detection using webcam
* Student login and authentication
* Anxiety report generation (PDF)
* Database analytics dashboard
* Mobile responsive UI
* Machine learning stress prediction model

---
 
 
