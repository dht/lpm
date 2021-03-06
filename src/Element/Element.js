import React, {PropTypes} from 'react'
import ElementTypes from '../constants/ElementTypes';
import View from './inner/View';
import Text from './inner/Text';
import Placeholder from './inner/Placeholder';
import Image from './inner/Image';
import Snippet from './inner/Snippet';

const Element = (props) => {

    switch (props.elementType) {
        case ElementTypes.PLACEHOLDER:
            return <Placeholder {...props} />;

        case ElementTypes.IMAGE:
            return <Image {...props} />;

        case ElementTypes.VIEW:
            return <View {...props} />;

        case ElementTypes.TEXT:
            return <Text {...props} />;

        case ElementTypes.SNIPPET:
            return <Snippet {...props} />;

        default:
            return null;
    }
}

export default Element
