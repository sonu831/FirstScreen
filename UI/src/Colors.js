/* global document, window */
import React, { Component } from 'react';
import OnVisible, { setDefaultProps } from  'react-on-visible';

const NUM_ITEMS = 360;

setDefaultProps({
    bounce: true
});

class Colors extends Component {
    constructor(...args) {
        super(...args);
        this.renderItem = this.renderItem.bind(this);
        this.udpateVis = this.updateVis.bind(this);

        const colors = new Array(NUM_ITEMS).fill('')
            .map((_, idx) => {
                return {
                    visible: false,
                    bg: `hsl(${(idx / NUM_ITEMS) * 360},100%,50%)`
                };
            });

        this.state = {
            colors,
            count: 0
        };
    }
    updateVis(idx, visible) {
        setTimeout(() => {
            const colors = this.state.colors;

            colors[idx] = Object.assign(colors[idx], {visible});

            this.setState({
                colors
            });
        }, 1200);
    }
    renderItem(item, idx) {
        const col = this.state.colors[idx];
        const msg = col.visible ? 'done' : 'fade';
       debugger
        return (
            <OnVisible
                className="box"
                percent={10}
                onChange={this.updateVis.bind(this, idx)}
            >
                <div data-idx={`${msg}: ${idx}`} style={{
                    backgroundColor: item.bg,
                    transitionDelay: `${idx % 3 * 100}ms`
                }} />
            </OnVisible>
        );
    }
    render() {
        return (
            <div className="colors">
                {this.state.colors.map(this.renderItem)}
            </div>
        );
    }
}

export default Colors;
