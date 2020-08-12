import React, { Component } from "react";
import axios from "axios";
import { TextField, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { updateData } from "../../action";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      city: "",
    };
  }
  handleSubmit = async () => {
    let value = {};
    const { name, city } = this.state;
    if (name) value.name = name;
    if (city) value.city = city;
    console.log("making request", value);
    const response = await fetch(
      `http://localhost:3000/dishes?name=${name}&city=${city}`
    );
    if (response.ok) {
      let result = await response.json();
      //let dataSwiggy =,
      //  dataZomato = ;
      //for (var i = 0; i < result.length; i++) {
      //  if (result[i].platform == "Zomato" || result[i].platform == "zomato")
      //    dataZomato.push(result[i]);
      //  else dataSwiggy.push(result[i]);
      //}
      this.props.updateData({
        zomato: result.zomato,
        swiggy: result.swiggy,
      });
      //this.setState({ ,  });
    } else {
      alert("Incomplete Data", response.status);
    }
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          //border: "solid black 1px",
          width: "80vw",
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <TextField
          label="Name"
          variant="outlined"
          type="text"
          style={{ width: "20%", margin: "10px" }}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <TextField
          label="City"
          variant="outlined"
          type="text"
          style={{ width: "20%", margin: "10px" }}
          onChange={(e) => {
            this.setState({ city: e.target.value });
          }}
        />
        <Button variant="outlined" onClick={this.handleSubmit}>
          Search
        </Button>
      </div>
    );
  }
}
export default connect(null, { updateData })(SearchBar);
