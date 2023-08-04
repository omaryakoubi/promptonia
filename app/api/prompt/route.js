import { connectToDB } from "@utils/database";
import Prompt from "@models/Prompt";

export const GET = async () => {
  await connectToDB();
  try {
    const promptList = await Prompt.find({}).populate("creator");
    return new Response(JSON.stringify(promptList), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompt list", { status: 500 });
  }
};
