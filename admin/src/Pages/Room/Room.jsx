import "./room.styles.scss"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Room = () => {

    const { id } = useParams()

    const [room, setRoom] = useState(null)
    useEffect(() => {

        const getRoom = async () => {
            try {

                const res = await fetch(`/api/rooms/${id}`)

                if(res.ok){
                    const data = await res.json()
                    setRoom(data)
                }
                
            } catch (error) {
                console.log(error)
                
            }
        }
        getRoom()

    },[])
  return (
    <div className="container">
    <div id="room">
      {room ? (
        <div> 
            <h1 className='heading center'>{room.name}</h1>
            <div className="img-wrapper">
            {/*<img src={room.img[0]} alt=""/>*/}
            </div>
                <p>{room.desc}</p>
                <h2>${room.price.toFixed(2)} MXN</h2>
      </div>
      ) : null}
    </div>
    </div>
  )
}

export default Room
