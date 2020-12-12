import Card from "react-bootstrap/Card";
import React from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { TwitterShareButton } from "react-share";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [quotes, setQuotes] = useState("");

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  const shareUrl = "https://stackoverflow.com/";
  return (
    <div>
      <h1>Welcome to the Random Quote Machine</h1>
      <Container id="container">
        <Card border="dark" bg="dark" text="white">
          <Card.Header>Quote</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>{quotes.text}</p>
              <footer className="blockquote-footer">{quotes.author}</footer>
              <Container className="buttonTop">
                <Button id="button">
                  <i class="fas fa-quote-left"></i>New Quote
                  <i class="fas fa-quote-right"></i>
                </Button>
                <Button>
                  <TwitterShareButton url={shareUrl}>
                    Tweet <i class="fab fa-twitter"></i>
                  </TwitterShareButton>
                </Button>
              </Container>
            </blockquote>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;
