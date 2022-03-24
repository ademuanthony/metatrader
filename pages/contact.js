import PageBanner from '../components/Common/PageBanner';

const Contact = () => {
  return (
    <>
      <PageBanner
        pageTitle='Contact Us'
        pageSubTitle='Want to know more?.'
      />

      <div className='contact-area ptb-100'>
        <div className='container'>
          <div className='contact-form'>
            <div className='section-title'>
              <h2>Get In Touch!</h2>
              <p>

              </p>
            </div>
            <form id='contactForm'>
              <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='name'
                      className='form-control'
                      id='name'
                      required
                      data-error='Please enter your name'
                      placeholder='Full name'
                    />
                    <div className='help-block with-errors'></div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                  <div className='form-group'>
                    <input
                      type='email'
                      name='email'
                      className='form-control'
                      id='email'
                      required
                      data-error='Please enter your email'
                      placeholder='Email address'
                    />
                    <div className='help-block with-errors'></div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='phone_number'
                      className='form-control'
                      id='phone_number'
                      required
                      data-error='Please enter your phone number'
                      placeholder='Enter your phone number'
                    />
                    <div className='help-block with-errors'></div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='msg_subject'
                      className='form-control'
                      id='msg_subject'
                      placeholder='Enter your subject'
                      required
                      data-error='Please enter your subject'
                    />
                    <div className='help-block with-errors'></div>
                  </div>
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                  <div className='form-group'>
                    <textarea
                      name='message'
                      id='message'
                      className='form-control'
                      cols='30'
                      rows='6'
                      required
                      data-error='Please enter your message'
                      placeholder='Enter message...'
                    ></textarea>
                    <div className='help-block with-errors'></div>
                  </div>
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                  <button type='submit' className='default-btn'>
                    <i className='bx bx-paper-plane'></i> Send Message
                  </button>
                  <div id='msgSubmit' className='h3 text-center hidden'></div>
                  <div className='clearfix'></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
