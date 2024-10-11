import Header from "./Header";

function Pricing(){
  return(
    <div className="pter">
    <Header/>
    <div className="pricehead">
        <h1>Pricing</h1>
      </div>
      <div className="pricing-board">
        <div className="pboard-one">
         <h1>$50</h1>
        </div>
        <div className="pboard-two">
          <h1>$50</h1>
        </div>
      </div>
    </div>
  )
}

export default Pricing;