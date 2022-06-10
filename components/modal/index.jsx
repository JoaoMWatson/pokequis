import { useState, useEffect } from "react";
import { Container, Content, Title, Points, NextButton, Footer } from "./style";

export default function Modal({ initialState, points, onClose }) {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggleOverlay = () => {
    /* Toggle the aria-hidden state on the overlay and the 
        no-scroll class on the body */
    window.document.body.setAttribute("aria-hidden", !isOpen);
    window.document.body.classList.toggle("noscroll", isOpen);

    /* On some mobile browser when the overlay was previously
        opened and scrolled, if you open it again it doesn't 
        reset its scrollTop property */
    window.document.body.scrollTop = 0;
  };

  const handleClose = () => {
    onClose && onClose();
    setIsOpen(false);
    toggleOverlay();
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const listener = window.document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          handleClose();
        }
      });

      return () => {
        window.document.removeEventListener("keydown", listener);
      };
    }
  }, []);

  return (
    <Container isOpen={isOpen}>
      <Content>
        <Title>Voce fez:</Title>
        <Points>{points} pontos</Points>
        <NextButton onClick={handleClose}>Recomeçar</NextButton>
        <Footer><b>Feito por: </b>João Pedro Watson, Lucas Henrique Coelho e Murilo </Footer>

      </Content>
      <div className="overlay" onClick={handleClose} />
    </Container>
  );
}
