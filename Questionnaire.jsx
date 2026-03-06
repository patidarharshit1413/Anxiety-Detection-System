import React, { useState } from "react";

export default function Questionnaire() {

  const [answers, setAnswers] = useState(Array(15).fill(1));

  const handleChange = (index, value) => {
    const updated = [...answers];
    updated[index] = parseInt(value);
    setAnswers(updated);
  };

  const submit = async () => {

    const res = await fetch("/api/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        answers: answers,
        emotion: "neutral"
      })
    });

    const data = await res.json();
    alert("Anxiety Level: " + data.level);
  };

  return (
    <div>
      <h2>Exam Anxiety Questionnaire</h2>

      {answers.map((_, i) => (
        <div key={i}>
          Question {i + 1}
          <select onChange={(e) => handleChange(i, e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      ))}

      <button onClick={submit}>Submit</button>

    </div>
  );
}