"use client"

import React from 'react'

const UserHistory = ({ user }) => {
  

  return (
    <div>
      <p>{user.orderHistory.map((o, i) => (
      <div key={i}>{o.userId}</div>
      ))}
      </p>
    </div>
  )
}

export default UserHistory