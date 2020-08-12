import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import List from "./components/List";
import { connect } from "react-redux";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      city: "",
      dataSwiggy: [],
      dataZomato: [],
    };
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          //border: "solid green 10px",
          minHeight: "100vh",
          minWidth: "100vw",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            //position: "absolute",
            top: 0,
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            //border: "solid green 1px",
          }}
        >
          <SearchBar
            onSearch={(name, city) => {
              this.handleSubmit(name, city);
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            border: "solid black 1px",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <List
            style={{ borderRight: "solid black 1px" }}
            list={this.props.dataZomato}
          />
          <List list={this.props.dataSwiggy} />
        </div>
      </div>
    );
  }
}
const mapStatetoProps = (store) => {
  return {
    dataZomato: store.reducer.zomato,
    dataSwiggy: store.reducer.swiggy,
  };
};

export default connect(mapStatetoProps, {})(App);
