import "./about.css";

export default function About() {
  return (
    <>
      <section id="about" className="bg-light">
        <div className="container-lg">
          <div className="row justify-content-between align-items-center">
            {/* Card */}
            <div className="col-md-5">
              <div className="card">
                <div className="card-body">
                  This is a card that will have images in it.
                </div>
              </div>
            </div>
            {/* About section */}
            <div className="col-md-5">
              <h2>About</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reiciendis ad mollitia rem, odio autem provident! In itaque
                consequatur nihil dolore architecto tempore error assumenda hic
                blanditiis! Dignissimos nulla qui animi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
