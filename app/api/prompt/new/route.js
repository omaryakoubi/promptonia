import { connectToDB } from "@utils/database";
import Prompt from "@models/Prompt";

export const POST = async (request) => {
  const { userId, prompt, tag } = request.json();

  console.log(userId, prompt, tag);

  await connectToDB();

  try {
    const newPrompt = await Prompt.create({ creator: userId, prompt, tag });
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
