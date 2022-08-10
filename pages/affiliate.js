import PageBanner from '../components/Common/PageBanner';
import AccountCreate from '../components/Common/AccountCreate';
import OurFeature from '../components/Common/OurFeature';
import RegisterArea from '../components/Common/RegisterArea';

const Affiliate = () => {
  return (
    <>

      <div className='earn-money-area pt-100 pb-70 bg-f9f9f9'>
        <div className='container'>
          <div className='row'>
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
                    <h4 className="sub-info">15 <i className="fa fa-percent icon-sm" /></h4>
                  </div>
                </div>
                <p className="subscription-title">Subscription Fee <span className="sub-info">$100</span></p>
                <h4 className="text-center">Accuracy: 95%</h4>
                <h6 className="text-center">Trades per day: 10</h6>
                <div className="subscription-btn">
                  <a href='https://platform.metatradas.com/user/register' className='default-btn '>
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
                    <h4 className="sub-info">10 <i className="fa fa-percent icon-sm" /></h4>
                  </div>
                </div>
                <p className="subscription-title">Subscription Fee <span className="sub-info">$50</span></p>
                <h4 className="text-center">Accuracy: 80%</h4>
                <h6 className="text-center">Trades per day: 7</h6>
                <div className="subscription-btn">
                  <a href='https://platform.metatradas.com/user/register' className='default-btn '>
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
                    <h4 className="sub-info text-center"> 5 <i className="fa fa-percent icon-sm" /></h4>
                  </div>
                </div>
                <p className="subscription-title">Subscription Fee <span className="sub-info">$30</span></p>
                <h4 className="text-center">Accuracy: 70%</h4>
                <h6 className="text-center">Trades per day: 5</h6>
                <div className="subscription-btn">
                  <a href='https://platform.metatradas.com/user/register' className='default-btn '>
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

export default Affiliate;
