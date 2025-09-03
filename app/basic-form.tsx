import { ThemedText } from "@/components/ThemedText";
import React, { useState } from "react";

const BasicForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    // Here you can integrate an API like Formspree or your backend
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <ThemedText type='title'>Contact Us</ThemedText>
      {submitted ? (
        <p>Thank you for reaching out! We'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <ThemedText type='subtitle'>Name:</ThemedText>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "0.5rem" }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <ThemedText type='subtitle'>Email:</ThemedText>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "0.5rem" }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <ThemedText type='subtitle'>Message:</ThemedText>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "0.5rem" }}
            />
          </div>
          <button type="submit" style={{ padding: "0.5rem 1rem" }}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default BasicForm;
