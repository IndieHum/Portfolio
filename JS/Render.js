export function RenderData(data, platform) {
    data.forEach((d) => {
        const projJSX = `
        <a
            href="${d.link}"
            target="_blank"
            class="sample"
            loading="lazy"
            title="${d.title}"
            >
            <img src="${d.image}"/>
        </a>
        `;
        platform.innerHTML += projJSX;
    });
}
