"use server";

import { subscribe } from "@/models/subscribemodel";
import { connectDB } from "@/utils/dbconnection";

export default async function newsletterFunction(req) {
  const { email, subscribed } = req;

  await connectDB();
  try {
    // Check if email already exists in the database
    const existing_subscription = await subscribe.findOne({ email });
    // Check if subscription
    if (existing_subscription) {
     return {
       success: false,
       message: "Email already subscribed",
     }
    } 

    if (existing_subscription && existing_subscription.subscribed) {
      return {
        success: false,
        message: "Email already subscribed",
      };
    }
    const new_Subscription = await subscribe.create({ email, subscribed });
    if (!new_Subscription) {
      throw new Error("Failed to subscribe user");
    }

    return {
      success: true,
      message: "Subscribed successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}
