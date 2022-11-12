import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Button from "@material-ui/core/Button";
import details from "../../models/details";
import ReactPlayer from 'react-player'
import LazyPlayer from 'react-player/lazy'

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
      fullscreen={true}
      title={<img width="120px" src={logo} />}
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
        <div className="my-3">
          <img width="200px" src={logo} />
        </div>
      </div>
    }
    <Row>
      {items.map((v, i) => {
        if (v.type === 'yt' && v.src) {
          return <Col xs={12} key={i}>

            <div className="d-flex w-100 h-100 mx-0 px-0 my-2">
              <ReactPlayer width="100%" url={v.src} />
            </div>
          </Col>
        }
        if (v.type === 'video' && v.src) {
          return <Col xs={12} key={i}>
            <div className="d-flex justify-content-center w-100 h-auto mx-0 px-0">
              <LazyPlayer controls url={v.src} height="auto" width />
            </div>
            {v.title && <h4 className="mb-3">{v.title}</h4>}
          </Col>
        }
        if (v.type === 'dual' && v.src) {
          return <div key={i}>
            <Row>
            <Col xs={12} md={6}>
              <div className="d-flex flex-column align-items-center justify-content-center h-100">
            {v.title && <h3 className="mb-3 display-5">{v.title}</h3>}
            {v.subtitle && <h4 className="mb-3">{v.subtitle}</h4>}
            {v.body && <p className="reg mb-3">{v.body}</p>}
            </div>
            </Col>
            <Col xs={12} md={6}>
              <Container>
                  <img src={v.src} className="img-fluid" />
              </Container>
            </Col>
            </Row>
          </div>
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