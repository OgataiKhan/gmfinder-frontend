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
          { name: 'Terme of Service', link: '#' },
          { name: 'Privacy Policy', link: '#' },
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
      <div class="row align-items-center d-flex flex-column">
        <!-- left col -->
        <div class="col col-md-6 d-flex flex-column align-items-center order-2 d-none d-md-block">
          <!-- link -->
          <div class="col p-3">
            <h4 class="text-uppercase mb-3">About</h4>
            <ul class="text-center">
              <li v-for="item in footerInfo.about" :key="item.name">
                <a :href="item.link" class="link">{{ item.name }}</a>
              </li>
            </ul>
          </div>
          <div class="col p-3">
            <h4 class="text-uppercase mb-3">Community
            </h4>
            <ul class="text-center">
              <li v-for="item in footerInfo.community" :key="item.name">
                <a :href="item.link" class="link">{{ item.name }}</a>
              </li>
            </ul>
          </div>
          <div class="col p-3">
            <h4 class="text-uppercase mb-3 text-center">Legal
            </h4>
            <ul class="text-center">
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
              <div class="d-flex flex-column">
                <div class="text-center">
                  <h3>Newsletter</h3>
                </div>
                <div class="py-2 d-flex justify-content-center">
                  <input type="email" class="form-control w-75" id="inputEmail" placeholder="Your Email Address" />
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-orange mb-3">
                  <strong>Subscribe</strong>
                </button>
              </div>
            </form>
            <!-- /newsletter e button -->
          </div>
          <!-- icons -->
          <div class="mt-3 d-flex justify-content-center">
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

@media (min-width: 768px) {
  .collapse {
    display: block !important;
  }
}
</style>
