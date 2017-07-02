import React from 'react';
import {Layer, Rect, Stage} from 'react-konva';
import Konva from 'konva';

import EC2Image from './konva/konvaimage';

class MyRect extends React.Component {
    constructor(...args) {
      super(...args);
      this.state = {
        color: 'green'
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({
        color: Konva.Util.getRandomColor()
      });
    }
    render() {
        return (
        <Stage width={700} height={700}>
          <Layer>
            <Rect
            x={10} y={10} width={50} height={50}
            fill={this.state.color}
            shadowBlur={10}
            onClick={this.handleClick}
            />
            <EC2Image/>
          </Layer>
        </Stage>
        );
    }
}

export default MyRect;