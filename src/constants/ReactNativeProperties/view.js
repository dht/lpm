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
    borderBottomColor: {
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
    borderBottomWidth: {
        type: 'number',
        availability: AVAILABILITY.BOTH,
    },
    borderColor: {
        type: 'color',
        availability: AVAILABILITY.BOTH,
    },
    borderLeftColor: {
        type: 'color',
        availability: AVAILABILITY.BOTH,
    },
    borderLeftWidth: {
        type: 'number',
        availability: AVAILABILITY.BOTH,
    },
    borderRadius: {
        type: 'number',
        availability: AVAILABILITY.BOTH,
    },
    borderRightColor: {
        type: 'color',
        availability: AVAILABILITY.BOTH,
    },
    borderRightWidth: {
        type: 'number',
        availability: AVAILABILITY.BOTH,
    },
    borderStyle: {
        type:'enum',
        options:['solid', 'dotted', 'dashed'],
        availability: AVAILABILITY.BOTH,
    },
    borderTopColor: {
        type: 'color',
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
    borderTopWidth: {
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
    elevation: {
        type: 'number',
        availability: AVAILABILITY.ANDROID,
    },
}