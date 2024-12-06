const handler = (request: Request): Response => {
  let cookiesListItems = "";
  request.headers.forEach((value, key) => {
    cookiesListItems += `<li>${key}-${value}</li>`;
  });

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Simple HTML Page</title>
    </head>
    <body>
     <ul>
      ${cookiesListItems}
     </ul>
    </body>
    </html>
  `;
  return new Response(htmlContent, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
};
Deno.serve({ port: 4242 }, handler);
