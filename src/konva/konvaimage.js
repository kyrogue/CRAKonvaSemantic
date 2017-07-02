import React from 'react';
import { Image } from 'react-konva';
import EC2 from './../images/Compute_AmazonEC2.png';
// try drag& drop rectangle
class MyImage extends React.Component {
    state = {
      image: null
    }
    componentDidMount() {
      const image = new window.Image();
      image.src = EC2;
      image.onload = () => {
        this.setState({
          image: image
        });
      }
    }

    render() {
        return (
            <Image
            x={100}
            y={100}
              image={this.state.image}
            />
        );
    }
}

export default MyImage;