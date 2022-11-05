import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Button from "@material-ui/core/Button";
import details from "../../models/details";
import ReactPlayer from 'react-player'
import { Col, Row } from "react-bootstrap";

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
  }, [items, large])

  const handleLarge = (item) => {
    console.log("it", item)
    if (large.length) {
      setLarge({})
    } else {
      setLarge(item)
    }
  }

  return (<>
    {large.type && <div className="detail-overlay">
      <h1>{JSON.stringify(large)}</h1>
      <img src={large.src} width="100%" />
    </div>}
    {JSON.stringify(large)}
    <Button
      onClick={() => navigate(-1)}
      variant={"outlined"}
      color={"primary"}
      className="mb-3"
    >
      Go back
    </Button>
    {logo &&
      <div className="bg-lite mb-3 h-100 d-flex w-100 rounded">
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
          {v.type === 'image' && <Col xs={12} md={6} lg={4} key={i}>
            <a onClick={() => handleLarge(v)}>
              <img src={v.src} width="100%" />
            </a>
          </Col>}
        </>
        // if (v.type === 'image') {
        //   return <ColWrapper>
        //   <a onClick={()=>handleLarge(v)}>
        //     <img src={v.src} width="100%" />
        //   </a>
        //   </ColWrapper>
        // }
      })}
    </Row>
  </>
  );
};

export default Details;
