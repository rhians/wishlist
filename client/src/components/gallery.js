



//work in progress - not finished or in use as yet

import React from 'react';

class Gallery extends React.Component {
  renderImage(imageUrl) {
    return (
      <div>
        <img src={imageUrl} />
      </div>
    );
  }

  render() {
    return (
      <div className="gallery">
      <div className="images">
{this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
</div>
</div>
      );
  }

}

Gallery.propTypes = {
  imageUrls: React.PropTypes.arrayOf(React.propTypes.string).isRequired
};

export default Gallery;
