import React, { useState, useEffect } from "react";
import axios from "axios";
import PeopleCard from "./PeopleCard";
// import { Container, Row, Col } from "reactstrap";
// import Loader from "../Loader/Loader";

export default function People() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(res => {
        console.log(res.data.results);
        setPeople(res.data.results);
      })
      .catch(error => {
        console.log(`The error was: ${error}`);
      });
  }, []);

  return (
    <div className='people'>
      {people.map(person => {
        return (
          <PeopleCard
            name={person.name}
            birthYear={person.birth_year}
            gender={person.gender}
            skin={person.skin_color}
            url={person.url}
            hair={person.hair_color}
            mass={person.mass}
            height={person.height}
            eyes={person.eye_color}
          />
        );
      })}
    </div>
  );
}
