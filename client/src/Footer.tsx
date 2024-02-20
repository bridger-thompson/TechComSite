
export const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container">
        <div className="row">
          {/* Column for About Us, Services, etc. */}
          <div className="col-md-3 col-sm-6">
            <h5>About Us</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Our Story</a></li>
              <li><a href="/" className="text-light">Team</a></li>
              <li><a href="/" className="text-light">Careers</a></li>
            </ul>
          </div>

          {/* Column for Services */}
          <div className="col-md-3 col-sm-6">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Text Generation</a></li>
              <li><a href="/" className="text-light">Image Generation</a></li>
              <li><a href="/" className="text-light">Data Analysis</a></li>
            </ul>
          </div>

          {/* Column for Quick Links */}
          <div className="col-md-3 col-sm-6">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Contact Us</a></li>
              <li><a href="/" className="text-light">FAQ</a></li>
              <li><a href="/" className="text-light">Support</a></li>
            </ul>
          </div>

          {/* Column for Newsletter Subscription */}
          <div className="col-md-3 col-sm-6">
            <h5>Stay Updated</h5>
            <form>
              <div className="form-group mb-1">
                <input type="email" className="form-control" placeholder="Enter email" />
              </div>
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="row mt-4">
          <div className="col text-center">
            <a href="h://facebook.com" className="text-light me-2"><i className="bi bi-facebook"></i></a>
            <a href="h://twitter.com" className="text-light me-2"><i className="bi bi-twitter"></i></a>
            <a href="h://instagram.com" className="text-light me-2"><i className="bi bi-instagram"></i></a>
            <a href="h://linkedin.com" className="text-light"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="row mt-4">
          <div className="col text-center">
            <p>&copy; 2024 AI Website. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
