import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <a href="index.html" className="d-inline-block logo">
                  <img src="/images/logo.png" alt="logo" />
                </a>
                <div className="newsletter-form">
                  <p>SUBSCRIBE TO OUR NEWSLETTER</p>
                  <form data-toggle="validator">
                    <input
                      type="email"
                      className="input-newsletter"
                      placeholder="Enter your email"
                      name="EMAIL"
                      required
                      autoComplete="off"
                    />
                    <button type="submit">
                      Subscribe Now <i className="bx bx-paper-plane"></i>
                    </button>
                    <div
                      id="validator-newsletter"
                      className="form-result"
                    ></div>
                  </form>
                </div>
                <ul className="social-links">
                  <li>
                    <a href="https://discord.gg/Nvyfm4zAjQ" target="_blank" className="discord">
                      <i className="bx bxl-discord"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/metatradas" target="_blank" className="twitter">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/metatradas" target="_blank" className="telegram">
                      <i className="bx bxl-telegram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <h3>Trading Platform</h3>
                <ul className="services-links">
                  <li>
                    <Link href="https://platform.metatradas.com/app/trade/position">Binance</Link>
                  </li>
                  <li>
                    <Link href="https://platform.metatradas.com/app/trade/position">Kucoin</Link>
                  </li>
                  <li>
                    <Link href="https://platform.metatradas.com/app/trade/position">Bitrex</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget pl-5">
                <h3>Resources</h3>
                <ul className="quick-links">
                  <li>
                    <Link href="/#">Subscription</Link>
                  </li>
                  <li>
                    <Link href="/guides">Guides</Link>
                  </li>
                  <li>
                    <Link href="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <h3>About</h3>
                <ul className="footer-contact-info">
                  <li>
                    <Link href="/about">Why Metatradas?</Link>
                  </li>
                  <li>
                    <Link href="/#">Metatradas Review</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <p>
              Copyright 2022 <strong>Metatradas</strong>. All Rights Reserved by{" "}
              <Link href="/">Metatradas Team</Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
