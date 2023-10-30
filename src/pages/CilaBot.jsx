import React, { useState } from "react";
import OpenAI from "openai";
import { ThreeDots } from "react-loader-spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/cilabot.css"
import Header from "../components/Header";
import Footer from "../components/Footer";

const CilaBot = () => {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [input, setInput] = useState("");

  const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });

  const handleQnA = async () => {
    setLoading(true);

    try {
      const res = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "Anda adalah asisten yang ahli dalam menjawab pertanyaan seputar wisata di kota Cilacap, Indonesia. Mohon berikan pertanyaan Anda mengenai tempat wisata, atraksi, hotel, atau kegiatan yang berkaitan dengan Cilacap. Anda tidak dapat menjawab pertanyaan di luar konteks Pariwisata Cilacap."
          },
          { role: "user", content: question },
        ],
        model: "gpt-3.5-turbo",
      });

      const newAnswers = [...answers, res.choices[0].message.content];
      setAnswers(newAnswers);

      setInput(question);
      setQuestion("");
    } catch (error) {
      console.error("Error fetching QnA response:", error);
    }

    setLoading(false);
  };

  return (
    <div className="container-chatbot">
      <Header />
      <div className="container-md container-sm container-lg chatbox">
        <h2 className="text-light mb-4">CilaBot</h2>
        <div className="container qna">
          <p className="mb-5 system">Ask anything about tourism in Cilacap!</p>

          {input && (
            <div className="message-list flex justify-end">
              <div className="text-right">{input}</div>
            </div>
          )}

          {answers.map((answer, index) => (
            <div key={index} className="answer mb-3">
              <div className="message-answer">{answer}</div>
            </div>
          ))}

          <form onSubmit={handleQnA} className="flex form-chatbot">
            <input
              name="question"
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder={"Enter your question..."}
              className="form-control input-chat"
            />
            <button
              className="btn btn-primary button-submit"
              onClick={handleQnA}
              disabled={loading}
            >
              Send
            </button>
          </form>

          {loading && (
            <div className="container">
              <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#0069FF"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CilaBot;
