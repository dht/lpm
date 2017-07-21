import AVAILABILITY from './availability';

export default {
    shadowColor: {
        type: 'color',
        availability: AVAILABILITY.IOS
    },
    shadowOffset: {
        type: 'dimension',
        availability: AVAILABILITY.IOS
    },
    shadowOpacity: {
        type: 'number',
        availability: AVAILABILITY.IOS
    },
    shadowRadius: {
        type: 'number',
        availability: AVAILABILITY.IOS
    },
}