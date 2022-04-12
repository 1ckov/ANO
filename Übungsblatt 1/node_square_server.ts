import { IncomingMessage, Server, ServerResponse } from "http";
const hostname: string = "localhost";
const port: number = 3000;
function constuctTable(von: number, bis: number): string {
  let table = "";
  for (let i = von; i <= bis; i++) {
    table = table + `<tr> <td>${i}</td> <td>${i * i}</td> </tr>`;
  }
  return table;
}
const server: Server = new Server(
  (request: IncomingMessage, response: ServerResponse) => {
    if (request.url) {
      const urlObject: URL = new URL(
        request.url,
        `http://${request.headers.host}`
      );
      const searchParams: URLSearchParams = urlObject.searchParams;
      const von: number = parseInt(searchParams.get("von") ?? "");
      const bis: number = parseInt(searchParams.get("bis") ?? "");
      response.writeHead(200, {
        "Content-Type": "text/html",
        title: `Quadratzahlen ${von}² bis ${bis}² `,
      });
      response.end(`
        <!DOCTYPE html>
        <html>
        <head>
        </head>
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Quadratzahlen ${von}² bis ${bis}²</title>
        <style>
            th,
            td,
            table {
                border: black solid 1px;
                text-align: right;
                border-collapse:collapse;
            }
        </style>
        </head>
        <body>
            <h1>Quadratzahlen ${von}² bis ${bis}²</h1>
            <table style="">
                <tr>
                    <th>n</th><th>n²</th>
                </tr>
                ${constuctTable(von, bis)}
            </table>
        </body>
        </html>
      `);
    }
  }
);
server.listen(port, hostname, () => {
  console.log(`Server gestartet auf http://${hostname}:${port}`);
});
