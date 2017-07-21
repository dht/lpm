export const parse = (dom, data, stylesheet) => {

    const innerData = data.content || '';

    if (innerData) {
        dom.addContent(innerData);
    }
}

