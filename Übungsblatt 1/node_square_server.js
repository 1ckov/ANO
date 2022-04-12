import { Server } from "http";
const hostname = "localhost";
const port = 3000;
function constuctTable(von, bis) {
    let table = "";
    for (let i = von; i <= bis; i++) {
        table = table + `<tr> <td>${i}</td> <td>${i * i}</td> </tr>`;
    }
    return table;
}
const server = new Server((request, response) => {
    if (request.url) {
        const urlObject = new URL(request.url, `http://${request.headers.host}`);
        const searchParams = urlObject.searchParams;
        const von = parseInt(searchParams.get("von") ?? "");
        const bis = parseInt(searchParams.get("bis") ?? "");
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
});
server.listen(port, hostname, () => {
    console.log(`Server gestartet auf http://${hostname}:${port}`);
});
//# sourceMappingURL=node_square_server.js.map