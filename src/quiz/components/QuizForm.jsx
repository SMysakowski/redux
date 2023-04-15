import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";
import QuestionCard from "../QuestionCard";

export default function QuizForm({ data }) {
  const { questions, title } = data;

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h1">
          {title}
        </Typography>
      </Grid>
      {questions.map((question, index) => (
        <Grid item xs={6} key={index}>
          <QuestionCard question={question} />
        </Grid>
      ))}
    </Grid>
  );
}
