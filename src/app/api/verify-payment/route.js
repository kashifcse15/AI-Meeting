import crypto from "crypto";
import { supabase } from "@/services/supabaseClient";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      plan,
      userEmail,
    } = await request.json();

    // Generate signature
    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    // Verify signature
    if (generatedSignature !== razorpay_signature) {
      return NextResponse.json(
        {
          success: false,
          message: "Payment verification failed",
        },
        { status: 400 }
      );
    }

    // Save payment details
    const { error: paymentError } = await supabase
      .from("Payment")
      .insert({
        user_email: userEmail,
        razorpay_payment_id,
        razorpay_order_id,
        plan_name: plan.name,
        amount: plan.price,
        credits: plan.credits,
        status: "success",
      });

    if (paymentError) {
      console.error(paymentError);

      return NextResponse.json(
        {
          success: false,
          message: "Failed to save payment.",
        },
        { status: 500 }
      );
    }

    // Get current user credits
    const { data: userData, error: userError } = await supabase
      .from("Users")
      .select("credits")
      .eq("email", userEmail)
      .single();

    if (userError || !userData) {
      console.error(userError);

      return NextResponse.json(
        {
          success: false,
          message: "User not found.",
        },
        { status: 404 }
      );
    }

    // Update credits
    const newCredits = userData.credits + plan.credits;

    const { error: updateError } = await supabase
      .from("Users")
      .update({
        credits: newCredits,
      })
      .eq("email", userEmail);

    if (updateError) {
      console.error(updateError);

      return NextResponse.json(
        {
          success: false,
          message: "Failed to update credits.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Payment verified successfully.",
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}