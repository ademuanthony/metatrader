const AccountCreate = ({ title }) => {
  return (
    <>
      <div className="account-create-process-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-9 col-md-12">
              <div className="account-create-process-content">
                <div className="section-title">
                  <h2>{title}</h2>
                  <p>
                    Making money with <emp>Metatradas</emp> is very easy. Apart from the return on your investments, you can earn extra income by referring your freinds on <em>Metatradas</em>.
                  </p>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="single-process-box">
                      <div className="icon">
                        <img src="/images/icon/icon1.png" alt="image" />
                      </div>
                      <h3>1st Generation</h3>
                      <ul>
                        <li>15% Referral Commission</li>
                        <li>15% Profit Sharing Commission</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="single-process-box">
                      <div className="icon">
                        <img src="/images/icon/icon2.png" alt="image" />
                      </div>
                      <h3>2nd Generation</h3>
                      <ul>
                        <li>10% Referral Commission</li>
                        <li>10% Profit Sharing Commission</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="single-process-box">
                      <div className="icon">
                        <img src="/images/icon/icon3.png" alt="image" />
                      </div>
                      <h3>3rd Generation</h3>
                      <ul>
                        <li>5% Referral Commission</li>
                        <li>5% Profit Sharing Commission</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-3 col-md-12">
              <div className="account-create-process-image text-center">
                <img src="/images/convert-currency.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountCreate;
