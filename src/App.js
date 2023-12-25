import SecondImg from "./Component/SecondImg";
import Text from "./Component/Text"
import Price from "./Component/Price";
import Stars from "./Component/Stars";

const App = () => {
  return (
      <div className={'container'}>
        <div className="row">
          <div className="col-6">
            <div className="box">
              <SecondImg/>
            </div>
          </div>
          <div className="col-6 innerbox">
            <Text/>
            <Price/>
            <div className="stars-wrap">
              <Stars/>
              <Stars/>
              <Stars/>
              <Stars/>
            </div>
          </div>
        </div>
      </div>
  );
};
export default App;
