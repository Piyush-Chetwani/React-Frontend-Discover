import React from 'react';
import Concard from '../../components/conferences/concard';
import ConData from '../../utils/ConferenceArray';
import styles from "./Conferences.module.css"


class Conferences extends React.Component {
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

  let filteredContents = ConData.filter(
    (pair) => {
      return (pair.topic.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || pair.place.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || pair.tag.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || this.state.search === "Category" || this.state.search === "Location");
    }
  );

  let uniquePlace = [... new Set(ConData.map(data => data.place))]

  const datas = filteredContents.map (pair =><Concard key={pair.id} prod={pair}/>)
  return (
    <div style={{backgroundColor:"#f4f5f6"}}>
<center>
          <div >

              <input
                placeholder="Search by conference name or location"
                onChange={this.handleChange}
                style={style}
              />

          </div>
          </center>
          <div style={{float:"left", marginTop:"2%"}} class={styles.filter1}>
          <div class={styles.selectdiv}>
          <select  onChange={this.handleChange} style={pip}>
          <option> Location </option>
                    {uniquePlace.map(item => (
                      <option>
                      {item}
                      </option>
                    ))}
            </select>
            </div>
            </div>
            <div style={{marginTop:"2%", marginBottom:"70px"}} class={styles.filter2}>
              </div>
              <div style={{display:"flex"}}>
          <div className={styles.data}>{datas}</div>
          </div>

    </div>

);
}
}

export default Conferences;
