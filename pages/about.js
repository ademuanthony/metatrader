import AdvisorArea from '../components/Common/AdvisorArea';
import AccountCreate from '../components/Common/AccountCreate';
import RegisterArea from '../components/Common/RegisterArea';

const About = () => {
  return (
    <>
      <div className='about-area pb-100'>
        <div className='container'>
          <div className='history-timeline timeline'>
            <div className='section-title'>
              <h2>About Metatradas</h2>
            </div>
            <div className='timeline-event'>
              <div className='timeline-event-icon'>
                <i className='bx bxs-pie-chart-alt'></i>
              </div>
              {/* <div className='timeline-event-date bg5'>
                <span>Metatradas</span>
              </div> */}
              <div className='timeline-event-content'>
                <h3>About metatradas technical analysis software</h3>
                <h6>Software that traders actually wants</h6>
                <p>
                  Metatradas The most reliable crypto trading Platform using Artificial Inteligience with cognitive power.
                </p>
                <p>It is a known fact that technical trading is always not an easy task. In the bid to find consistent and efficient technical strategies, external factors such as emotions, bias, fatique, etc keeps reducing our efficciency as humans <em>Metatradas</em> bot —one that would give you the tools to build better plans while helping to mitigate profit-killing blunders by making analysis more consistent — was born to improve substandard results produced by manual trading.</p>
              </div>
            </div>
            <div className='timeline-event'>
              <div className='timeline-event-icon'>
                <i className='bx bx-coin-stack'></i>
              </div>
              <div className='timeline-event-date bg4'>
                <span>Why metatradas?</span>
              </div>
              <div className='timeline-event-content'>
                <h3>Raimo is Born</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  nam! Nam eveniet ut aliquam ab asperiores, accusamus iure
                  veniam corporis incidunt reprehenderit accusantium id aut
                  architecto harum quidem dolorem in!
                </p>
              </div>
            </div>
            <div className='timeline-event'>
              <div className='timeline-event-icon'>
                <i className='bx bx-sun'></i>
              </div>
              <div className='timeline-event-date bg2'>
                <span>MAY 2009</span>
              </div>
              <div className='timeline-event-content'>
                <h3>The Rise of Raimo</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  nam! Nam eveniet ut aliquam ab asperiores, accusamus iure
                  veniam corporis incidunt reprehenderit accusantium id aut
                  architecto harum quidem dolorem in!
                </p>
              </div>
            </div>
            <div className='timeline-event'>
              <div className='timeline-event-icon'>
                <i className='bx bxl-apple'></i>
              </div>
              <div className='timeline-event-date bg3'>
                <span>APR 2012</span>
              </div>
              <div className='timeline-event-content'>
                <h3>The Raimo Mobile App</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  nam! Nam eveniet ut aliquam ab asperiores, accusamus iure
                  veniam corporis incidunt reprehenderit accusantium id aut
                  architecto harum quidem dolorem in!
                </p>
              </div>
            </div>
            <div className='timeline-event'>
              <div className='timeline-event-icon'>
                <i className='bx bxl-bitcoin'></i>
              </div>
              <div className='timeline-event-date bg4'>
                <span>FEB 2017</span>
              </div>
              <div className='timeline-event-content'>
                <h3>Adding Cryptocurrencies</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  nam! Nam eveniet ut aliquam ab asperiores, accusamus iure
                  veniam corporis incidunt reprehenderit accusantium id aut
                  architecto harum quidem dolorem in!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdvisorArea  bgColor="bg-f9f9f9"/>
      <RegisterArea ctaImage='/images/man.png' />
    </>
  );
};

export default About;
