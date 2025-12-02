import "./roomList.styles.scss"
import {Link} from "react-router-dom"

const RoomList = ({data}) => {
  return (
  <div id="room-list">
    {data.map((Item, index) => {
      return (
      <Link to={`/rooms/all/${Item._id}`} key={Item._id} className="room-unit">
       <div className="img-wrapper">
         {/*<img src={Item.img[0]} alt/>*/}
       </div>
          <p className='name'>{Item.name}</p>
      </Link>
      )
    })}
  </div>
  )
}

export default RoomList
