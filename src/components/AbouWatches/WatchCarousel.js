import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { FaSearchPlus } from "react-icons/fa";
import FsLightbox from "fslightbox-react";
const Wathes = [
  {
    url:
      "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/29/2018/03/gallery7.jpg",
    alt: "First Watch",
  },
  {
    url:
      "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/29/2018/03/gallery6.jpg",
    alt: "First Watch",
  },

  {
    url:
      "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/29/2018/03/gallery5.jpg",
    alt: "First Watch",
  },
  {
    url:
      "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/29/2018/03/Watchwhite5.jpg",
    alt: "First Watch",
  },
  {
    url:
      "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/29/2018/03/Watchwhite4.jpg",
    alt: "First Watch",
  },
  {
    url:
      "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/29/2018/03/Watchwhite3.jpg",
    alt: "First Watch",
  },
  {
    url:
      "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/29/2018/03/Watchwhite3.jpg",
    alt: "First Watch",
  },
  {
    url:
      "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/29/2018/03/Watchwhite2.jpg",
    alt: "First Watch",
  },
  {
    url:
      "https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/29/2018/03/Watchwhite.jpg",
    alt: "First Watch",
  },
];
let watchUrls = [];

export default function WatchCarousel() {
  const [toggler, setToggler] = useState(false);
  const [numberOfWatches, setNumberOfWatches] = useState(3);
  const [imageSize, setimageSize] = useState("30%");
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
      setimageSize("40%");
    }
  }, []);
  window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
      setNumberOfWatches(2);
      setimageSize("42%");
    } else {
      setNumberOfWatches(3);
      setimageSize("32%");
    }
  });
  let CItems = [];
  Wathes.map((watch, i) => {
    if (i % numberOfWatches !== 0) {
      CItems[CItems.length - 1].push(watch);
    } else {
      CItems.push([watch]);
    }
  });

  return (
    <div className="mx-auto" className="container">
      <Carousel>
        {CItems.map((CItem, i) => (
          <Carousel.Item>
            <div className="d-flex justify-content-around w-100">
              {CItem.map((watchImg, j) => {
                console.log(i + j);
                watchUrls = [...watchUrls, watchImg.url];
                return (
                  <>
                    <div
                      className="carousel-img-anchor"
                      onClick={() => {
                        openLightboxOnSource(i);
                        console.log("hey");
                      }}
                    >
                      <img
                        className="carousel-img w-100"
                        style={{
                          borderRadius: "15px",
                          width: imageSize,
                        }}
                        src={watchImg.url}
                        alt="First Image"
                      />
                      <FaSearchPlus className="searchIcon" size={60} />
                    </div>
                  </>
                );
              })}
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
