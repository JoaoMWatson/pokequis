import { Container, Hr } from "./style";
import { useState, useEffect } from "react";

const Score = (props) => {
  const [scores, setScore] = useState([]);
  const [countId, setCountId] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScore(JSON.parse(localStorage.getItem("score") || 0));
    }
  }, []);

  useEffect(() => {
    setScore(JSON.parse(localStorage.getItem("score")));
  }, [props.count]);

  return (
    <Container>
      {scores.map((score) => (
        <Hr key={countId++} status={score.question} />
      ))}
    </Container>
  );
};

export default Score;
