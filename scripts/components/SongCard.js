import React, { Component, PropTypes } from 'react';
import SongDetails from '../components/SongDetails';
import { getImageUrl } from '../helpers/Format';

class SongCard extends Component {
  render() {
    const { changeActiveSongIndex, isActive, song } = this.props;
    const image = getImageUrl(song.artwork_url);

    return (
      <div className={'card song-card' + (isActive ? ' active' : '')}>
        <div
          className='song-card-image'
          onClick={changeActiveSongIndex}
          style={{backgroundImage: `url(${image})`}} />
        <div className='song-card-user'>
          <img
            className='song-card-user-image'
            onClick={this.handleClick}
            src={song.user.avatar_url} />
          <SongDetails title={song.title} username={song.user.username} />
        </div>
      </div>
    );
  }
}

SongCard.propTypes = {
  song: PropTypes.object.isRequired,
};

export default SongCard;
