import React from 'react'

const Profile = ({data , setData}) => {
    const {name , email , age} = data;
    
    const handleClick = (e , item)=>{
        setData((prevData)=>({
           ...prevData,
           [item]:e.target.value,
        }))
    }
  return (
    <div className='profile'>
        <div className='profile-data'>
        <label>
           Name: <input type='text' value={name} onChange={(e)=>handleClick(e , "name")}/>
        </label>
        </div>
        <div className='profile-data'>
        <label>
           Email: <input type='text' value={email} onChange={(e)=>handleClick(e , "email")}/>
        </label>
        </div>
        <div className='profile-data'>
        <label>
           age: <input type='text' value={age} onChange={(e)=>handleClick(e , "age")}/>
        </label>
        </div>
    </div>
  )
}

export default Profile