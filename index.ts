import Koa from "koa";

const app = new Koa();
const port: number = 3000;

app.use(async (ctx: Koa.Context, next: Koa.Next) => {
  ctx.body = "hello, world.";
  await next();
});

app.listen(port, () => {
  console.log(`server started, listening port:${port}`);
});