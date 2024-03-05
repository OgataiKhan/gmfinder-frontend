<script>
export default {
  name: 'FooterTop',
};
</script>

<template>
  <footer>
    <div class="container">
      <div class="row align-items-center">
        <!-- col di sinistra -->
        <div class="col-6 d-flex">
          <!-- link -->
          <div class="col-4">
            <h4 class="text-uppercase mb-3">About</h4>
            <ul>
              <li><a href="#" class="link">About Us</a></li>
              <li><a href="#" class="link">Contact Us</a></li>
              <li><a href="#" class="link">FAQs</a></li>
            </ul>
          </div>
          <div class="col-4">
            <h4 class="text-uppercase mb-3">Community</h4>
            <ul>
              <li><a href="#" class="link">Events</a></li>
              <li><a href="#" class="link">Forums</a></li>
              <li><a href="#" class="link">Guides</a></li>
            </ul>
          </div>
          <div class="col-4">
            <h4 class="text-uppercase mb-3">Legal</h4>
            <ul>
              <li><a href="#" class="link">Terme of Service</a></li>
              <li><a href="#" class="link">Privacy Policy</a></li>
              <li><a href="#" class="link">Accessibility</a></li>
            </ul>
          </div>
          <!-- /link -->
        </div>
        <!-- /col di sinistra -->

        <!-- col di destra -->
        <div class="col-6 ps-5">
          <div class="d-flex align-items-center justify-content-end">
            <!-- newsletter e button -->
            <form class="row g-3">
              <div class="col-auto">
                <h3>Newsletter</h3>
              </div>
              <div class="col-auto">
                <label for="inputEmail" class="visually-hidden">Password</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail"
                  placeholder="Your Email Address"
                />
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-orange mb-3">
                  Subscribe
                </button>
              </div>
            </form>
            <!-- /newsletter e button -->
          </div>
          <!-- icons -->
          <div class="mt-3">
            <ul class="d-flex gap-3 justify-content-end">
              <li><a href="#" class="link">icons</a></li>
              <li><a href="#" class="link">icons</a></li>
              <li><a href="#" class="link">icons</a></li>
              <li><a href="#" class="link">icons</a></li>
            </ul>
          </div>
          <!-- /icons -->
        </div>
        <!-- /col di destra -->
      </div>
      <hr />
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '../../scss/helpers/variables' as *;
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
  color: var(--light-color);
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
</style>
