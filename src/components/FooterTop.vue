<script>
export default {
  name: 'FooterTop',
  data() {
    return {
      footerInfo: {
        about: [
          { name: 'About Us', link: '#' },
          { name: 'Contact Us', link: '#' },
          { name: 'FAQs', link: '#' },
        ],
        community: [
          { name: 'Events', link: '#' },
          { name: 'Forums', link: '#' },
          { name: 'Guides', link: '#' },
        ],
        legal: [
          { name: 'Service', link: '#' },
          { name: 'Privacy', link: '#' },
          { name: 'Accessibility', link: '#' },
        ],
      },
    }
  }
};
</script>

<template>
  <footer>
    <div class="container">
      <div class="row d-flex">
        <!-- left col -->
        <div class="col col-md-6 d-flex justify-content-between order-2 order-md-1 d-none d-md-flex">
          <!-- link -->
          <div class="col col-md-4 p-3">
            <h5 class="text-uppercase mb-3">About</h5>
            <ul>
              <li v-for="item in footerInfo.about" :key="item.name">
                <a :href="item.link" class="link">{{ item.name }}</a>
              </li>
            </ul>
          </div>
          <div class="col p-3 col-md-4">
            <h5 class="text-uppercase mb-3">Community
            </h5>
            <ul>
              <li v-for="item in footerInfo.community" :key="item.name">
                <a :href="item.link" class="link">{{ item.name }}</a>
              </li>
            </ul>
          </div>
          <div class="col p-3 col-md-4">
            <h5 class="text-uppercase mb-3">Legal
            </h5>
            <ul>
              <li v-for="item in footerInfo.legal" :key="item.name">
                <a :href="item.link" class="link">{{ item.name }}</a>
              </li>
            </ul>
          </div>
          <!-- /link -->
        </div>
        <!-- /left col -->
        <!-- right col -->
        <div class="d-flex flex-column col order-1">
          <div>
            <!-- newsletter e button -->
            <form>
              <div class="text-center text-lg-start">
                <h3>Newsletter</h3>
              </div>
              <div class="d-lg-flex">
                <div class="py-2 d-flex justify-content-center justify-content-lg-start  flex-grow-1">
                  <input type="email" class="form-control news-email input-focus-orange me-lg-3" id="inputEmail"
                    placeholder="Your Email Address" />
                </div>
                <div class="d-flex justify-content-center justify-content-lg-start align-items-center">
                  <button type="submit" class="btn-sm btn-orange mb-3 mb-lg-0">
                    <strong>Subscribe</strong>
                  </button>
                </div>
              </div>
            </form>
            <!-- /newsletter e button -->
          </div>
          <!-- icons -->
          <div class="mt-3 d-flex justify-content-center justify-content-lg-start">
            <ul class="d-flex gap-4">
              <li>
                <a href="#" class="link"><i class="bi bi-instagram fs-3"></i></a>
              </li>
              <li>
                <a href="#" class="link"><i class="bi bi-twitter-x fs-3"></i></a>
              </li>
              <li>
                <a href="#" class="link"><i class="bi bi-facebook fs-3"></i></a>
              </li>
              <li>
                <a href="#" class="link"><i class="bi bi-tiktok fs-3"></i></a>
              </li>
            </ul>
          </div>
          <!-- /icons -->
        </div>
        <!-- /right col -->
      </div>
      <hr />
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '../scss/helpers/variables' as *;

a {
  text-decoration: none;
  color: white;
}

a:hover {
  color: $contrast-color;
}

.email {
  background-color: $light-color;
}

button {
  background-color: $contrast-color;
  color: $light-color;
  border: 1px solid $contrast-color;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: $light-color;
  color: $contrast-color;
  border-color: $contrast-color;
}

hr {
  border: 1px solid white;
}

// email input

.news-email {
  border-radius: 5px;
  border: 1px solid $contrast-color;
  width: 100%;
  transition: border-color 0.3s;

  //media query, tablet width is 75%
  @media (max-width: 768px) {
    width: 75%;
  }
}

//footer ul titles
h5 {
  font-size: 16px
}

ul {
  list-style: none;

  li {
    font-size: 14px;
  }
}
</style>
