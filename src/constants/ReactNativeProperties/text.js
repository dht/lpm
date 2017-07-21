import AVAILABILITY from './availability';
import view from './view';

export default {
    ...view,
    color: {
        type: 'color',
        availability: AVAILABILITY.BOTH,
    },
    fontFamily: {
        type: 'string',
        availability: AVAILABILITY.BOTH,
    },
    fontSize: {
        type: 'number',
        availability: AVAILABILITY.BOTH,
    },
    fontStyle: {
        type: 'enum',
        options:['normal', 'italic'],
        availability: AVAILABILITY.BOTH,
    },
    fontWeight: {
        type: 'enum',
        options:['normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
        availability: AVAILABILITY.BOTH,
    },
    lineHeight: {
        type: 'number',
        availability: AVAILABILITY.BOTH,
    },
    textAlign: {
        type: 'enum',
        options:['auto', 'left', 'right', 'center', 'justify'],
        availability: AVAILABILITY.BOTH,
    },
    textDecorationLine: {
        type: 'enum',
        options:['none', 'underline', 'line-through', 'underline line-through'],
        availability: AVAILABILITY.BOTH,
    },
    textShadowColor: {
        type: 'color',
        availability: AVAILABILITY.BOTH,
    },
    textShadowOffset: {
        type: 'dimension',
        availability: AVAILABILITY.BOTH,
    },
    textShadowRadius: {
        type: 'number',
        availability: AVAILABILITY.BOTH,
    },
    includeFontPadding: {
        type: 'bool',
        availability: AVAILABILITY.ANDROID,
    },
    textAlignVertical: {
        type: 'enum',
        options:['auto', 'top', 'bottom', 'center'],
        availability: AVAILABILITY.ANDROID,
    },
    fontVariant: {
        type: 'enum',
        options:['small-caps', 'oldstyle-nums', 'lining-nums', 'tabular-nums', 'proportional-nums'],
        availability: AVAILABILITY.IOS,
    },
    letterSpacing: {
        type: 'number',
        availability: AVAILABILITY.IOS,
    },
    textDecorationColor: {
        type: 'color',
        availability: AVAILABILITY.IOS,
    },
    textDecorationStyle: {
        type: 'enum',
        options:['solid', 'double', 'dotted', 'dashed'],
        availability: AVAILABILITY.IOS,
    },
    writingDirection: {
        type: 'enum',
        options:['auto', 'ltr', 'rtl'],
        availability: AVAILABILITY.IOS,
    },

}