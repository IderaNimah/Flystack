import Header from "./Header";

function WhyFly() {
  return (
    <div className="why">
      <Header />

      <div className="head">
        <h1>Why Flystack</h1>
      </div>
      <div className="board">
        <div className="board-one">
          <h2>Fun and Easy SMS Setup</h2>
          <img src="./assets/baby.png" alt=".." />
        </div>
        <div className="suboard">
          <div className="board-two">
            <h2>Reliable & Transparent Delivery</h2>
            <img src="./assets/thumb.png" alt=".." />
          </div>
          <div className="board-three">
            <h2>Secured Messaging</h2>
            <img src="./assets/question.png" alt=".." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyFly;
