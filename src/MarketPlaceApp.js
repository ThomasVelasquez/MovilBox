import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";

const MarketPlaceApp = () => {
  return(
    <BrowserRouter>
      <Provider store={store} >
        <AppRouter />
      </Provider>
    </BrowserRouter>
  ) 
    
    
};

export default MarketPlaceApp;
