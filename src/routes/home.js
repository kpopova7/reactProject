import './home.scss';

const Home = () => {
  return <div class="home">
    <aside>
      <div class="aside">
        <div>A very useful side menu</div>
        <button>EDUCBA</button>
        <button>Courses</button>
        <button>Hot Courses</button>
        <button>Login</button>
        <button>Register</button>
        <button>Course Fee</button>
        <button>Contact</button>
      </div>
    </aside>
      <header class="showcase">
      <h2>Surface Deals</h2>
      <p>
        Select Surfaces are on sale now - save while supplies last
      </p>
      <button class="glow-on-hover">
        Shop Now <i class="fas fa-chevron-right"></i>
      </button>
    </header>

    <section class="home-cards">
      <div>
        <img src="https://i.ibb.co/LZPVKq9/card1.png" alt=""/>
        <h3>New Surface Pro 7</h3>
        <p>
          See how Katie Sowers, Asst. Coach for the 49ers, uses Surface Pro 7
						to put her plans into play.
        </p>
        <button class="glow-on-hover">Learn More <i class="fas fa-chevron-right"></i></button>
      </div>
      <div>
        <img src="https://i.ibb.co/KjGFHVJ/card2.png" alt="" />
        <h3>New Surface Laptop 3</h3>
        <p>
          Express yourself powerfully with a thin, light, and elegant design,
          faster performance, and up to 11.5 hours battery life.
        </p>
        <button class="glow-on-hover">Learn More <i class="fas fa-chevron-right"></i></button>
      </div>
      <div>
        <img src="https://i.ibb.co/2cnshH6/card3.png" alt="" />
        <h3>Save $150 + free controller</h3>
        <p>
          Buy an Xbox One X console and double your fun with a free select
          extra controller. Starting at $349.
        </p>
        <button class="glow-on-hover">Learn More <i class="fas fa-chevron-right"></i></button>
      </div>
      <div>
        <img src="https://i.ibb.co/G57P0Pb/card4.png" alt="" />
        <h3>The new Microsoft Edge</h3>
        <p>
          Expect more. World class performance, with more privacy, more
          productivity, and more value.
        </p>
        <button class="glow-on-hover">Learn More <i class="fas fa-chevron-right"></i></button>
      </div>
    </section>

    <section class="xbox">
      <div class="content">
        <h2>Xbox Game Pass Ultimate</h2>
        <p>Xbox Game Pass Ultimate Xbox Live Gold and over 100 high-quality
          console and PC games. Play together with friends and discover your
          next favorite game.</p>
          <button class="glow-on-hover">
            Join Now <i class="fas fa-chevron-right"></i>
          </button>
      </div>
    </section>

			<section class="home-cards">
				<div>
					<img src="https://i.ibb.co/zVqhWn2/card5.png" alt="" />
					<h3>Microsoft Teams</h3>
					<p>
						Unleash the power of your team.
					</p>
					<button class="glow-on-hover">Shop Now <i class="fas fa-chevron-right"></i></button>
				</div>
				<div>
					<img src="https://i.ibb.co/mGZcxcn/card6.jpg" alt="" />
					<h3>Unlock the power of learning</h3>
					<p>
						Get students future-ready with Windows 10 devices. Starting at $219.
					</p>
					<button class="glow-on-hover">Shop Now <i class="fas fa-chevron-right"></i></button>
				</div>
				<div>
					<img src="https://i.ibb.co/NpPvVHj/card7.png" alt="" />
					<h3>Windows 10 Enterprise</h3>
					<p>
						Download the free 90-day evaluation for IT professionals.
					</p>
					<button class="glow-on-hover">Download Now <i class="fas fa-chevron-right"></i></button>
				</div>
				<div>
					<img src="https://i.ibb.co/LkP4L5T/card8.png" alt="" />
					<h3>Explore Kubernetes</h3>
					<p>
						Learn how Kubernetes works and get started with cloud native app
						development today.
					</p>
					<button class="glow-on-hover">Get Started <i class="fas fa-chevron-right"></i></button>
				</div>
      </section>
      
      <section class="carbon dark">
        <div class="content">
          <h2>Commiting To Carbon Negative</h2>
          <p>Microsoft will be carbon negative by 2030 and by 2050 we will remove
            all carbon the company has emitted since it was founded in 1975</p>
            <button class="glow-on-hover">
              Learn More <i class="fas fa-chevron-right"></i>
            </button>
        </div>
      </section>
    </div>
};

export default Home;