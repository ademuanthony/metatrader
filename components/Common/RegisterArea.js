import React from 'react';

const RegisterArea = ({bgGradient,blackText,ctaImage}) => {
  return (
    <>
      <div className={`cta-area pt-100 ${bgGradient}`}>
        <div className='container'>
          <div className='row align-items-center justify-content-center'>
            <div className='col-lg-6 col-md-12'>
              <div className={`cta-content ${blackText}`}>
                <h2>Start Making Money with Metatradas</h2>
                <p>
                  Make money while you sleep!!!
                </p>
                <a href='https://platform.metatradas.com/user/register?ref=qwas01a' className='default-btn'>
                  <i className='bx bxs-user'></i> Register and Activate your Account now
                </a>
              </div>
            </div>
            <div className='col-lg-6 col-md-12'>
              <div className='cta-image'>
                <img src={ctaImage} alt='image' />
              </div>
            </div>
          </div>
        </div>
        <div className='shape6'>
          <img src='/images/shape/shape6.png' alt='image' />
        </div>
        <div className='shape7'>
          <img src='/images/shape/shape7.png' alt='image' />
        </div>
        <div className='shape8'>
          <img src='/images/shape/shape8.png' alt='image' />
        </div>
        <div className='shape9'>
          <img src='/images/shape/shape9.png' alt='image' />
        </div>
        <div className='shape15'>
          <img src='/images/shape/shape15.png' alt='image' />
        </div>
      </div>
    </>
  );
};

export default RegisterArea;
