<script setup></script>
<template>
  <footer class="footer py-5">
    <div class="container z-index-1 position-relative">
      <div class="row">
        <div class="col-lg-4 me-auto mb-lg-0 mb-4 text-lg-start text-center">
          <!-- <h6 class="text-dark font-weight-bolder text-uppercase mb-lg-4 mb-3">
            Material Design
          </h6>-->
          <ul
            class="nav flex-row ms-n3 justify-content-lg-start justify-content-center mb-4 mt-sm-0"
          >
            <li class="nav-item">
              <!-- <a class="nav-link text-dark opacity-8" href target="_blank">Home</a> -->
              <RouterLink :to="{ name: 'presentation' }" class="nav-link text-dark opacity-8">
                <span>Home</span>
              </RouterLink>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link text-dark opacity-8" href target="_blank">About</a> -->
              <RouterLink :to="{ name: 'page-headers' }" class="nav-link text-dark opacity-8">
                <span>About Us</span>
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink :to="{ name: 'author' }" class="nav-link text-dark opacity-8">
                <span>Help Center</span>
              </RouterLink>
              <!-- <a class="nav-link text-dark opacity-8" href target="_blank">Help Center</a> -->
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link text-dark opacity-8" href target="_blank"> -->
              <RouterLink :to="{ name: 'contactus' }" class="nav-link text-dark opacity-8">
                <span>Services</span>
              </RouterLink>
            </li>
          </ul>
          <p class="text-sm text-dark opacity-8 mb-0">
            Copyright © {{ new Date().getFullYear() }} Design by
            Izza Zaheer
          </p>
        </div>
        <div class="col-lg-6 ms-auto text-lg-end text-center">
          <p
            class="mb-5 text-lg text-dark font-weight-bold"
          >Travel with Rapid Transfers to get better experience.</p>
          <a href="javascript:;" target="_blank" class="text-dark me-xl-4 me-4 opacity-5">
            <span class="fab fa-dribbble"></span>
          </a>
          <a href="javascript:;" target="_blank" class="text-dark me-xl-4 me-4 opacity-5">
            <span class="fab fa-twitter"></span>
          </a>
          <a href="javascript:;" target="_blank" class="text-dark me-xl-4 me-4 opacity-5">
            <span class="fab fa-pinterest"></span>
          </a>
          <a href="javascript:;" target="_blank" class="text-dark opacity-5">
            <span class="fab fa-github"></span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
