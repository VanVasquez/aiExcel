import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Modal, Form } from "react-bootstrap";

import chatgpt from "../../assets/chatgpt.png";
import deepdreams from "../../assets/deepdreams.png";
import dalle from "../../assets/dalle.png";
import artbreeder from "../../assets/artbreeder.png";
import canva from "../../assets/canva.png";
import leap from "../../assets/leap.jpg";
import freeimageai from "../../assets/freeimageai.jpg";
import grammargpt from "../../assets/grammargpt.png";
import akinator from "../../assets/akinator.jpeg";
import aidungeon from "../../assets/aidungeon.png";
import quillbot from "../../assets/quillbot.png";
import deepl from "../../assets/deepl.png";
import semanticscholar from "../../assets/semanticscholar.png";
import perplexityai from "../../assets/perplexityai.jpg";
import intellectai from "../../assets/intellectai.png";
import scite from "../../assets/scite.png";
import consensus from "../../assets/consensus.png";
import chatpdf from "../../assets/chatpdf.png";
import wolfram from "../../assets/wolfram.png";
import Tool from "./tool";

const ai = [
  {
    id: 1,
    name: "Grammarly",
    category: ["WRITING", "GRAMMAR"],
    link: "https://www.grammarly.com/",
    icon: grammarly,
    description: "An AI-powered writing assistant that helps you improve your grammar",
  },
  {
    id: 2,
    name: "ChatGPT",
    category: [
      "CHATBOT",
      "WRITING",
      "GRAMMAR",
      "PARAPHRASE",
      "TRANSLATE",
      "MATH",
    ],
    link: "https://www.openai.com/",
    icon: chatgpt,
    description: "A Free artificial intelligence chatbot to supervise and reinforce learning techniques",
  },
  {
    id: 3,
    name: "DeepDream",
    category: ["ART"],
    link: "https://deepdreamgenerator.com/",
    icon: deepdreams,
    description: "DeepDream is an experiment that visualizes the patterns learned by a neural network",
  },
  {
    id: 4,
    name: "DALL-E",
    category: ["ART"],
    link: "https://openai.com/dall-e-2",
    icon: dalle,
    description: "DALL-E is an artificial intelligence system created by OpenAI that can produce realistic images from text prompts.",
  },
  {
    id: 5,
    name: "Artbreeder",
    category: ["ART"],
    link: "https://www.artbreeder.com/",
    icon: artbreeder,
    description: "Artbreeder is one of the most used AI tools in generating portraits and landscapes using artificial intelligence",
  },
  {
    id: 6,
    name: "Canva",
    category: ["ART"],
    link: "https://www.canva.com/",
    icon: canva,
    description: "AI furthers this ease-of-use mission for Canva. Take their AI-powered Background Remover tool, for example",
  },
  {
    id: 7,
    name: "Background LOL",
    category: ["ART"],
    link: "https://www.background.lol/",
    icon: leap,
    description: "A tool that enerates AI-generated wallpapers in seconds, allowing users to create unique visuals",
  },
  {
    id: 8,
    name: "FreeImage AI",
    category: ["ART"],
    link: "https://www.freeimage.ai/",
    icon: freeimageai,
    description: "An AI-powered image generator tool for creating stunning images using a stable and advanced AI engine",
  },
  {
    id: 9,
    name: "Grammar-GPT",
    category: ["GRAMMAR"],
    link: "https://www.grammar-gpt.com/",
    icon: grammargpt,
    description: "An AI-powered tool that is designed to help writers improve their writing by correcting grammar, punctuation, and spelling errors",
  },
  {
    id: 10,
    name: "Akinator",
    category: ["GAMING"],
    link: "https://en.akinator.com/",
    icon: akinator,
    description: "Uses artificial intelligence to guess the identity of anything you can think of",
  },
  {
    id: 11,
    name: "AI Dungeon",
    category: ["GAMING"],
    link: "https://www.aidungeon.io/",
    icon: aidungeon,
    description: "A text-based, AI generated fantasy simulation with infinite possibilities",
  },
  {
    id: 12,
    name: "QuillBot",
    category: ["PARAPHRASE"],
    link: "https://quillbot.com/",
    icon: quillbot,
    description: "QuillBot's AI-powered paraphrasing tool will enhance your writing",
  },
  {
    id: 13,
    name: "DeepL Translator",
    category: ["TRANSLATE"],
    link: "https://www.deepl.com/translator",
    icon: deepl,
    description: "DeepL Translator translates texts using artificial neural networks.",
  },
  {
    id: 14,
    name: "Semantic Scholar",
    category: ["LITERATURE"],
    link: "https://www.semanticscholar.org/",
    icon: semanticscholar,
    description: "A free, AI-powered research tool for scientific literature",
  },
  {
    id: 15,
    name: "Perplexity AI",
    category: ["LITERATURE"],
    link: "https://perplexity.ai/",
    icon: perplexityai,
    description: "An AI-chat-based conversational search engine that delivers answers to questions using language models",
  },
  {
    id: 16,
    name: "Intellecs AI",
    category: ["LITERATURE"],
    link: "https://intellecs.ai/",
    icon: intellectai,
    description: "Effortless information retrieval, accurate summaries, and intelligent questioning",
  },
  {
    id: 17,
    name: "Scite",
    category: ["LITERATURE"],
    link: "https://scite.ai/",
    icon: scite,
    description: "Smart Citations–citations that display the context of the citation and describe whether the article provides",
  },
  {
    id: 18,
    name: "Consensus",
    category: ["LITERATURE"],
    link: "https://consensus.app/",
    icon: consensus,
    description: "Consensus is a search engine that uses AI to extract and distill findings directly from scientific research",
  },
  {
    id: 19,
    name: "Chat PDF",
    category: ["LITERATURE"],
    link: "https://chat-pdf.com/",
    icon: chatpdf,
    description: "ChatPDF is an AI-powered app that will make reading journal articles easier and faster",
  },
  {
    id: 20,
    name: "WolframAlpha",
    category: ["MATH"],
    link: "https://www.wolframalpha.com/",
    icon: wolfram,
    description: "An AI-powered tool that provides answers and insights to a wide range of question",
  },
];

const Tools = ({ show, handleClose }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(["All"]);

  useEffect(() => {
    const allCategories = ai.flatMap((tool) => tool.category);
    const uniqueCategories = Array.from(new Set(allCategories));
    setCategories(["All", ...uniqueCategories]);
  }, []);

  const handleCategoryChange = (category) => {
    if (category === "All") {
      setSelectedCategories(["All"]);
    } else {
      if (selectedCategories.length === 1 && selectedCategories[0] === "All") {
        setSelectedCategories([category]);
      } else {
        if (selectedCategories.includes(category)) {
          setSelectedCategories(
            selectedCategories.filter((c) => c !== category)
          );
        } else {
          setSelectedCategories([category]);
        }
      }
    }
  };

  const filteredTools = selectedCategories.includes("All")
    ? ai
    : ai.filter((tool) =>
        tool.category.some((cat) => selectedCategories.includes(cat))
      );

  console.log(filteredTools);
  return (
    <Modal show={show} onHide={handleClose} fullscreen="true" size="xl">
      <Modal.Header
        style={{
          backgroundColor: "#1EBBD7",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Modal.Title
          style={{
            color: "white",
            fontWeight: 800,
            fontSize: 32,
          }}
        >
          <span>Search Tools</span>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="category-container">
          <Form>
            {categories.map((category) => (
              <Form.Check
                key={category}
                inline
                label={category}
                type="checkbox"
                id={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
            ))}
          </Form>
        </div>
        <Tool tools={filteredTools} />
      </Modal.Body>
    </Modal>
  );
};

Tools.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Tools;
