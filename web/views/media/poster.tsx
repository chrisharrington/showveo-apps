import * as React from 'react';

import { Media } from 'showveo-lib';

export default class Poster extends React.Component<{ media: Media, width: number, onClick: () => void; }> {
    render() {
        const media = this.props.media;
        return <div className='poster' style={{ width: this.props.width }}>
            <img style={{ height: (this.props.width)*1.5 }} src={media.poster} alt={media.name} onClick={() => this.props.onClick()} />
        </div>;
    }
}