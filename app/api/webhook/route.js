import Order from "@/lib/models/Order";
import sendEmail from "@/utils/sendEmail";
import { NextResponse } from "next/server";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET

const fulfillOrder = async (session) => {

    try {
        await Order.findByIdAndUpdate(session.metadata.orderId, {
            stripeId: session.id,
            billingAddress: session.shipping,
            totalAmount: session.amount_subtotal/100,
            payementStatus: "paid",
        })
        return new NextResponse(null, { status: 200 });
    } catch (err) {
        return new NextResponse(`Webhook error for payment ${session.id}: ${err}`, { status: 400 });
    }
}

const successfullOrderEmail = async (session) => {
    console.log(session, "session1")
    try {

        await sendEmail({
            to: session.customer_details.email,
            url: ``, // session.metadata.userId
            text: `your order ${session.metadata.orderId} have been successfully paid`
        })
    } catch (err) {
        console.error(`Error sending email for order ${session.metadata.orderId}: ${err}`);
        return new NextResponse(`Internal Server Error`, { status: 500 });
    }
}

export const POST = async (req) => {
    const payload = await req.text()
    const sig2 = req.headers.get('stripe-signature')
    let event

    try {
        event = stripe.webhooks.constructEvent(payload, sig2, endpointSecret)
    } catch (err) {
        console.log(err);
        return new NextResponse(`Webhook error: ${err.message}`, { status: 400 });
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;

      await  successfullOrderEmail(session)
        return fulfillOrder(session);
    }

    return new NextResponse("RESPONSE EXECUTE", { status: 200 });
}

