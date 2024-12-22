import "./App.css";
import { CardComment } from "./assets/components/CardComment/cardComment";
import { CardUserComment } from "./assets/components/CardUserComment/cardUserComment";

function App() {
  return (
    <>
      <article className="contentCardComments">
        <CardComment />
      </article>
      <article className="contentCardUserComments">
        <CardUserComment />
      </article>
    </>
  );
}

export default App;
