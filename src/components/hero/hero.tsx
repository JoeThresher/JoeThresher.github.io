import "./hero.css";

export default function Hero() {
  return (
    <>
      <section id="hero">
        <div className="container-lg">
          <div className="row justify-content-center align-items-center">
            {/* Text column */}
            <div className="col-md-5 text-center text-md-start">
              <h1>Joe Thresher</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                minima pariatur beatae impedit. Quas, aperiam explicabo numquam
                maiores doloremque quia dicta tenetur fugiat mollitia obcaecati
                impedit ducimus qui aliquam perferendis?
              </p>
            </div>
            {/* Picture column */}
            <div className="col-md-5 text-center d-md-block">
              <img
                src="https://images.unsplash.com/photo-1739382120665-fa6bcf8b7833?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D"
                className="img-fluid"
                alt="placeholder image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
