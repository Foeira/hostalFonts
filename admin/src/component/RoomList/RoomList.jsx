import {Link} from "react-router-dom"

const RoomList = ({data}) => {
  return <div>
    {data.map((Item, index) => {
      return (
      <Link to={`/rooms/all/${Item._id}`} key={Item._id}>
          <p className='name'>{Item.name}</p>
      </Link>
      )
    })}
  </div>
}

export default RoomList
