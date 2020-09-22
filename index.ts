const Koa = require("koa");

const app = new Koa();

app.use(async (ctx: any, next: any) => {
  ctx.body = "hello, world.";
  await next();
});

app.listen(3000);