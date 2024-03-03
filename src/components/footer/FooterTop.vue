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
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          <div class="col-4">
            <h4 class="text-uppercase mb-3">Community</h4>
            <ul>
              <li><a href="#">Events</a></li>
              <li><a href="#">Forums</a></li>
              <li><a href="#">Guides</a></li>
            </ul>
          </div>
          <div class="col-4">
            <h4 class="text-uppercase mb-3">Legal</h4>
            <ul>
              <li><a href="#">Terme of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Accessibility</a></li>
            </ul>
          </div>
          <!-- /link -->
        </div>
        <!-- /col di sinistra -->

        <!-- col di destra -->
        <div class="col-6">
          <div class="d-flex align-items-center">
            <!-- newsletter e button -->
            <form class="d-flex justify-content-center gap-3">
              <div>
                <label for="exampleFormControlInput1" class="form-label"
                  >Newsletter</label
                >
                <input
                  type="email"
                  class="form-control bg-warning"
                  id="exampleFormControlInput1"
                  placeholder="email address"
                />
              </div>
              <div class="mt-4">
                <button type="submit" class="btn text-uppercase mt-2">
                  subscribe
                </button>
              </div>
            </form>
            <!-- /newsletter e button -->
          </div>
          <!-- icons -->
          <div class="mt-3">
            <ul class="d-flex gap-3">
              <li><a href="#">icons</a></li>
              <li><a href="#">icons</a></li>
              <li><a href="#">icons</a></li>
              <li><a href="#">icons</a></li>
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

button {
  background-color: $contrast-color;
}

hr {
  border: 1px solid white;
}
</style>
