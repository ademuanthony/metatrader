import React, { useState } from 'react';
import Link from 'next/link';

const Banner = () => {
  const [name, setName] = useState('Usd');
  const [nameTwo, setNameTwo] = useState('Usd');

  const [image, setImage] = useState(
    '/images/cryptocurrency/cryptocurrency1.png'
  );
  const [imageTwo, setImageTwo] = useState(
    '/images/cryptocurrency/cryptocurrency1.png'
  );

  const [clicked, setClicked] = useState(false);
  const [toggleState, setToggleState] = useState(false);
  const [toggleStateTwo, setToggleStateTwo] = useState(false);

  const category = [
    {
      name: 'Usd',
      image: '/images/cryptocurrency/cryptocurrency1.png',
    },
    {
      name: 'Bitcoin',
      image: '/images/cryptocurrency/cryptocurrency2.png',
    },
    {
      name: 'Litecoin',
      image: '/images/cryptocurrency/cryptocurrency3.png',
    },
    {
      name: 'XRP',
      image: '/images/cryptocurrency/cryptocurrency4.png',
    },
    {
      name: 'Stellar',
      image: '/images/cryptocurrency/cryptocurrency5.png',
    },
    {
      name: 'Cardano',
      image: '/images/cryptocurrency/cryptocurrency6.png',
    },
    {
      name: 'Digibyte',
      image: '/images/cryptocurrency/cryptocurrency7.png',
    },
  ];

  const toggleTabOne = () => {
    setToggleState(!toggleState);
  };

  const toggleTabTwo = () => {
    setToggleStateTwo(!toggleStateTwo);
  };

  const toggleSelected = (cat, index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
    setName(cat.name);
    setImage(cat.image);
  };

  const toggleSelectedTwo = (cat, index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
    setNameTwo(cat.name);
    setImageTwo(cat.image);
  };
  return (
    <>
      <div className='main-banner-area'>
        <div className='container'>
          
          <div className='row align-items-center m-0'>
            <div className='col-xl-6 col-lg-6 col-md-12 p-0'>
              <div className='main-banner-content'>
                <h1>Metatrader</h1>
                <h6>
                  The most reliable crypto trading bot using Artificial Inteligience with cognitive power
                </h6>
                <p>Make 35% return on your investment in both <strong>Bullish</strong> or <strong>Bearish</strong> seasons with the help <em>Metatrader</em></p>
                <Link href='/registerAuth'>
                  <a className='default-btn'>
                    <i className='bx bxs-user'></i> Register Now
                  </a>
                </Link>
              </div>
            </div>
            <div className='col-xl-4 col-lg-12 col-md-12 p-0'>
              <div className='main-banner-image'>
                <img src='/images/portfolio/portfolio-img1.png' alt='image' />
              </div>
            </div>
          </div>
        </div>
        <div className='shape1'>
          <img src='/images/shape/shape1.png' alt='image' />
        </div>
        <div className='shape2'>
          <img src='/images/shape/shape2.png' alt='image' />
        </div>
        <div className='shape3'>
          <img src='/images/shape/shape3.png' alt='image' />
        </div>
        <div className='shape5'>
          <img src='/images/shape/shape5.png' alt='image' />
        </div>
        <div className='shape9'>
          <img src='/images/shape/shape9.png' alt='image' />
        </div>
      </div>
    </>
  );
};

export default Banner;
