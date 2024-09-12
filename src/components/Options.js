import { useQues } from "../context/QuizContext";

function Options({ question }) {
  const { dispatch, answer } = useQues();
  const hasAnswerd = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswerd
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          disabled={hasAnswerd}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })} // answer === index
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
