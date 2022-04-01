import PageBanner from '../components/Common/PageBanner';
import Link from '../utils/ActiveLink';

const Guides = () => {
  return (
    <>
      <PageBanner
        pageTitle='How to Earn with Metatradas'
        pageSubTitle='Follows these simple steps and start earning.'
      />
      <div className='guides-area ptb-100'>
        <div className='container'>
          <div className='guides-content'>
            <div className='number'>1</div>
            <div className='row m-0'>
              <div className='col-lg-3 col-md-12 p-0'>
                <div className='box'>
                  <h3>Step 1</h3>
                  <span>Create an Account</span>
                </div>
              </div>
              <div className='col-lg-9 col-md-12 p-0'>
                <div className='content'>
                  <p>
                    Click  <a href='https://platform.metatradas.com/user/register'>Here </a> to create an account for FREE
                  </p>
                  <Link href="https://platform.metatradas.com/user/register">
                    <a>
                      <img src='/images/create-account.jpg' alt='image' />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='guides-content'>
            <div className='number'>2</div>
            <div className='row m-0'>
              <div className='col-lg-3 col-md-12 p-0'>
                <div className='box'>
                  <h3>Step 2</h3>
                  <span>Buy a bot</span>
                </div>
              </div>
              <div className='col-lg-9 col-md-12 p-0'>
                <div className='content'>
                  <p>
                    Subscribe to any package of your choice. 
                  </p>
                  <Link href="/">
                    <a>
                      <img src='/images/select-coin.jpg' alt='image' />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='guides-content'>
            <div className='number'>3</div>
            <div className='row m-0'>
              <div className='col-lg-3 col-md-12 p-0'>
                <div className='box'>
                  <h3>Step 3</h3>
                  <span>Fund your account</span>
                </div>
              </div>
              <div className='col-lg-9 col-md-12 p-0'>
                <div className='content'>
                  <p>
                    Fund your <emp>Metatradas</emp> with your trading capital. 
                  </p>
                  <img style={{maxHeight: "291px", width: "483px"}} src='/images/buy.jpg' alt='image' />
                </div>
              </div>
            </div>
          </div>
          <div className='guides-content'>
            <div className='number'>4</div>
            <div className='row m-0'>
              <div className='col-lg-3 col-md-12 p-0'>
                <div className='box'>
                  <h3>Step 4</h3>
                  <span>Share your Link</span>
                </div>
              </div>
              <div className='col-lg-9 col-md-12 p-0'>
                <div className='content'>
                  <p>
                    Share your referral link and create extra stream of income to you.  
                  </p>
                  <img src='/images/select-payment.jpg' alt='image' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Guides;
