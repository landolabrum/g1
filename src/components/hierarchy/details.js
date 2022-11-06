import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Button from "@material-ui/core/Button";
import details from "../../models/details";
import ReactPlayer from 'react-player'
import { Col, Container, Row } from "react-bootstrap";
import UiModal from "../modal/modal";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [large, setLarge] = useState({})
  const [logo, setLogo] = useState(false)
  const [items, setItems] = useState([])
  useEffect(() => {
    Object.entries(details).map(([k, v]) => {
      if (v.id === id) {
        if (v.logo) {
          setLogo(v.logo)
        }
        setItems(v.items)
      }
    })
  }, [large])

  const handleLarge = (item) => {
    if (item === undefined) {
      setLarge({});
    } else {
      setLarge(item);
    }
  }

  return (<div >
    <UiModal
      show={large.type}
      onClose={handleLarge}
    >
      <div className="large-container">
        <div className="detail-image-large" >
          <img width="100%" src={large.src}
          />
        </div>
      </div>
    </UiModal>
    <Button
      onClick={() => navigate(-1)}
      variant={"outlined"}
      color={"primary"}
      className="mb-3"
    >
      Go back
    </Button>
    {logo &&
      <div className="mb-3 h-100 d-flex w-100 rounded border justify-content-center">
        <div>
          <img width="200px" src={logo} />
        </div>
      </div>
    }
    <Row>
      {items.map((v, i) => {
        if (v.type === 'yt' && v.src) {
          return <Col xs={12} key={i}>
            <div className="d-flex w-100 h-auto mx-0 px-0">
              <ReactPlayer width="100%" url={v.src} />
            </div>
          </Col>
        }
        return <>
          {v.type === 'image' && <Col className="py-2 " xs={12} md={6} lg={4} key={i}>
            <a className="detail-image" onClick={() => handleLarge(v)}>
              <img src={v.src} width="100%" />
            </a>
          </Col>}
        </>
      })}
    </Row>
  </div>
  );
};

export default Details;
