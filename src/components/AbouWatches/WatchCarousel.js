import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { FaSearchPlus } from 'react-icons/fa';
import FsLightbox from 'fslightbox-react';
const watches = [
  {
    url:
      'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/29/2018/03/gallery7.jpg',
    alt: 'First Watch',
  },
  {
    url:
      'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/29/2018/03/gallery6.jpg',
    alt: 'First Watch',
  },

  {
    url:
      'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/29/2018/03/gallery5.jpg',
    alt: 'First Watch',
  },
  {
    url:
      'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/29/2018/03/Watchwhite5.jpg',
    alt: 'First Watch',
  },
  {
    url:
      'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/29/2018/03/Watchwhite4.jpg',
    alt: 'First Watch',
  },
  {
    url:
      'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/29/2018/03/Watchwhite3.jpg',
    alt: 'First Watch',
  },
  {
    url:
      'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/29/2018/03/Watchwhite3.jpg',
    alt: 'First Watch',
  },
  {
    url:
      'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/29/2018/03/Watchwhite2.jpg',
    alt: 'First Watch',
  },
  {
    url:
      'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/29/2018/03/Watchwhite.jpg',
    alt: 'First Watch',
  },
];
let watchUrls = [
  'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/29/2018/03/gallery7.jpg',
  'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/29/2018/03/gallery6.jpg',
  'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/29/2018/03/gallery5.jpg',
  'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/29/2018/03/Watchwhite5.jpg',
  'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/29/2018/03/Watchwhite4.jpg',
  'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/29/2018/03/Watchwhite3.jpg',
  'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/29/2018/03/Watchwhite3.jpg',
  'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/29/2018/03/Watchwhite2.jpg',
  'https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/29/2018/03/Watchwhite.jpg',
];

export default function WatchCarousel() {
  const [numberOfWatches, setNumberOfWatches] = useState(3);
  const [imageSize, setimageSize] = useState('30%');
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    sourceIndex: 0,
  });
  function openLightboxOnSource(sourceIndex) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      sourceIndex: sourceIndex,
    });
  }
  useEffect(() => {
    if (window.innerWidth < 768) {
      setNumberOfWatches(2);
      setimageSize('40%');
    }
  }, []);
  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      setNumberOfWatches(2);
      setimageSize('42%');
    } else {
      setNumberOfWatches(3);
      setimageSize('32%');
    }
  });
  let CItems = [];
  watches.map((watch, i) => {
    return i % numberOfWatches !== 0
      ? CItems[CItems.length - 1].push(watch)
      : CItems.push([watch]);
  });

  return (
    <div className="mx-auto container">
      <Carousel>
        {CItems.map((CItem, i) => (
          <Carousel.Item key={i + CItem}>
            <div className="d-flex justify-content-around w-100">
              {CItem.map((watchImg, j) => (
                <div
                  key={watchImg + j + i}
                  className="carousel-img-anchor"
                  onClick={() => {
                    openLightboxOnSource(i * numberOfWatches + j);
                    console.log(i * numberOfWatches + j);
                  }}>
                  <img
                    className="carousel-img w-100"
                    style={{
                      borderRadius: '15px',
                      width: imageSize,
                    }}
                    src={watchImg.url}
                    alt="First "
                  />
                  <FaSearchPlus className="searchIcon" size={60} />
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <FsLightbox
        toggler={lightboxController.toggler}
        sourceIndex={lightboxController.sourceIndex}
        sources={watchUrls}
      />
    </div>
  );
}
