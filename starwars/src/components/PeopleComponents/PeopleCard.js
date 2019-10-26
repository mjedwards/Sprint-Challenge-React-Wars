import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Row,
  Col
} from "reactstrap";
import PeopleModal from "./PeopleModal";

const PeopleCard = props => {
  return (
    <div className='person'>
      <Container>
        <Row>
          <Col>
            <Card sm={{ size: "auto" }}>
              {/* <CardImg top width='100%' src={props.url} alt={props.url} /> */}
              <CardBody>
                <CardTitle>
                  <h2>{props.name}</h2>
                </CardTitle>
                <CardSubtitle>
                  {props.birthYear ? <p>born {props.birthYear}</p> : <p></p>}{" "}
                  <br></br> <p>{props.gender}</p>
                  <br></br> <p>skin color is {props.skin}</p>
                </CardSubtitle>

                <PeopleModal
                  title={props.title}
                  explanation={props.explanation}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default PeopleCard;
