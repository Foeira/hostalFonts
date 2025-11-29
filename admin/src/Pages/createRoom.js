import {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { uploadImage } from '../helper/utils'

const CreateRoom = () => {
  const navigate = useNavigate()
  const {user} = useSelector((state) => state.auth)
  const [files, setFiles] = useState()
  const [ formData, setFormData ] = useState({
    name:"",
    price:"",
    desc:"",
    roomNumbers:"401,101,102,103"
  })

  const { name, price, desc, roomNumbers} = formData;

  useEffect(()=> {
    if(!user){
        navigate("/login")

    }
  }, [user])

  const handleChange = (e) =>{
    setFormData(prevState => ({
        ...prevState,
        [e.target.name]: e.target.value,
    }))
  }

  //handle file change

  const handleFileChange = (e) => {
    setFiles(e.target.files)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!name || !price || !roomNumbers){
        return
    }

    const roomArray = roomNumbers.split(",").map(item => {
        return{
            number: parseInt(item),
            unavailableDates: []
        }
    })

        let list = []
        list = await Promise.all(Object.values(files).map(async(file)=>{
           const url = await uploadImage(file) 
           return url
        })
    )

    const dataToSubmit = {
        name,
        price,
        desc,
        roomNumbers: roomArray,
        img: list,
    }

    //dispatch createRoom function
    console.log(dataToSubmit )
   
  }
  return (
    <div className='container'>
      <h1 className="heading center">Create Room</h1>

      <div className='form-wrapper'>
        <div className='form-wrapper'>
        <form onSubmit={handleSubmit}>
            <div className='input-group'>
                <label htmlFor='name'>Name</label>
                <input 
                type='text'
                name='name'
                value={name}
                placeholder='Enter room name'
                onChange={handleChange}>
                </input>
            </div>

            <div className='input-group'>
            <label htmlFor='name'>Price</label>
            <input 
            type='number'
            name='price'
            value={price}
            placeholder='Enter room price $'
            onChange={handleChange}>
            </input>
            </div>

            <div className='input-group'>
                <label htmlFor='desc'>Descripción</label>
                <textarea
                 name='desc' 
                 onChange={handleChange} 
                 value={desc}
                 ></textarea>
            </div>
            <div className='input-group'>
                <label htmlFor='desc'>Room numbers</label>
                <input
                 name='roomNumbers' 
                 onChange={handleChange} 
                 value={roomNumbers}
                 placeholder='101,102,103'
                 ></input>
            </div>
            <div className='input-group'>
                <label htmlFor='name'>Imagenes</label>
                <input 
                type='file'
                name='file'
                multiple
                onChange={handleFileChange}>
                </input>

                
            </div>


        <button type="submit">Submit</button>
        </form>
        </div>

      </div>
    </div>
  )
}

export default CreateRoom
