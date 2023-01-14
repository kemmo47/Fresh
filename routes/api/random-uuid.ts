import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(req) {
    console.log(req);

        const uuid = crypto.randomUUID();
    return new Response(JSON.stringify(uuid), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
