import React from 'react';
import ElementContainer from '../ElementContainer';

const getContainerStyle = (props) => {
    const {style, containerStyle = {}} = props;

    return {...styleBase, ...style, ...containerStyle};
}

const getClassName = (props) => {
    const {data = {}, selected, selectedParent} = props;
    const {className = '', layer = '', tag = ''} = data;

    return [className, layer, tag ? `tag-${tag}` : '', selected ? 'element-selected' : '', selectedParent ? 'element-parent-selected' : ''].join(' ');
}

const Base = (props) => {
    const {id, parent_id, elementType, childIds = [], statePath} = props,
        style = getContainerStyle(props),
        className = getClassName(props);

    return <div id={ `element-${id}` }
                style={style}
                className={ className }
                onDoubleClick={ev => {ev.stopPropagation(); props.onElementDblClick(id, parent_id, elementType, ev)}}
                onClick={ev => {ev.stopPropagation(); props.onElementClick(id, parent_id, elementType, ev)}}>
        {props.children}
        {childIds.map(childId => <ElementContainer
            key={childId}
            id={childId}
            statePath={statePath}
            onElementClick={props.onElementClick}
            onElementDblClick={props.onElementDblClick}
            subscribe={props.subscribe}
            unsubscribe={props.unsubscribe}
            params={props.params}
        />)}
    </div>
}

export default Base;

const styleBase = {
    border: '0px solid transparent',
    minHeight: '1px',
    boxSizing: 'border-box',
    userSelect: 'none',
};