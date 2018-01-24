/**
 * Created by nancy on 23/01/18.
 */
import React  from 'react';
import PropTypes from 'prop-types';
import './ImageLoader.css';

const imageFullyLoaded = (element) => {
  return element.complete;
}

class ImageLoader extends React.PureComponent {

  static defaultProps = {
    alt: 'Loading...',
    height: 100,
    width: 100,
    src: 'https://cdn.star.nesdis.noaa.gov/GOES16/ABI/FD/08/1808x1808.jpg',
    placeholder: '',
    loader: 'loading.gif',
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  handleImageChange = () => {
    this.setState({
      loading: !imageFullyLoaded(this.image)
    })
  }

  renderPlaceholder() {
    return (
      <img src={this.props.loader} alt={this.props.alt} />
    )
  }

  renderImage() {
    const { props } = this;
    const classname = this.state.loading ? 'loading' : '';
    return (
      <img
        className={classname}
        src={props.src}
        ref={image => this.image = image}
        alt={props.alt}
        height={props.height}
        width={props.width}
        onError={this.handleImageChange}
        onLoad={this.handleImageChange}
      />
    )
  }

  render() {
    const { props } = this;
    return (
      <div className="image-container" style={{width: props.width, height: props.height}}>
        {this.state.loading && this.renderPlaceholder()}
        {this.renderImage()}
      </div>
    );
  }
}

ImageLoader.propTypes = {
  alt: PropTypes.string,
  height: PropTypes.Number,
  width: PropTypes.Number,
  loader: PropTypes.string,
  src: PropTypes.string.isRequired,
}

export default ImageLoader;
