import AVAILABILITY from './availability';
import layout from './layout';
import shadow from './shadow';
import transform from './transform';

export default {
    ...layout,
    ...shadow,
    ...transform,
    backfaceVisibility: {
        type: 'enum',
        options: ['visible', 'hidden'],
        availability: AVAILABILITY.BOTH,
    },
    backgroundColor: {
        type: 'color',
        availability: AVAILABILITY.BOTH,
    },
    borderBottomLeftRadius: {
        type: 'number',
        availability: AVAILABILITY.BOTH,
    },
    borderBottomRightRadius: {
        type: 'number',
        availability: AVAILABILITY.BOTH,
    },
    borderColor: {
        type: 'color',
        availability: AVAILABILITY.BOTH,
    },
    borderRadius: {
        type: 'number',
        availability: AVAILABILITY.BOTH,
    },
    borderTopLeftRadius: {
        type: 'number',
        availability: AVAILABILITY.BOTH,
    },
    borderTopRightRadius: {
        type: 'number',
        availability: AVAILABILITY.BOTH,
    },
    borderWidth: {
        type: 'number',
        availability: AVAILABILITY.BOTH,
    },
    opacity: {
        type: 'number',
        availability: AVAILABILITY.BOTH,
    },
    overflow: {
        type: 'enum',
        options: ['visible', 'hidden'],
        availability: AVAILABILITY.BOTH,
    },
    resizeMode: {
        type: 'enum',
        options: ['cover', 'contain', 'stretch', 'repeat', 'center'],
        availability: AVAILABILITY.BOTH,
    },
    tintColor: {
        type: 'color',
        availability: AVAILABILITY.BOTH,
    },
    overlayColor: {
        type: 'string',
        availability: AVAILABILITY.ANDROID,
    },
}