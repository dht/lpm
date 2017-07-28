import React from 'react';
import Base from './Base';
import Snippet from '../../Snippet';

const SnippetWrapper = (props) => {
    const {content,data} = props,
        {snippetId, vars} = data || {},
        {params} = vars || {},
        containerStyle = {...styleView, backgroundImage: `url(${content})`}

    return <Base {...props} containerStyle={containerStyle}>
        {snippetId?<Snippet
            key={snippetId} id={snippetId}
            params={params}
            subscribe={props.subscribe}
            unsubscribe={props.unsubscribe} />: null}
    </Base>
}

export default SnippetWrapper;

const styleView = {
    position: 'relative',
}