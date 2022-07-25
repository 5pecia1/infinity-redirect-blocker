import {
    decode,
    Application,
    Router,
} from "./deps.ts";

const router = new Router();
router.get("/decode/:url*", async (ctx) => {
    const url = new TextDecoder().decode(decode(ctx.params.url ?? ""));
    console.log('u', url);

    let resp = await fetch(url, {
        redirect: "manual",
    });

    const cookie = resp.headers.get("set-cookie");
    const location = resp.headers.get("location");

    resp = await fetch(location ?? url, {
        headers: {
            "Cookie": cookie ?? "",
        },
    });

    ctx.response.body = await resp.text()
});

const app = new Application();
app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`);
    await next();
});
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener(
    "listen",
    (e) => console.log("Listening on http://localhost:8080"),
);
await app.listen({ port: 8080 });