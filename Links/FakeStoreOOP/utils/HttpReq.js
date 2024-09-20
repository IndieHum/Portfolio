const BASE_URL = "https://fakestoreapi.com";

async function FetchData(path) {
    try {
        const response = await fetch(`${BASE_URL}/${path}`);
        const json = await response.json();
        return json;
    } catch (error) {
        alert(error);
    }
}

async function PostData(path, data) {
    try {
        const response = await fetch(`${BASE_URL}/${path}`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        });
        const json = await response.json();
        return json;
    } catch (error) {
        alert(error);
    }
}

export { FetchData, PostData };
