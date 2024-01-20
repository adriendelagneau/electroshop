import { NextResponse} from "next/server";
import {headers} from "next/headers";

import stripe from "@/lib/stripe"; 
import Order from "@/lib/models/Order";
import User from "@/lib/models/User";


export const POST = async (req) => {
    const headersList = headers();
    const {cart, userId, userEmail} = await req.json();
    
    
    const lineItems = cart.map((item) => {

        return {
            price_data: {
                currency: "eur",
                product_data: {
                    name: item.name,
                    images: [item.image[0]]
                },
                unit_amount: item.price *100,
            },
            quantity: item.quantity,  
        };
    });


    try {
        /*

        const order = await Order.create({
            stripeId: "0",
            userId,
            cart,
            billingAddress: [""],
            totalAmount: 12,
            payementStatus: false,
        })



          // Push order._id to user.orderHistory
    const user = await User.findByIdAndUpdate(
        userId,
        { $push: { orderHistory: order._id } },
        { new: true } // Return the updated user document
    );
        
    */
      console.log(lineItems, "lineitems")
   
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/success`,
            cancel_url: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/`,
            customer_email: userEmail, 
            shipping_address_collection: {
                allowed_countries: ["FR"]
            },
            metadata: {
                orderId: order._id.toString(),
                userId: userId
            },
        });

        console.log(session, "session")

        return NextResponse.json({sessionId: session.id});
    } catch (err) {
        return NextResponse.json({error: "Error creating checkout session"});
    }
}