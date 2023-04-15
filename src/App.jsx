import { useSelector } from "react-redux";

import Layout from "./components/layout/Layout";

import { selectQuizById } from "./store/quizReducer";

import QuizForm from "./quiz/components/QuizForm";

function App() {
  const activeQuiz = useSelector((state) => selectQuizById(state, 1));

  return (
    <div className="App">
      <Layout>
        <QuizForm data={activeQuiz} />
      </Layout>
    </div>
  );
}

export default App;
