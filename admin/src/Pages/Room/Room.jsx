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
    <div>
      <h1 className='heading center'>Room</h1>
      {room ? <div> 
        <p>{room.name}</p>
        <p>{room.price}</p>
        <p>{room.desc}</p>

      </div> : null}
    </div>
  )
}

export default Room
