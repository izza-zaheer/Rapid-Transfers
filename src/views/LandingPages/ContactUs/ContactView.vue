<script setup>
import { onMounted } from "vue";

//example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../LandingPages/Author/Sections/AuthorFooter.vue";

//image
import image from "@/assets/img/examples/blog2.jpg";

//material components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";
import MaterialButton from "@/components/MaterialButton.vue";
// Import SweetAlert
import Swal from 'sweetalert2';
// material-input
import setMaterialInput from "@/assets/js/material-input";
import  router  from "../../../router/index";
onMounted(() => {
  setMaterialInput();
});
// Define a method
const onConfirm = () => {
  console.log("hi");
  Swal.fire({
    title: 'Confirmed!',
    text: "We've received your application. For Confirmation we will call you within few Hours. \n For Urgency Please contact on this No: +34 678 67 6 76",
    icon: 'success',
    confirmButtonColor: '#43a047',
    preConfirm: () => {
      router.push("/")
}
   
  });
};
</script>
<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <DefaultNavbar
          :sticky="true"
          :action="{
            route: '/pages/landing-pages/contact-us',
            color: 'bg-gradient-success',
            label: 'Book a Ride',
          }"
        />
      </div>
    </div>
  </div>
  <section>
    <div class="page-header min-vh-100">
      <div class="container">
        <div class="row">
          <div
            class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column"
          >
            <div
              class="position-relative h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center"
              :style="{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
              }"
              loading="lazy"
            ></div>
          </div>
          <div
            class="mt-8 col-xl-5 col-lg-6 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5"
          >
            <div
              class="card d-flex blur justify-content-center shadow-lg my-sm-0 my-sm-6 mt-8 mb-5"
            >
              <div
                class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent"
              >
                <div
                  class="bg-gradient-success shadow-success border-radius-lg p-3"
                >
                  <h3 class="text-white text-success mb-0">Book Your Ride</h3>
                </div>
              </div>
              <div class="card-body">
                <p class="pb-3">
                  Enter your proper detail.
                </p>
                <form id="contact-form" method="post" autocomplete="off">
                  <div class="card-body p-0 my-3">
                    <div class="row">
                      <div class="col-md-6">
                        <MaterialInput
                          class="input-group-static mb-4"
                          type="text"
                          label="Full Name"
                          placeholder="Full Name"
                        />
                      </div>
                      <div class="col-md-6 ps-md-2">
                        <MaterialInput
                          class="input-group-static mb-4"
                          type="email"
                          label="Email"
                          placeholder="abc@gmail.com"
                        />
                      </div>
                    </div>
                    <div class="row">
                    <div class="col-md-6">
                        <MaterialInput
                          class="input-group-static mb-4"
                          type="text"
                          label="Pick up Location"
                          placeholder="From"
                        />
                      </div>
                      <div class="col-md-6 ps-md-2">
                        <MaterialInput
                          class="input-group-static mb-4"
                          type="text"
                          label="Dropoff Location"
                          placeholder="To"
                        />
                      </div>
                    </div>
                    <div class="row">
                    <div class="col-md-6">
                        <MaterialInput
                          class="input-group-static mb-4"
                          type="date"
                          label="Date"
                          placeholder="11/11/2024"
                        />
                      </div>
                      <div class="col-md-6 ps-md-2">
                        <MaterialInput
                          class="input-group-static mb-4"
                          type="text"
                          label="Time"
                          placeholder="12PM"
                        />
                      </div>
                    </div>
                    <div class="row">
                    <div class="col-md-6">
                        <MaterialInput
                          class="input-group-static mb-4"
                          type="number"
                          label="Mobile Number"
                          placeholder="+34 123 456 789"
                        />
                      </div>
                    </div>
                    
                    <div class="form-group mb-0 mt-md-0 mt-4">
                      <MaterialTextArea
                        id="message"
                        class="input-group-static mb-4"
                        :rows="6"
                        placeholder="Describe your Requirements in at least 250 characters"
                        >Special Instructions.</MaterialTextArea
                      >
                    </div>
                    <div class="row">
                      <div class="col-md-12 text-center">
                        <MaterialButton
                          variant="gradient"
                          color="success"
                          type="button"
                          class="mt-3 mb-0"
                          @click="onConfirm"
                          >Confirm</MaterialButton
                        >
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <DefaultFooter />
</template>
<style scoped>
.swal-confirm-button {
  background-color: #177948 !important; /* Change this to your desired background color */
  color: #ffffff; /* Change this to your desired text color */
  border-radius: 5px; /* Optional: Add border-radius for rounded corners */
  /* Add any other styles you want to customize */
}
</style>
