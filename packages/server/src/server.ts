import express from "express";
import _ from "lodash";
import { QueryPayload } from "@monorepo/shared";
const app = express();
const port = 3001;

app.get("/data", (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	const data: QueryPayload = {
		payload: _.snakeCase("Server data returned successfully")
	};
	res.json(data);
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
