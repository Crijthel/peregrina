import React, { useState } from 'react';
import loading from '../../assets/loading.svg';
import './Identidad.scss';

const Identidad = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(true);
  const [isLoading3, setIsLoading3] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

    const handleIframeLoad2 = () => {
    setIsLoading2(false);
  };
    const handleIframeLoad3 = () => {
    setIsLoading3(false);
  };
  return (
    <div className='container-identidad'>
      <h1>Identidad</h1>

      <div>
        <h2>MANIFIESTO</h2>

        <div className='video-id'>
          {isLoading && <img src={loading} className='loading' alt='loading' />}
          <iframe
            loading='eager'
            src={
              'https://www.youtube.com/embed/rDM6TjKru2k?si=fCuqGWN2JH_QxIuy&loop=1&playlist=rDM6TjKru2k&autoplay=1&muted=1'
            }
            title={'MANIFIESTO'}
            allowTransparency
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
            onLoad={handleIframeLoad}
            style={{ display: isLoading ? 'none' : 'block' }}
          ></iframe>
        </div>
      </div>
      <div>
        <h2>BRANDBOARD</h2>

        <div className='video-id'>
          {isLoading2 && <img src={loading} className='loading' alt='loading' />}
          <iframe
            loading='eager'
            src={
              'https://www.youtube.com/embed/rDM6TjKru2k?si=fCuqGWN2JH_QxIuy&loop=1&playlist=rDM6TjKru2k&autoplay=1'
            }
            title={'BRANDBOARD'}
            allowTransparency
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
            onLoad={handleIframeLoad2}
            style={{ display: isLoading2 ? 'none' : 'block' }}
          ></iframe>
        </div>
      </div>
      <div>
        <h2>DEMOREEL</h2>

        <div className='video-id'>
          {isLoading3 && <img src={loading} className='loading' alt='loading' />}
          <iframe
            loading='eager'
            src={
 'https://www.youtube.com/embed/rDM6TjKru2k?si=fCuqGWN2JH_QxIuy&loop=1&playlist=rDM6TjKru2k&autoplay=1'
            }
            title={'DEMOREEL'}
            allowTransparency
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
            onLoad={handleIframeLoad3}
            style={{ display: isLoading3 ? 'none' : 'block' }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Identidad;
