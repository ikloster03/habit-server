exports.next = (ctx, payload) => {
  ctx.status = 200;
  ctx.body = payload;
};
