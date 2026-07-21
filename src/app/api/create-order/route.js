import React from 'react'
import Razorpay from "razorpay"
import { NextResponse } from 'next/server';

const razorpay = new Razorpay({
  key_id:process.env.RAZORPAY_KEY_ID,
  key_secret:process.env.RAZORPAY_KEY_SECRET
});

export async function POST(request) {
  try {
    const { amount } = await request.json();

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
    });

    return NextResponse.json(order);
  } catch (error) {
  console.error("Razorpay Error:", error);

  return NextResponse.json(
    { error: error.message },
    { status: 500 }
  );
}
}
  
