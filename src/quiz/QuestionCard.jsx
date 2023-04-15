import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useDispatch } from "react-redux";
import { addAnswer } from "../store/answersHistory";

const getCardColor = (isCorrect) => {
  if (isCorrect === null) {
    return undefined;
  } else if (isCorrect) {
    return "green";
  } else {
    return "red";
  }
};

export default function QuestionCard({ question }) {
  const [value, setValue] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const checkAnswer = () => {
    const correctAnswer = question.answers.find((answer) => answer.correct);
    const isCorrected = correctAnswer.id.toString() === value;

    setIsCorrect(isCorrected);
    dispatch(
      addAnswer({
        userId: 1,
        questionId: question.id,
        passed: isCorrected,
      })
    );
  };

  return (
    <Card
      sx={{
        backgroundColor: getCardColor(isCorrect),
      }}
    >
      <CardContent>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            {question.question}
          </FormLabel>
          <RadioGroup
            value={value}
            onChange={handleChange}
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            {question.answers.map((answer, index) => (
              <FormControlLabel
                key={answer.id}
                value={answer.id}
                control={<Radio />}
                label={answer.answer}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={checkAnswer}>
          Check!
        </Button>
      </CardActions>
    </Card>
  );
}
