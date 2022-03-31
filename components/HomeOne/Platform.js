import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  nav: true,
  loop: true,
  margin: 30,
  dots: true,
  center: true,
  autoplay: true,
  autoplayHoverPause: true,
  navText: [
    "<i class='bx bx-left-arrow-alt'></i>",
    "<i class='bx bx-right-arrow-alt'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 2,
      center: false,
    },
    992: {
      items: 2,
      center: false,
    },
    1200: {
      items: 2,
      center: true,
    },
  },
};

const Platform = () => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(false);
  }, []);

  return (
    <>
      <div className="cryptocurrency-platform-area">
        <div className="container-fluid">
          <div className="section-title">
            <h2>Why Metatradas?</h2>
            <p>
              <em>Metatradas</em> is carefully designed to make optimal market moves for you without your involvement thanks to the cognitive power of our bot.
            </p>
          </div>
          <div className="cryptocurrency-platform-slides">
            {display ? (
              <OwlCarousel
                className="cryptocurrency-platform-slides"
                loop
                margin={10}
                nav
                {...options}
              >
                <div className="single-cryptocurrency-platform-box">
                  <img
                    src="/images/cryptocurrency-platform/cryptocurrency-platform-1.jpg"
                    alt="image"
                  />
                  <div className="content">
                    <div className="icon">
                      <img src="/images/icon/icon12.png" alt="image" />
                    </div>
                    <h3>
                      <a href="/about">No Technical Skill Required!</a>
                    </h3>
                    <p>
                      You don't need to understand crypto trading to earn on{" "}
                      <em>Metatradas</em>. All you need to do is to pay a
                      yearly subscription fee of $100, $50, or $30 for the Gold, Silver or Bronze packages reaspectively and the bot trade for you.
                    </p>
                    <Link href="/about" className="link-btn">
                      <a className="link-btn">
                        {" "}
                        View More <i className="bx bx-chevron-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="single-cryptocurrency-platform-box">
                  <img
                    src="/images/cryptocurrency-platform/cryptocurrency-platform-3.jpg"
                    alt="image"
                  />
                  <div className="content">
                    <div className="icon">
                      <img src="/images/icon/icon5.png" alt="image" />
                    </div>
                    <h3>
                      <a href="/about">
                        Affiliate and Profit-Sharing Commission
                      </a>
                    </h3>
                    <p>
                      The three generation referral and profit sharring
                      Commission built into the system are as follows:
                      <ul>
                        <li>1st Generation => 15%</li>
                        <li>2nd Generation => 10%</li>
                        <li>3rd Generation => 5%</li>
                      </ul>
                      You will earn massive reward for building an active
                      community in <em>Metatradas</em>.{" "}
                    </p>
                    <Link href="/about" className="link-btn">
                      <a className="link-btn">
                        {" "}
                        View More <i className="bx bx-chevron-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="single-cryptocurrency-platform-box">
                  <img
                    src="/images/cryptocurrency-platform/cryptocurrency-platform-4.jpg"
                    alt="image"
                  />
                  <div className="content">
                    <div className="icon">
                      <img src="/images/icon/icon6.png" alt="image" />
                    </div>
                    <h3>
                      <a href="/about">
                        Make profit regardless of the trend
                      </a>
                    </h3>
                    <p>
                      <em>Metatradas</em> bot is designed to make profit
                      regardless of the market trend. The bot is smart enough to
                      make the right calls on sport or futures trading in both
                      Bearish and Bullish seasons.
                    </p>
                    <Link href="/about" className="link-btn">
                      <a className="link-btn">
                        {" "}
                        View More <i className="bx bx-chevron-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="single-cryptocurrency-platform-box">
                  <img
                    src="/images/cryptocurrency-platform/cryptocurrency-platform-2.jpg"
                    alt="image"
                  />
                  <div className="content">
                    <div className="icon">
                      <img src="/images/icon/icon7.png" alt="image" />
                    </div>
                    <h3>
                      <a href="about">
                        Automated Trading
                      </a>
                    </h3>
                    <p>
                      With your yearlly subscription, you don't need to worry on
                      the type of calls to make in the market and when to make
                      them. Metatradas got you covered.
                    </p>
                    <Link href="/about" className="link-btn">
                      <a className="link-btn">
                        {" "}
                        View More <i className="bx bx-chevron-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </OwlCarousel>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Platform;
