import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import PaginationArea from "../../ui/pagination";
import useModal from "../../hooks/use-modal";
import VideoModal from "../common/modals/modal-video";
import Link from "next/link";

const BlogItems = ({ itemsPerPage, items }) => {
  const [sliderLoop, setSliderLoop] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), []);
  const { isVideoOpen, setIsVideoOpen } = useModal();
  //
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {currentItems &&
        currentItems.map((blog) => {
          const {
            id,
            blog_big,
            video,
            slider,
            img,
            title,
            views,
            short_desc,
            author,
            comment,
            date,
          } = blog;
          return (
            <article
              key={id}
              className={`postbox__item format-image mb-50 transition-3 ${
                slider ? "fix" : ""
              }`}
            >
              {!slider && !video && (
                <div className="postbox__thumb w-img">
                  <Link href={`/blog/details/${id}`} legacyBehavior>
                    <img src={img} alt="" />
                  </Link>
                </div>
              )}
              {slider && (
                <Swiper
                  loop={sliderLoop}
                  modules={[Navigation]}
                  className="swiper-container blog-post-slider-active"
                  slidesPerView={1}
                  spaceBetween={0}
                  navigation={{
                    nextEl: ".blog-nav-next",
                    prevEl: ".blog-nav-prev",
                  }}
                >
                  {img.map((slider_img, i) => (
                    <SwiperSlide key={i}>
                      <img src={slider_img} alt="" />
                    </SwiperSlide>
                  ))}
                  <div className="blog-post-slider-nav">
                    <div className="blog-nav-prev nav-button">
                      <i className="fal fa-angle-left"></i>
                    </div>
                    <div className="blog-nav-next nav-button">
                      <i className="fal fa-angle-right"></i>
                    </div>
                  </div>
                </Swiper>
              )}
              {video && (
                <div className="postbox__thumb postbox__video w-img p-relative">
                  <Link href={`/blog/details/${id}`} legacyBehavior>
                    <img src={img} alt="" />
                  </Link>
                  <button
                    onClick={() => setIsVideoOpen(true)}
                    className="play-btn pulse-btn popup-video"
                  >
                    <i className="fas fa-play"></i>
                  </button>
                </div>
              )}
              <div className="postbox__content">
                <div className="postbox__meta">
                  <span>
                    <a href="#">
                      <i className="fal fa-user-circle"></i> {author}{" "}
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i className="fal fa-clock"></i>
                      {date}
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i className="fal fa-comment-alt-lines"></i>({comment})
                      Coments
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i className="fal fa-eye"></i> {views} views
                    </a>
                  </span>
                </div>
                <h3 className="postbox__title">
                  <Link href={`/blog/details/${id}`} legacyBehavior>
                    <a>{title}</a>
                  </Link>
                </h3>
                <div className="postbox__text">
                  <p>{short_desc}</p>
                </div>
                <div className="post__button">
                  <Link href={`/blog/details/${id}`} legacyBehavior>
                    <a className="tp-btn-yellow"> READ MORE</a>
                  </Link>
                </div>
              </div>
            </article>
          );
        })}

      {/* pagination start*/}
      <div className="basic-pagination">
        <PaginationArea
          handlePageClick={handlePageClick}
          pageCount={pageCount}
        />
      </div>
      {/* pagination end*/}

      {/* video modal start */}
      <VideoModal
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"-WRZI63emjs"}
      />
      {/* video modal end */}
    </>
  );
};

export default BlogItems;
