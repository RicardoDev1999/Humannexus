import allowedContextPages from "./contextPages";

export function onRequest(ctx, next) {
  const { context, slug } = ctx.params;

  var pathName = ctx.url.pathname;

  if (slug) {
    return next();
  }

  if (!context || (context && allowedContextPages.includes(pathName))) {
    return next();
  }

  return ctx.redirect("/404");
}
