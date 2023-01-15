import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const blogpost = await fetchBlogpost(ctx.params.slug);
    if (!blogpost) {
      return ctx.renderNotFound();
    }
    return ctx.render({ blogpost });
  },
};

export default function BlogpostPage({ data }) {
  return (
    <article>
      <h1>{data.blogpost.title}</h1>
      {/* rest of your page */}
    </article>
  );
}
