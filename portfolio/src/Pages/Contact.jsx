export default function Contact() {
  return (
    <section className="section">
      <div className="section-inner">
        <div id="contact" className="card-container">
          <h1
            className="headerText"
            style={{
              borderBottom: "2px solid #a882ff",
            }}
          >
            <span className="gradientSpan">Contact</span>
          </h1>
          <div className="d-flex flex-column justify-content-start pt-3">
            <div className="d-flex flex-row gap-1 p-2">
              <div className="iconCircle">
                <i className="bi bi-telephone-fill"></i>
              </div>
              <p className="contactGradient">463-294-8006</p>
            </div>
            <div className="d-flex flex-row gap-1 p-2">
              <div className="iconCircle">
                <i className="bi bi-envelope-fill"></i>
              </div>
              <p className="contactGradient">Esmith.Sdev@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
