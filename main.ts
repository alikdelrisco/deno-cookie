Deno.serve({ port: 4242 }, (_req) => {
  let response = "";
  _req.headers.forEach((value, key) => {
    response += `${key}-${value}`;
  });
  return new Response(response);
});
