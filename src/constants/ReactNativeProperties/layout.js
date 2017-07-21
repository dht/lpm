import AVAILABILITY from './availability';

export default {
    alignContent: {
        type: 'enum',
        options: ['flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around'],
        availability: AVAILABILITY.BOTH
    },
    alignItems: {
        type: 'enum',
        options: ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'],
        availability: AVAILABILITY.BOTH
    },
    alignSelf: {
        type: 'enum',
        options: ['auto', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline'],
        availability: AVAILABILITY.BOTH
    },
    aspectRatio: {
        type: 'number',
        availability: AVAILABILITY.BOTH
    },
    borderBottomWidth: {
        type: 'number',
        availability: AVAILABILITY.BOTH
    },
    borderLeftWidth: {
        type: 'number',
        availability: AVAILABILITY.BOTH
    },
    borderRightWidth: {
        type: 'number',
        availability: AVAILABILITY.BOTH
    },
    borderTopWidth: {
        type: 'number',
        availability: AVAILABILITY.BOTH
    },
    borderWidth: {
        type: 'number',
        availability: AVAILABILITY.BOTH
    },
    bottom: {
        type: 'number, string', // points or percentage
        availability: AVAILABILITY.BOTH
    },
    display: {
        type: 'enum',
        options: ['none', 'flex'],
        availability: AVAILABILITY.BOTH,
        initial: 'flex'
    },
    flex: {
        type: 'number',
        availability: AVAILABILITY.BOTH,
    },
    flexBasis: {
        type: 'number, string',
        availability: AVAILABILITY.BOTH,
    },
    flexDirection: {
        type: 'enum',
        options: ['row', 'row-reverse', 'column', 'column-reverse'],
        availability: AVAILABILITY.BOTH,
    },
    flexGrow: {
        type: 'number',
        availability: AVAILABILITY.BOTH,
    },
    flexShrink: {
        type: 'number',
        availability: AVAILABILITY.BOTH,
    },
    flexWrap: {
        type: 'enum',
        options: ['wrap', 'nowrap'],
        availability: AVAILABILITY.BOTH,
    },
    height: {
        type: 'number, string', // points or percentage
        availability: AVAILABILITY.BOTH
    },
    justifyContent: {
        type: 'enum',
        options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
        availability: AVAILABILITY.BOTH
    },
    left: {
        type: 'number, string', // points or percentage
        availability: AVAILABILITY.BOTH
    },
    margin: {
        type: 'number, string', // points or percentage
        availability: AVAILABILITY.BOTH
    },
    marginBottom: {
        type: 'number, string', // points or percentage
        availability: AVAILABILITY.BOTH
    },
    marginHorizontal: {
        type: 'number, string', // points or percentage
        availability: AVAILABILITY.BOTH
    },
    marginLeft: {
        type: 'number, string', // points or percentage
        availability: AVAILABILITY.BOTH
    },
    marginRight: {
        type: 'number, string', // points or percentage
        availability: AVAILABILITY.BOTH
    },
    marginVertical: {
        type: 'number, string', // points or percentage
        availability: AVAILABILITY.BOTH
    },
    maxHeight: {
        type: 'number, string', // points or percentage
        availability: AVAILABILITY.BOTH
    },
    maxWidth: {
        type: 'number, string', // points or percentage
        availability: AVAILABILITY.BOTH
    },
    minHeight: {
        type: 'number, string', // points or percentage
        availability: AVAILABILITY.BOTH
    },
    minWidth: {
        type: 'number, string', // points or percentage
        availability: AVAILABILITY.BOTH
    },
    overflow: {
        type: 'enum',
        options: ['visible', 'hidden', 'scroll'],
        availability: AVAILABILITY.BOTH
    },
    padding: {
        type: 'number, string', // points or percentage
        availability: AVAILABILITY.BOTH
    },
    paddingBottom: {
        type: 'number, string', // points or percentage
        availability: AVAILABILITY.BOTH
    },
    paddingHorizontal: {
        type: 'number, string', // points or percentage
        availability: AVAILABILITY.BOTH
    },
    paddingLeft: {
        type: 'number, string', // points or percentage
        availability: AVAILABILITY.BOTH
    },
    paddingRight: {
        type: 'number, string', // points or percentage
        availability: AVAILABILITY.BOTH
    },
    paddingVertical: {
        type: 'number, string', // points or percentage
        availability: AVAILABILITY.BOTH
    },
    position: {
        type: 'enum',
        options: ['absolute', 'relative'],
        availability: AVAILABILITY.BOTH
    },
    right: {
        type: 'number, string', // points or percentage
        availability: AVAILABILITY.BOTH
    },
    top: {
        type: 'number, string', // points or percentage
        availability: AVAILABILITY.BOTH
    },
    width: {
        type: 'number, string', // points or percentage
        availability: AVAILABILITY.BOTH
    },
    zIndex: {
        type: 'number, string', // points or percentage
        availability: AVAILABILITY.BOTH
    },
    direction: {
        type: 'enum',
        options: ['inherit', 'ltr', 'rtl'],
        availability: AVAILABILITY.IOS
    },
}