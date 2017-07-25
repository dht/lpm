const LOREMPIXEL_URL = 'https://lorempixel.com'

export const parseLoremPixel = (content, width, height) => {
    const options = ['abstract', 'city', 'people', 'transport', 'animals', 'food', 'nature',
        'business', 'nightlife', 'sports', 'cats', 'fashion', 'technics'];

    if (options.indexOf(content) >= 0) {
        return LOREMPIXEL_URL + `/${width}/${height}/${content}`;
    }

    return content;
}