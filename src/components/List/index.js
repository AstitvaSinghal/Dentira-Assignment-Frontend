import React, { Component } from "react";
import { Paper } from "@material-ui/core";
export default class List extends Component {
  render() {
    return (
      <div
        style={{
          width: "50%",
          overflow: "hidden",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          ...this.props.style,
        }}
      >
        {this.props.list.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                padding: "1.5rem",
                margin: "1rem 0.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                textAlign: "center",
                fontSize: "1.125rem",
                boxShadow: "0 0 10px 0 lightgrey",
                //border: "solid black 1px",
              }}
            >
              <h1>{item.restaurant}</h1>
              {item.dishes.map((i) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      margin: "20px",
                      flexDirection: "row",
                    }}
                  >
                    {i.imageURL && (
                      <img
                        src={i.imageURL}
                        //style={{ height: "50px", width: "50px" }}
                        loading="lazy"
                      />
                    )}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 1,
                        marginLeft: 10,
                        height: "100%",
                        flexDirection: "column",

                        //border: "solid black 1px",
                      }}
                    >
                      <div>{i.name}</div>
                      <div>{i.price}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
