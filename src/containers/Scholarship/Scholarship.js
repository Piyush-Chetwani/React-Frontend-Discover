import React, { useState, useEffect } from 'react';
import Scholarcard from '../../components/scholarship/scholarcard';
import styles from "./Scholarship.module.css";
const Scholarship = () => {
  const [search, setSearch] = useState("");
  const [array, setArray] = useState([]);

  useEffect(() => {
    fetch('https://discover-api.zubi.io/api/scholarships/all')
      .then(res => res.json())
      .then(data => {
        return setArray(data);
      })
  }, [])

  const handleChange = (event) => {
    setSearch(event.target.value)
  }
  const style = {
    borderRadius: "5px",
    border: "solid 1px #707070",
    backgroundColor: "#ffffff",
    width: "250px",
    height: "35px",
    marginTop: "2%",
    marginBottom: "0",
    paddingLeft: "2%",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: "normal",
  }

  const pip = {
    borderRadius: "10px",
    border: "solid 0.1px #707070",
    backgroundColor: "#ffffff",
    width: "129px",
    height: "40px",
    textDecoration: "none",
    marginRight: "10px",
    outline: "none",
    paddingLeft: "10px"
  }
  const color = {
    backgroundColor: "red"
  }

  let filteredContents = array.filter(
    (item) => {
      return (item?.topic?.toLowerCase().indexOf(search.toLowerCase()) !== -1 || item.place.toLowerCase().indexOf(search.toLowerCase()) !== -1 || search === "Location");
    }
  );

  let uniquePlace = [... new Set(array.map(data => data.place))]
  let uniqueTheme = ["A", "B"]
  let sort = ["Date", "Prize"]

  const data = filteredContents.map(item => <Scholarcard key={item.id} product={item} />)

  return (
    <div style={{ backgroundColor: "#f4f5f6" }}>
      <div>
        <center>
          <input
            placeholder="Search by name or location"
            onChange={handleChange}
            style={style}
          />
        </center>
      </div>
      <div style={{ marginLeft: "15%", marginTop: "2%" }}>
        <div class={styles.selectdiv}>
          <select onChange={handleChange} style={pip} class={styles.dropList} onHover={color}>
            <option> Location  </option>
            {uniquePlace.map(item => (
              <option className={styles.hover}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div style={{ marginTop: "2%" }} class={styles.filter2}>
        <div class={styles.selectdivcate}>
          <select onChange={handleChange} style={pip}>
            <option> Theme </option>
            {uniqueTheme.map(item => (
              <option>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div class={styles.filter3}>
        <div class={styles.selectdivsort}>
          <select onChange={handleChange} style={pip}>
            <option> Sort By </option>
            {sort.map(item => (
              <option>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ float: "none", backgroundColor: "#f4f5f6", marginBottom:"100px" }} className={styles.data}>{data}</div>
      </div>
    </div>
  );
}

export default Scholarship;
