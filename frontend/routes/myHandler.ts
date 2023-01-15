import { Handlers } from "https://deno.land/x/fresh@1.1.2/server.ts";

// deno-lint-ignore no-explicit-any
export const handler: Handlers<any, { data: string }> = {
  GET(_req, ctx) {
    return new Response(`middleware data is ${ctx.state.data}`);
  },
};
