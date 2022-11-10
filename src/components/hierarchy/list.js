import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box,  Container, Paper, Typography } from "@material-ui/core";
import { Col,Button, Row } from "react-bootstrap";

const List = ({ title, items, variant }) => {
  // const [items, setItems] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);

  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((result) => setItems(result))
  //     .finally(() => setLoading(false));
  // }, []);

  const navigate = useNavigate();

  // if (loading)
  //   return (
  //     <Container>
  //       <h1>Loading..</h1>
  //     </Container>
  //   );

  return (
    <>
      {title && <h1 className='text-capitalize font-weight-bold'>{title}</h1>}
      <Row>
        {items && items.map((item) => (
          <Col xs={12} md={6} lg={4} >
              <Box mb={3} key={item.id} >
                {variant&&      <>
                <Paper key={item.id} className="product-container" >
                  <div className="product-image-container">
                    <img src={item.img} alt="..." class={`${variant?variant+'-list-image': "list-image"}`} />
                  </div>
                  <div className="product-button-container">
                   <Button
                        size="large"
                        onClick={() => navigate("/details/" + item.id)}
                        className="bg-li"
                        >
                        See Details
                      </Button>
                        </div>
                </Paper>
                </>}
                {!variant&&       <Paper key={item.id} className="bg-light" >
                  <Box mx={2} py={2} className={`d-flex flex-column justify-content-around ${variant === 'product'?'align-items-center':'align-items-start'}`} minHeight={"370px"}>
                    <Typography
                      variant="h5"
                      component="h2"
                      className='text-capitalize fw-800 d-flex flex-column ms-2 w-100 justify-content-between'
                    >
                    {item.name}
                      {item.title ? <p className='italic xs ms-2' >- {item.title}</p>:<p></p>}
                      </Typography>

                    <img src={item.img} alt="..." class={`${variant?variant+'-list-image': "list-image"}`} />

                      <p className='sm text-secondary mt-4' >{item.details}</p>
                    { variant &&  <Button 
                        onClick={() => navigate("/details/" + item.id)}
                        color={"primary"}
                      >
                        See Details
                      </Button>}
                  </Box>
                </Paper>}
              </Box>

          </Col>
        ))}
      </Row>
    </>
  );
};

export default List;
