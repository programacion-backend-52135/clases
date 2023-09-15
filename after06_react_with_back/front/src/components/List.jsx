import React, { useEffect, useState } from "react";
import axios from "axios";

export default function List() {

  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`http://127.0.0.1:8080/todo`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);



  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {APIData.map((data) => {
            return (
              <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}