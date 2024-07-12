export const FetchSamples = async () => {
    const res = await fetch("../Sample.json");
    const json = await res.json();
    return json;
};
