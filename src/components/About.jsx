import AboutImage from '../assets/about-image.png'

function About () {
    return (
      <div className="container-about">
        <div className="row about justify-content-md-center justify-content-sm-center">
          <div className="col-xl-4 col-md-12 col-sm-12 about1 d-flex justify-content-center">
            <img className="about-image" src={AboutImage} alt="about-cilacap" />
          </div>
          <div className="col-xl-7 col-md-12 col-sm-12 about2 d-flex justify-content-center">
            <h2>About Cilacap</h2>
            <p className="about-desc">
              Cilacap Regency, situated in Central Java, Indonesia, stands as an
              alluring destination celebrated for its awe-inspiring natural
              beauty. Its pristine, powdery white sandy beaches, complemented by
              the mesmerizing ocean waves, particularly at the renowned Teluk
              Penyu Beach, offer a slice of paradise for beach enthusiasts.
              Beyond its natural allure, Cilacap boasts a rich historical
              heritage, highlighted by the Dutch colonial-era Pendem Fortress,
              which not only offers a glimpse into the region's past but also
              provides panoramic vistas. This regency is a tapestry of diverse
              cultures, and its welcoming local community adds to its unique
              charm. Whether you're drawn to the natural wonders, historical
              significance, or the cultural diversity, Cilacap offers a perfect
              blend for travelers seeking an authentic experience on the island
              of Java, where warmth and hospitality are abundant.
            </p>
          </div>
        </div>
      </div>
    );
}

export default About;