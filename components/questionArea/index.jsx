import { Container, Title } from "./style";
import { useState, useEffect } from "react";
import Image from "next/image";
import question1 from "../../assets/1.png";
import question2 from "../../assets/2.png";
import question3 from "../../assets/3.png";
import question4 from "../../assets/4.png";
import question5 from "../../assets/5.png";

import question6 from "../../assets/6.png";
import question7 from "../../assets/7.png";
import question8 from "../../assets/8.png";
import question9 from "../../assets/9.png";
import question10 from "../../assets/10.png";

import question11 from "../../assets/11.png";
import question12 from "../../assets/12.png";
import question13 from "../../assets/13.png";
import question14 from "../../assets/14.png";
import question15 from "../../assets/15.png";

const images = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10,
  question11,
  question12,
  question13,
  question14,
  question15,
];

const QuestionArea = (props) => {
  return (
    <Container>
      <Title>Pergunta:</Title>
      <Image
        src={images[props.image]}
        alt="Pokemão"
        width={650}
        height={550}
      />
    </Container>
  );
};

export default QuestionArea;
