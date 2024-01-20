import React from 'react'

import { resetPasswordWitnCredentials } from '@/app/_authActions'
import ResetPassword from '@/components/ResetPassword'

const page = ({ searchParams: { token } }) => {
  return (
    <div>
      <ResetPassword token={token} />
    </div>
  )
}

export default page