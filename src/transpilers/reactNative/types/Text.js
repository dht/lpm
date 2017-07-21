export const parse = (dom, data, style) => {

    const innerData = data.content || '';

    if (innerData) {
        dom.addContent(innerData);
    }
}