import React, { useState, useEffect } from 'react';
import Hack from "../../components/hackathons/Hack";
import Array from "../../utils/HackathonData";
import styles from "./Hackathon.module.css"

class Hackathon extends React.Component {
constructor() {
  super()
  this.state = {
    search:""
  };
  this.handleChange=this.handleChange.bind(this)
}

handleChange(event) {
  this.setState ({
    search:event.target.value
  })
}

  render() {

  const style = {
    borderRadius: "5px",
    border: "solid 1px #707070",
    backgroundColor: "#ffffff",
    width:"305px",
    height:"35px",
    marginTop:"2%",
    marginBottom:"0",
    paddingLeft:"2%",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: "normal",
  }

  const pip = {
      borderRadius: "10px",
      border: "solid 1px #707070",
      backgroundColor: "#ffffff",
      width: "129px",
      height: "40px",
      textDecoration: "none",
      marginRight:"10px"
    }

    let filteredContents = Array.filter(
      (item) => {
        return (item.text.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || item.place.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || item.tag.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || this.state.search === "Tag" || this.state.search === "Location");
      }
    );

    let uniquePlace = [... new Set(Array.map(data => data.place))]
    let uniqueTheme = [... new Set(Array.map(data => data.tag))]

    const data = filteredContents.map(item => <Hack key={item.id} product={item} />)
  return (
    <div style={{ backgroundColor: "#f4f5f6" }}>
      <div>
        <center>
          <input
            placeholder="Search by hackathon name or location"
            onChange={this.handleChange}
            style={style}
          />
        </center>
      </div>

      <div style={{ float: "left", marginTop: "2%" }} class={styles.filter1}>
        <div class={styles.selectdiv}>
          <select onChange={this.handleChange} style={pip} class={styles.sel}>
            <option> Location </option>
            {uniquePlace.map(item => (
              <option>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div style={{ marginTop: "2%" }} class={styles.filter2}>
        <div class={styles.selectdivcate}>
          <select onChange={this.handleChange} style={pip} class={styles.sel}>
            <option> Theme </option>
            {uniqueTheme.map(item => (
              <option>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ float: "none", backgroundColor: "#f4f5f6", marginBottom:"100px"}} className={styles.data}>{data}</div>

      </div>
    </div>

  );
}
}

export default Hackathon;
