import "./Profile.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Profile = () => {
  return (
    <div id="profile" className="col-3">
      <div className="w-100 d-flex justify-content-center">
        <img
          src="https://i.ibb.co/wpYcybq/eu.jpg"
          alt="description"
          className="user-photo"
        />
      </div>
      <div className="primary-info d-flex justify-content-center">
        <Row>
          <Col>Igor Marques</Col>
        </Row>
      </div>
      <div className="second-info">
        <Row>
          <Col>2 anos e 7 meses de Empresa</Col>
        </Row>
      </div>

      <div className="third-info">
        <Row>
          <Col>
            <div className="profile-info-title">Info 1</div> Dummy Text
          </Col>
          <Col>
            <div className="profile-info-title">Info 2</div> Dummy Text
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="profile-info-title">Info 1</div> Dummy Text
          </Col>
          <Col>
            <div className="profile-info-title">Info 2</div> Dummy Text
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="profile-info-title">Info 1</div> Dummy Text
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Profile;
