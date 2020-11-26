import axios from "axios";
const API_BASE = "http://localhost:5000";

const get = (path) => (
	axios({
		headers: {
			"Content-Type": "application/json",
		},
		method: "get",
		url: API_BASE + path,
	})
);


export default {
	GET: get,
};
