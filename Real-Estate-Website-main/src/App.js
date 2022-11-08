import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Home,
  Listings,
  Login,
  Signup,
  Forgot,
  Listing,
  Listing1,
  AddLisiting,
  Rent,
  AgentListing,
  PropertyListing,
  Customer1,
  Property1,
  Adminhome,
  Customer2,
  Property2,
  PropertyListing2,
  Property3,
  Auth,
  Property4,
  Property5,
  PropertyListing3,
  PropertyListing4,
} from "./pages";

const App = () => {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/auth" component={Auth} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/adminhome" component={Adminhome} />
        <Route exact path="/rent" component={Rent} />
        <Route exact path="/sold" component={Listings} />
        <Route exact path="/customer1" component={Customer1} />
        <Route exact path="/property1" component={Property1} />
        <Route exact path="/property/:id" component={Listing} />  
        <Route exact path="/rproperty/:id" component={Listing1} /> 
        <Route exact path="/customer2/:id" component={Customer2} />   
        <Route exact path="/property2/:id" component={Property2} />   
        <Route exact path="/property3/:id" component={Property3} />   
        <Route exact path="/property4/:id" component={Property4} />   
        <Route exact path="/property5/:id" component={Property5} />   
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/forgot-password" component={Forgot} />
        <Route path="/add-listing/:id?" component={AddLisiting} />
        <Route exact path="/mylisting" component={AgentListing} />
        <Route exact path="/mylisting1" component={PropertyListing} />
        <Route exact path="/mylisting2" component={PropertyListing2} />
        <Route exact path="/mylisting3/:email" component={PropertyListing3} />
        <Route exact path="/mylisting4/:email" component={PropertyListing4} />




      </Switch>
    </Router>
  );
};

export default App;
