import React, { useState } from 'react'
import { useEffect } from 'react'
import { data } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData([])
    // const [data, setData] = useState([])
    // useEffect(()=>{
    // fetch('https://api.github.com/users/milcoln')
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data)
    //     setData(data)
    // })
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white text-2xl'>
      Gitub Followers : {data.followers}
      <img className='inline-flex' src={data.avatar_url} width={300}></img>
    </div>
  )
}

export default Github

export const GithubInfoLoader = async () => {
    const response = await fetch ('https://api.github.com/users/milcoln')
    return response.json()
}
