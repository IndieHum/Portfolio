const BASE_URL = "https://fakestoreapi.com";

const PostData = async (path, data) => {
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
};

const GetData = async (path) => {
    try {
        const response = await fetch(`${BASE_URL}/${path}`);
        const json = await response.json();
        return json;
    } catch (error) {
        alert(error);
    }
};

export { PostData, GetData };
