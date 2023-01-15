import { HandlerContext, Handlers } from "$fresh/server.ts";
import HAIR_JSON from "../static/JSON.json" assert { type: "json" };

export const handler: Handlers = {
  GET(_req: Request, _ctx: HandlerContext) {
    return new Response(JSON.stringify(HAIR_JSON), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
