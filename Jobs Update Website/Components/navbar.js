
let navbar = ()=>{
  return `
  <div class="logo">Job Updates Pro</div>
  <input type="checkbox" id="nav_check" hidden>
  <nav>
      <ul>
          <li>
              <a href="index.html" class="active">Home</a>
          </li>
          <li>
              <a href="">Freshers Jobs</a>
          </li>
          <li>
            <a href="">MNC Jobs</a>
        </li>
          <li>
              <a href="">Goverment Jobs</a>
          </li>
          <li>
              <a href="">Study Material</a>
          </li>
          <li>
              <a href="">Contact</a>
          </li>
      </ul>
  </nav>
  <label for="nav_check" class="hamburger">
      <div></div>
      <div></div>
      <div></div>
  </label>
`
}

let footer =()=>{
    return ` <div class="container">
    <div class="row">
      <div class="footer-col">
        Whether you're on the brink of launching your career or seeking a fresh start, Job Updates Pro is your trusted partner in the ever-evolving job market. Your dream job and the path to career success are just a few clicks away. Start exploring today and transform your professional journey with Job Updates Pro. Your future awaits - let's make it happen together.
      </div>
      <div class="footer-col">
        <h4>company</h4>
        <ul>
          <li><a href="#">about us</a></li>
          <li><a href="#">our services</a></li>
          <li><a href="#">privacy policy</a></li>
          <li><a href="#">affiliate program</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>follow us</h4>
        <div class="social-links">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
  </div>`
}

export {navbar,footer};