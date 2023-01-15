import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers<any> = {
  async GET(_, ctx) {
    const resp = await fetch(`http://localhost:8000/api/index`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const user: any = await resp.json();

    return ctx.render(user);
  },
};

export default function Page({ data }: PageProps<any>) {
  console.log("data: ",data)
  return (
    <div>
      <img src={data.avatar_url} width={64} height={64} />
      <h1>{data.name}</h1>
      <p>{data.login}</p>
    </div>
  );
}
