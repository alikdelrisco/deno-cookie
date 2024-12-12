const handler = (request: Request): Response => {
  let cookiesListItems = "";
  request.headers.forEach((value, key) => {
    cookiesListItems += `<li><b>${key}</b>: ${value}</li>`;
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
      <h1>Server Cookies</h1>
      <ul>
        ${cookiesListItems}
      </ul>

      <h1>Document Cookies</h1>
      <p id="documentCookies"></p>
    </body>

    <script>
       document.getElementById('documentCookies').innerText = document.cookie
    </script>
    </html>
  `;
  return new Response(htmlContent, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
};

const jsonHandler = (request: Request): Response => {
  const headers: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    headers[key] = value;
  });
  const body = JSON.stringify(headers);
  console.log(body);
  return new Response(body, {
    status: 200,
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
  });
};
Deno.serve({ port: 4242 }, jsonHandler);
