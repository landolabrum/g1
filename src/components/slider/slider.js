import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"

export default function Slider({ items, variant, duration }) {
  const [time, setTime] = useState(0)
  // const [stop, setStop] = useState(false)
  let dur = duration
  if (!dur) {
    dur = 3
  }
  const handleTime = () => {
    if (time >= items.length - 1) {
      setTime(0)
    } else {
      setTime(time + 1)
    }
  }
  useEffect(() => {
    // if (!stop) {
      setTimeout(handleTime, dur * 1000)
    // }
  }, [time])
  // const handleStop = () => {
  //   setStop(!stop)
  // }
  const item = items[time]
  return <div className="slider">
    {/* {console.log(time)} */}
    <>
      <div className={`slide-image-container ${variant ? variant : ''}`} >
        <img className="slide-image" alt={item.id} src={item.img} />
      </div>
      <Row className="slide-content"
      // onMouseEnter={handleStop} onMouseLeave={handleStop}
      >
        <Col className="slide-info" xs={12} md={8} lg={6}>
          <div className="d-flex justify-content-end h-100 flex-column">
            <div className="slide-header">
              {/* {stop.toString()} */}
              <div className="slide-title">{item.title}</div>
              <div className="slide-body grey light">{item.body}</div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  </div>
}