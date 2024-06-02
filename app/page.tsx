
import React from 'react'
import { Link } from 'react-router-dom'
import HomePageUser from '../components/HomePageUser'

export default function Page() {
  return (
    <div>
      <Link to="/home">
        <HomePageUser />
      </Link>
    </div>
  )
}