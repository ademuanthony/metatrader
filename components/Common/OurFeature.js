
const OurFeature = ({title}) => {
  return (
    <>
      <div className='features-area pt-100 pb-70'>
        <div className='container'>
          <div className='section-title'>
            <h2>{title}</h2>
            <p>
              
            </p>
          </div>
          <div className='row align-items-center justify-content-center'>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-features-box'>
                <img src='/images/features/features-img1.png' alt='image' />
                <h3>Highly Secured</h3>
                <p>
                  The system is build with the best security architecture. All accounts on the system must be fully verified with valid documents in order to make withdrawals.
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-features-box'>
                <img src='/images/features/features-img2.png' alt='image' />
                <h3>Fast Withdrawals</h3>
                <p>
                  Withdrawals are automated and very fast. A fee of 20% is charged on every withdrawals. 
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-features-box'>
                <img src='/images/features/features-img3.png' alt='image' />
                <h3>24/7 Support</h3>
                <p>
                  The team is always available and open to meet all your technical needs 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurFeature;
