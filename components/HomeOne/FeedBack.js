
const FeedBack = () => {
  return (
    <>
      <div className='fedback-area pt-100 pb-70'>
        <div className='container'>
          <div className='section-title'>
            <h2>Subscriptions</h2>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='single-feedback-box'>
                <div className="subscription-title">
                  <span className="subscription-gold text-center">Emirate</span>
                </div>
                <div className="row">
                  <div className="col-6 subscription-details">
                    <h5>Investors</h5> 
                    <h4 className="sub-info"><i className="fa fa-user icon-sm" /> <span id="investors">0</span></h4>
                  </div>
                  <div className="col-6 subscription-details">
                    <h5>Monthly ROI</h5> 
                    <h4 className="sub-info">25 - 35 <i className="fa fa-percent icon-sm" /></h4>
                  </div>
                </div>
                <p className="subscription-title">Subscription Fee <span className="sub-info">$100</span></p>
                <h4 className="text-center">Accuracy: 95%</h4>
                <h6 className="text-center">Trades per day: 10</h6>
                <div className="subscription-btn">
                  <a href='/subscribtions' className='default-btn '>
                    <i className='bx bxs-user'></i> Subscribe Now
                  </a>
                </div>
                
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='single-feedback-box'>
                <div className="subscription-title">
                  <span className="subscription-gold text-center">Emperor</span>
                </div>
                <div className="row">
                  <div className="col-6 subscription-details">
                    <h5>Investors</h5> 
                    <h4 className="sub-info"><i className="fa fa-user icon-sm" /> <span id="investors">0</span></h4>
                  </div>
                  <div className="col-6 subscription-details">
                    <h5>Monthly ROI</h5> 
                    <h4 className="sub-info">20 - 25 <i className="fa fa-percent icon-sm" /></h4>
                  </div>
                </div>
                <p className="subscription-title">Subscription Fee <span className="sub-info">$50</span></p>
                <h4 className="text-center">Accuracy: 80%</h4>
                <h6 className="text-center">Trades per day: 5</h6>
                <div className="subscription-btn">
                  <a href='/subscribtions' className='default-btn '>
                    <i className='bx bxs-user'></i> Subscribe Now
                  </a>
                </div>
                
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='single-feedback-box'>
                <div className="subscription-title">
                  <span className="subscription-gold text-center">Captain</span>
                </div>
                <div className="row">
                  <div className="col-6 subscription-details">
                    <h5>Investors</h5> 
                    <h4 className="sub-info"><i className="fa fa-user icon-sm" /> <span id="investors">0</span></h4>
                  </div>
                  <div className="col-6 subscription-details">
                    <h5 className="text-center">Monthly ROI</h5> 
                    <h4 className="sub-info text-center"> 15 - 20 <i className="fa fa-percent icon-sm" /></h4>
                  </div>
                </div>
                <p className="subscription-title">Subscription Fee <span className="sub-info">$30</span></p>
                <h4 className="text-center">Accuracy: 70%</h4>
                <h6 className="text-center">Trades per day: 7</h6>
                <div className="subscription-btn">
                  <a href='/subscribtions' className='default-btn '>
                    <i className='bx bxs-user'></i> Subscribe Now
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedBack;
