"use client"

import React from 'react'




const UserHistory = ({userHistory}) => {

console.log(userHistory)
  return (

    <div className="p-6 ">
      <div className="max-w-3xl mx-auto">
        <h2 className="mb-4 text-2xl font-semibold">Order History</h2>


        <table className="min-w-full overflow-hidden bg-white border border-gray-200 rounded-lg">
          <thead className="text-skin-base bg-skin-inverted">
            <tr>
              <th className="px-4 py-2 text-left border-b">Date placed</th>
              <th className="px-4 py-2 text-left border-b">order id</th>
              <th className="px-4 py-2 text-left border-b">Total Price</th>
              <th className="px-4 py-2 text-left border-b">Order status</th>
              <th className="px-4 py-2 text-left border-b"></th>
            </tr>
          </thead>
          <tbody>

            
            <tr>
              <td className="px-4 py-2 border-b">data.createdAt</td>
              <td className="px-4 py-2 border-b">data.id</td>
              <td className="px-4 py-2 border-b">data.totalAmount €</td>
              <td className="px-4 py-2 border-b">data.status</td>
              <td className="px-4 py-2 border-b">details</td>
            </tr>

            <tr>
              <td className="px-4 py-2 border-b">2024-01-25</td>
              <td className="px-4 py-2 border-b">1</td>
              <td className="px-4 py-2 border-b">$30.00</td>
              <td className="px-4 py-2 border-b">delivered</td>
              <td className="px-4 py-2 border-b">details</td>
            </tr>


          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserHistory