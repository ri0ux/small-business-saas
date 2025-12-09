import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  console.log("hiiiiiiiiiii", process.env.NEXT_PUBLIC_SUPABASE_URL);
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  );
}
