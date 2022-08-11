import React, { useEffect, useState } from 'react'


const Profile = ()=> {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    // const [email, setEmail] = useState("")
    // const [country, setCountry] = useState("")
    const [image,setImage] = useState("")

    useEffect ( () => {
      getData()
    } , [])

  const getData = ()=>{
  fetch("https://randomuser.me/api")
  .then( res => res.json() )
  .then( profileData => {  

      let img = profileData.results[0].picture.large
      let fName = profileData.results[0].name.first
      let lName = profileData.results[0].name.last

      setFirstName(fName)
      setLastName(lName)
      setImage(img)

  })

}

  const handle = () => {
    getData()
  }


  return (
    <div>
       <div>Profile</div>
       <button onClick={handle} >Generate Random Profile </button>
    <div>
      <img src={image}/>
      <h1> First name :  {firstName}</h1>
      <h1> Last Name: {lastName}</h1>
    </div>
    </div>
  )
}

export default Profile