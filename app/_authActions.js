'use server'

import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route"
import User from "@/lib/models/User"
import { redirect } from "next/navigation"
import bcrypt from "bcryptjs";
import { generateToken, verifyToken } from '@/utils/token' 
import sendEmail from "@/utils/sendEmail"
import { connectToDatabase } from "@/lib/db"

const BASE_URL= process.env.NEXT_PUBLIC_NEXTAUTH_URL


export const signUpWithCredential = async (data) => {
       
    await connectToDatabase()

    try {
        const user = await User.findOne({ email: data.email })
        if (user) throw new Error('Email already exist')
        
        if (data.password) {
            const salt = await bcrypt.genSalt(10)
            data.password = await bcrypt.hash(data.password, salt);

            const token = generateToken({ user: data })
            
            await sendEmail({
                to: data.email,
                url: `${BASE_URL}/verify_email?token=${token}`,
                text: 'VERIFY EMAIL'
            })
        }
        
        return {msg: "verification mail has been send"}
    } catch (err) {
        redirect(`/errors?error=${err.message}`)
    }
}

export const verifyWitnCredentials = async (token) => {
    
    await connectToDatabase()
    
    try {
        const { user } = verifyToken(token)
     
        const userExist = await User.findOne({ email: user.email })
        
        if (userExist) return { msg: "verify success !" }
        
        const newUser = new User(user)
        
        await newUser.save()
        return {msg: "verify success"}
    } catch (err) {
        redirect(`/errors?error=${err.message}`)
    }
}


export const findUserByEmail = async (email) => {
    
    await connectToDatabase()
    
    try {
        const userExist = await User.findOne({ email: email })
        console.log(userExist, 'tt')
        if (userExist) return  true
        
       else return false
    } catch (err) {
        redirect(`/errors?error=${err.message}`)
    }
}

export const forgotPasswordWitnCredentials = async (email) => {
    
    await connectToDatabase()

    try { 
       
        const user = await User.findOne({email})
        if (!user) throw new Error('email does not exist')
      
    
        if (user?.provider !== 'credentials') {
           throw new Error(`this account is signed with ${session?.user?.provider} you can t use  this function`)
        }
    
        const token = generateToken({ userId: user._id })
        
        await sendEmail({
            to: email,
            url: `${BASE_URL}/reset_password?token=${token}`,
            text: "Reset pssword"
        })
        
        return {msg: "change password success"}
    } catch (err) {
        redirect(`/errors?error=${err.message}`)
    }
}



export const resetPasswordWitnCredentials = async (token, password) => {

    await connectToDatabase()
    
    console.log(token, "zz")
    try { 
        const { userId } = verifyToken(token)
        
        const newPass = await bcrypt.hash(password, 12)

        await User.findByIdAndUpdate(userId, {password: newPass})
        
        return {msg: "change password success"}
    } catch (err) {
        redirect(`/errors?error=${err.message}`)
    }
}

export const getUserWithOrderHistory = async (userId) => {
    await connectToDatabase();
  
    try {
      // Find the user by ID and populate the 'orderHistory' array with order details
      const user = await User.findById(userId).populate('orderHistory').exec();
  
      if (!user)   if (!user) throw new Error('no user')
  
      return user;
    } catch (err) {
      console.log('Error getting user with order history:', err);
      // Handle other errors
      redirect(`/errors?error=${err.message}`);
    }
  };

  
export const changePassword = async ({oldPassword, newPassword}) => {
    await connectToDatabase()
      
    const session = await getServerSession(authOptions)
    if (!session) throw new Error('unauthorized')

    if (session?.user?.provider !== "credentials") {
        throw new Error(`errror: this account is signed with ${session?.user?.provider}, you can t use this function`)
    }
    try {
        
        const user = await User.findById(session.user._id)
        if (!user) throw new Error('no user')

        const compare = await bcrypt.compare(oldPassword, user.password)
        if (!compare) throw new Error('password does not match')
       
        const salt = await bcrypt.genSalt(10)
        const newPass = await bcrypt.hash(newPassword, salt)
        
        await User.findByIdAndUpdate(user._id, {
            password: newPass
        })

        return {msg: "change password success"}
        
    } catch (err) {
        redirect(`/errors?error=${err.message}`)
    }
}
  
/**
 * verify user password before password change
 */