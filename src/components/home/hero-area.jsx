import Link from "next/link";
import React from "react";
import Image from "next/image";
import useModal from "../../hooks/use-modal";
import { HeroSocialLinks } from "../../layout/social-links";
import { HighlightSix } from "../../svg";
import VideoModal from "../common/modals/modal-video";
import useHeaders from "../../data/api/use-headers";

const HeroArea = () => {
  const headers = useHeaders();
  const { isVideoOpen, setIsVideoOpen } = useModal();

  if (!headers) {
    return <p>Loading...</p>;
  }

  const header_title = headers.header_title || "";
  // Tentukan bagian yang ingin di-highlight
  const highlightedText = "IT business solution";
  // Pisahkan teks sebelum, target, dan sesudahnya
  const parts = header_title ? header_title.split(highlightedText) : ["", "", ""];

  return (
    <React.Fragment>
      <div className="tp-hero-area tp-hero-border tp-bp-hero-space p-relative grey-bg fix">
        <div className="tp-hero-social pb-30 bs-hero-social d-none d-xxl-block">
          <HeroSocialLinks />
        </div>
        <div
          className="tp-bp-hero-shape d-none d-lg-block wow tpfadeRight"
          data-wow-duration=".3s"
          data-wow-delay=".6s"
        >
          {headers.background_image_path ? (
            <Image
              src={headers.background_image_path}
              alt="Background Hero Image"
              width={650}
              height={970}
              priority={true}
            />
          ) : (
            <div style={{ width: 650, height: 970, backgroundColor: "#ccc" }}>
              Image not available
            </div>
          )}
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-12">
              <div className="tp-hero-section-box tp-bp-hero-section-box">
                <h3
                  className="tp-hero-title tp-bs-hero-title wow tpfadeUp"
                  data-wow-duration=".5s"
                  data-wow-delay=".8s"
                >
                  {parts[0]}
                  <span className="tp-highlight">
                    <HighlightSix /> <i>{highlightedText}</i>
                  </span>
                  {parts[1]}
                </h3>
                <p
                  className="wow tpfadeUp"
                  data-wow-duration=".7s"
                  data-wow-delay=".9s"
                >
                  {headers.header_desc}
                </p>
                <div
                  className="tp-hero-three-button-box d-flex align-items-center wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay="1.1s"
                >
                  <div className="xs-bottom-space">
                    <Link href="/contact" legacyBehavior>
                      <a className="tp-btn-sky mr-55">Contact us</a>
                    </Link>
                  </div>
                  <div
                    onClick={() => setIsVideoOpen(true)}
                    className="tp-hero-paly-button tp-bp-hero-paly-button  z-index-1"
                  >
                    <button className="popup-video">
                      <i className="far fa-play"></i>
                    </button>
                    <span>{headers.video_title}</span>
                  </div>
                </div>
                <div className="tp-hero-social pb-30 d-xxl-none d-xl-block">
                  <div className="tp-hero-social bp-hero-social bs-xl-hero-social">
                    <HeroSocialLinks hide_title={true} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5">
              <div className="tp-hero-right">
                <div
                  className="tp-bp-hero__img p-relative wow tpfadeRight"
                  data-wow-duration=".9s"
                  data-wow-delay="1s"
                >
                  <img
                    className="z-index-1"
                    src={headers.image_path}
                    alt="Hero Image"
                    // width={870}
                    // height={490}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoModal
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={headers.video_id}
      />
      {/* video modal end */}
    </React.Fragment>
  );
};

export default HeroArea;
