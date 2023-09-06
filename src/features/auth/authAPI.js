// A mock function to mimic making an async request for data
export function createUser(userData) {
	return new Promise(async (resolve) => {
		const response = await fetch("https://localhost:8080/users", {
			method: "POST",
			body: JSON.stringify(userData),
			headers: { "content-type": "application/json" },
		});
		const result = await response.json();
		resolve({ result });
	});
}
