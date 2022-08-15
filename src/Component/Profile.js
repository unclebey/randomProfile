import React, { useEffect, useState } from 'react'



const Profile = ()=> {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [country, setCountry] = useState("")
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
      let mail = profileData.results[0].email
      let country = profileData.results[0].location.country


      setFirstName(fName)
      setLastName(lName)
      setImage(img)
      setCountry(country)
      setEmail(mail)

  })

}

  const handle = ({isActive,clicked}) => {
    getData()
  }


  return (
    <div className="App">

      <div className="card">
      <div className='img'><img src={image} alt="ProfileImage"/></div>
      <div>
      <h2> First name :  {firstName}</h2>
      <h2> Last Name: {lastName}</h2>
      <h2> Email: {email}</h2>
      <h2> Country: {country}</h2>
      <button onClick={handle}>Get another User</button>
      </div>
      </div>
     
     
     
    </div>

  )
}

export default Profile