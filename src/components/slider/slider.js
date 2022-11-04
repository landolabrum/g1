import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"

export default function Slider({ items, variant, duration }) {
  const [time, setTime]=useState(0)
  const [stop, setStop]=useState(false)
  let dur = duration
  if(!dur){
    dur = 3  
  }
  const handleTime = () =>{
    if(!stop){
      if(time >= items.length -1){
        setTime(0)
      }else{
        setTime(time + 1)
      }
    }
  }
  useEffect(()=>{
    setTimeout(handleTime, dur  * 1000 )
  },[time])
  const handleStop = () =>{
    setStop(!stop)
  }
  const item = items[time]
  return <div className="slider">
    {/* {console.log(time)} */}
    <>
      <div className={`slide-item ${variant ? variant : ''}`} >
        <img className="slide-image" alt={item.id} src={item.img} />
      </div>
        <div className="slide-content" onMouseEnter={handleStop} onMouseLeave={handleStop}>
          <div className="slide-info">
            <Container>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            </Container>
          </div>
        </div>
    </>
    {/* {items && Object.entries(items).map(([k, v]) => {
      return <>
      <div className={`slide-item ${variant ? variant : ''}`} key={k}>
        <img className="slide-image" alt={v.id} src={v.img} />
      </div>
        <div className="slide-content">
          <div className="slide-info">
            <div>
            <h3>{v.title}</h3>
            <p>{v.body}</p>
            </div>
          </div>
        </div>
    </>
    })} */}
  </div>
}