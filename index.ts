const Koa = require("koa");

const app = new Koa();
const port: number = 3000;

app.use(async (ctx: any, next: any) => {
  ctx.body = "hello, world.";
  await next();
});

app.listen(port, () => {
  console.log(`server started, listening port:${port}`);
});