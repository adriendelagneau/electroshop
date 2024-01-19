import { getUserWithOrderHistory } from '@/app/_authActions'
import ChangePassword from '@/components/ChangePassword'
import SignOutButton from '@/components/buttons/SignOutButton'
import React from 'react'

const ProfilePage = async ({ params: { id } }) => {

  const user = await getUserWithOrderHistory(id)

  console.log(user)

  return (
    <div>


      <ChangePassword />
          <SignOutButton />
    </div>
  )
}

export default ProfilePage