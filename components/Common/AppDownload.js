import useDownloader from "react-use-downloader";

const AppDownload = () => {
  return (
    <>
      <div className='app-download-area bg-f9f9f9'>
        <div className='container'>
          <div className='row align-items-center m-0'>
            <div className='col-lg-6 col-md-12 p-0'>
              {/* <div className='app-download-image'>
                <img src='' alt='image' />
              </div> */}
            </div>
            <div className='col-lg-6 col-md-12 p-0'>
              <div className='app-download-content'>
                <h2>Metatradas Mobile App</h2>
                <p>
                  <em>Metatradas</em> mobile app is now available. Click on the button bellow to download
                </p>
                <div className='btn-box'>
                  <a href="/downloads/matatradas-android-release.apk" className='playstore-btn'>
                    <img className="app_download" src='/images/play-store.png' alt='image' />
                    {/* Get It On */}
                    <span>Download</span>
                    Now!!!
                  </a>
                  {/* <a href='#' className='applestore-btn'>
                    <img src='/images/apple-store.png' alt='image' />
                    <span>Apple Store</span>
                    Coming Soon
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDownload;
