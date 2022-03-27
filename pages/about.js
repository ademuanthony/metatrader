import RegisterArea from "../components/Common/RegisterArea";

const About = () => {
  return (
    <>
      <div className="about-area pb-100">
        <div className="container">
          <div className="history-timeline timeline">
            <div className="section-title">
              <h2>About Metatradas</h2>
            </div>
            <div className="timeline-event">
              <div className="timeline-event-icon">
                <i className="bx bxs-pie-chart-alt"></i>
              </div>
              <div className="timeline-event-content">
                <h3>About metatradas technical analysis software</h3>
                <h6>Software that traders actually wants</h6>
                <p>
                  Metatradas The most reliable crypto trading Platform using
                  Artificial Inteligience with cognitive power.
                </p>
                <p>
                  It is a known fact that technical trading is always not an
                  easy task. In the bid to find consistent and efficient
                  technical strategies, external factors such as emotions, bias,
                  fatique, etc keeps reducing our efficciency as humans{" "}
                  <em>Metatradas</em> bot —one that would give you the tools to
                  build better plans while helping to mitigate profit-killing
                  blunders by making analysis more consistent — was born to
                  improve substandard results produced by manual trading.
                </p>
              </div>
            </div>
            <div className="timeline-event">
              <div className="timeline-event-icon">
                <i className="bx bx-coin-stack"></i>
              </div>
              <div className="timeline-event-content">
                <h3>Metatradas Today</h3>
                <h6>
                  So what is this advantage that metatradas brings to the table?
                </h6>
                <p>
                  All Trade Ideas technology is made from scratch by our own
                  team of developers. Our server farm connects directly to the
                  Exchanges and we watch EVERY SINGLE TRADE that is made. Every
                  tick is watched by a system that measures behaviour against
                  the past in real-time. Constant analysis and re-analysis.
                  Testing and re-testing. This allows us to give metatradas
                  customers results that are UNMATCHED by any other vendor in
                  financial technology. Investors have to see it to believe it,
                  and once they catch on, they quickly realize that there is no
                  substitute.
                </p>
              </div>
            </div>
            <div className="timeline-event">
              <div className="timeline-event-icon">
                <i className="bx bx-user-plus"></i>
              </div>
              <div className="timeline-event-date bg4">
                <span>Referral programs</span>
              </div>
              <div className="timeline-event-content">
                <h3>Compensation plan</h3>
                <p>
                  We have very strong Compensation plan carefully planned for
                  you to earn extral income other than the payout from the bot.
                  The three generation referral program built into the system
                  are as follows:
                  <ul>
                    <li>1st Generation => 15%</li>
                    <li>2nd Generation => 10%</li>
                    <li>3rd Generation => 5%</li>
                  </ul>
                  You're rewaded massivelly for building an active community in{" "}
                  <em>Metatradas</em>.
                </p>
              </div>
            </div>
            <div className="timeline-event">
              <div className="timeline-event-icon">
                <i className="bx bx-wallet"></i>
              </div>
              <div className="timeline-event-date bg4">
                <span>Profit Maximization</span>
              </div>
              <div className="timeline-event-content">
                <h3>3 Ways to Maximize Profit in Metatradas</h3>
               
                  <ul>
                    <li>Choose a Compensation plan appropriate for you.</li>
                    <li>
                      Create an affiliate network by sharing <em>Metatradas</em>{" "}
                      with your friends
                    </li>
                    <li>
                      Attain leadership possition to qualify for profit sharing
                    </li>
                  </ul>
              </div>
            </div>
            <div className="timeline-event">
              <div className="timeline-event-icon">
                <i className="bx bx-dollar"></i>
              </div>
              <div className="timeline-event-content">
                <h2>Metatradas Compensation Plans</h2>
                
                <ul>
                  <li>
                    <h6>Captain</h6>
                    <ul>
                      <li>Subscription fee: 30$</li>
                      <li>As a Captain package subscriber, you will be earning between 15 - 20% return on investment per month.  The bot will be making 7 calculated trades per day with an accuracy of 70%</li>
                    </ul>
                  </li>
                  <li>
                    <h6>EMPEROR</h6>
                    <ul>
                      <li>Subscription fee: 50$</li>
                      <li>As an <em>Emperor</em> package subscriber, you will be earning between 20 - 25% return on investment per month.  The bot will be making 5 calculated trades per day with an accuracy of 80%</li>
                    </ul>
                  </li>
                  <li>
                    <h6>EMIRATE</h6>
                    <ul>
                      <li>Subscription fee: 100$</li>
                      <li>As an <em>Emirate</em> package subscriber, you will be earning between 25 - 35% return on investment per month.  The bot will be making 7 calculated trades per day with an accuracy of 95%</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RegisterArea ctaImage="/images/man.png" />
    </>
  );
};

export default About;
