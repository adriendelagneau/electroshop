import { getUserWithOrderHistory } from '@/app/_authActions'
import ChangePassword from '@/components/ChangePassword'
import UserHistory from '@/components/UserHistory'
import SignOutButton from '@/components/buttons/SignOutButton'
import React from 'react'

const ProfilePage = async ({ params: { id } }) => {

  const user =  await getUserWithOrderHistory(id)

  console.log(user, "zzz")
  return (
    <div className='min-h-screen '>

    
       <UserHistory user={user} /> 
      <ChangePassword />
          <SignOutButton />
    </div>
  )
}

export default ProfilePage