"use client"
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

const Profile = () => {
  const router=useRouter()
  return (
    <div>Profile Page

      <Button variant="contained" color="primary" onClick={() => {
        router.push("/dashboard/profile/3")
      }}>
        Profile Edit
      </Button>
    </div>
  )
}

export default Profile