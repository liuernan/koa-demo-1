import Koa from "koa";

const app = new Koa();
const port: number = 3000;

app.use(async (ctx: Koa.Context, next: Koa.Next) => {
  await next();
  const consumingTime = ctx.response.get("X-Response-Time");
  console.log(`${ctx.request.method} - ${ctx.request.url}: ${consumingTime}`);
});

app.use(async (ctx: Koa.Context, next: Koa.Next) => {
  const startTime = Date.now();
  await next();
  const consumingTime = Date.now() - startTime;
  ctx.response.set("X-Response-Time", `${consumingTime}ms`);
});

app.use(async (ctx: Koa.Context, next: Koa.Next) => {
  let body = "";
  for (let i = 0; i < 100000; i++) {
    body += "hello, Koa.\n";
  }
  ctx.body = body;

  await next();
});

app.listen(port, () => {
  console.log(`server started, listening port:${port}`);
});