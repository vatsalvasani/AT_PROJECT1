import React from "react";
import { Section } from "../components";
import { ListingItemContainer } from "./index";
import axios from "axios";

class FeaturedListingContainer extends React.Component{
  state ={
    products : []
  }

  componentDidMount(){
    // setIsLoading(true);
    axios.get("http://localhost:8080/soldproperty/")
    .then((res)=>
    {
      const products = res.data;
      this.setState({products});
      console.log(res.data);
      console.log(this.state.products);
    });
  }

  render(){
    return (
    <Section bgColor="--bs-light">
      <Section.InnerContainer>
        <Section.Header>
          <Section.Title>Our Featured Listing</Section.Title>
        </Section.Header>
        <Section.Content>
          {this.state.products.map((product) => (
            <ListingItemContainer key={product.id} featured={product} />
          ))}
        </Section.Content>

      </Section.InnerContainer>
    </Section>
  );
};
};

export default FeaturedListingContainer;
