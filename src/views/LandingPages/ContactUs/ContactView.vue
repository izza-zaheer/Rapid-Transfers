<script setup>
import { onMounted, ref } from "vue";

//example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../LandingPages/Author/Sections/AuthorFooter.vue";

//image
import image from "@/assets/img/dg2.jpg";

//material components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";
import MaterialButton from "@/components/MaterialButton.vue";
// Import SweetAlert
import Swal from "sweetalert2";
// material-input
import setMaterialInput from "@/assets/js/material-input";
import router from "../../../router/index";
// import axios from "axios";
import emailjs from "emailjs-com";
onMounted(() => {
  setMaterialInput();
});
const fullName = ref("");
const email = ref("");
const pickUpLocation = ref("");
const dropOffLocation = ref("");
const date = ref("");
const time = ref("");
const message = ref("");
const mobileNo = ref("");
const mobileError = ref("");
const currentDate = new Date().toISOString().split("T")[0];

// Define a method
const saveFullName = async (val) => {
  console.log(val);
  fullName.value = val;
};
const saveEmail = async (val) => {
  console.log(val);
  email.value = val;
};
const savepickUpLocation = async (val) => {
  console.log(val);
  pickUpLocation.value = val;
};
const savedropOffLocation = async (val) => {
  console.log(val);
  dropOffLocation.value = val;
};
const saveDate = async (val) => {
  console.log(val);
  date.value = val;
};
const saveTime = async (val) => {
  console.log(val);
  time.value = val;
};
const saveMobileNo = async (val) => {
  mobileNo.value = val;
  // Regular expression for Spanish mobile number format (e.g., +34 123 456 789)
  const mobileRegex = /^\+34\d{9}$|^0034\d{9}$|^34\d{9}$/;

  if (!mobileNo.value.toString().match(mobileRegex)) {
    mobileError.value = true;
  } else {
    mobileError.value = false;
  }
  console.log("mob error", mobileError.value);
};
const saveMsg = async (val) => {
  console.log(val);
  message.value = val;
};
async function sendEmail(name, message) {
  // Initialize EmailJS with your user ID (replace with your own User ID)
  emailjs.init("jehV4c0qXzafp0C-y");
  // Function to send the email
  const templateParams = {
    user_name: name,
    customer_name: fullName.value,
    user_email: email.value,
    message: message,
  };

  // Send email using EmailJS
  emailjs
    .send("service_ww2zwnc", "template_4eogps9", templateParams) // Replace with your Service ID and Template ID
    .then(
      (response) => {
        console.log("Email sent successfully:", response);
        return true;
      },
      (error) => {
        console.error("Error sending email:", error);
        return false;
      }
    );
}
const onConfirm = () => {
  if (mobileError.value) {
    Swal.fire({
      title: "Error!",
      text: "Please Enter a valid Mobile Number.",
      icon: "error",
      confirmButtonColor: "#43a047",
    });
  } else {
    return;
    if (
      sendEmail(
        "Rapid Transfers",
        "\n \n Details are below.\n \n Name: \t " +
          fullName.value +
          "\nEmail Address : " +
          email.value +
          "\nPick Up Location : " +
          pickUpLocation.value +
          "\nDrop Off Location : " +
          dropOffLocation.value +
          "\nDate : " +
          date.value +
          "\nTime : " +
          time.value +
          "\nMobile No : " +
          mobileNo.value +
          "\nSpecial Instructions : " +
          message.value
      )
    ) {
      Swal.fire({
        title: "Confirmed!",
        text: "We've received your application. For Confirmation we will call you within few Hours. \n For Urgency Please contact on this No: +34 678 67 6 76",
        icon: "success",
        confirmButtonColor: "#43a047",
        preConfirm: () => {
          router.push("/");
        },
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Unable to Book your ride. \n For Urgency Please contact on this No: +34 678 67 6 76",
        icon: "failure",
        confirmButtonColor: "#43a047",
        preConfirm: () => {
          router.push("/");
        },
      });
    }
  }
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
                <p class="pb-3">Enter your proper detail.</p>
                <form
                  id="contact-form"
                  autocomplete="off"
                  method="post"
                  @submit.prevent="onConfirm"
                >
                  <div class="card-body p-0 my-3">
                    <div class="row">
                      <div class="col-md-6">
                        <MaterialInput
                          class="input-group-static mb-4"
                          type="text"
                          label="Full Name"
                          :isRequired="true"
                          @blur="saveFullName"
                          placeholder="Full Name"
                        />
                      </div>
                      <div class="col-md-6 ps-md-2">
                        <MaterialInput
                          class="input-group-static mb-4"
                          type="email"
                          label="Email"
                          :isRequired="true"
                          @blur="saveEmail"
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
                          :isRequired="true"
                          @blur="savepickUpLocation"
                          placeholder="From"
                        />
                      </div>
                      <div class="col-md-6 ps-md-2">
                        <MaterialInput
                          class="input-group-static mb-4"
                          type="text"
                          label="Dropoff Location"
                          placeholder="To"
                          :isRequired="true"
                          @blur="savedropOffLocation"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <MaterialInput
                          class="input-group-static mb-4"
                          type="number"
                          label="Passengers"
                          :isRequired="true"
                          :Max="7"
                          :Min="1"
                          @blur="savepickUpLocation"
                          placeholder="0"
                        />
                      </div>
                      <div class="col-md-6 ps-md-2">
                        <MaterialInput
                          class="input-group-static mb-4"
                          type="number"
                          label="Luggage Pieces"
                          placeholder=""
                          @blur="savedropOffLocation"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <MaterialInput
                          class="input-group-static mb-4"
                          type="date"
                          label="Date"
                          :isRequired="true"
                          :Min="currentDate"
                          @blur="saveDate"
                          placeholder="11/11/2024"
                        />
                      </div>
                      <div class="col-md-6 ps-md-2">
                        <MaterialInput
                          class="input-group-static mb-4"
                          type="time"
                          label="Time"
                          placeholder="12PM"
                          :isRequired="true"
                          @blur="saveTime"
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
                          @blur="saveMobileNo"
                          :isRequired="true"
                        />
                      </div>
                    </div>

                    <div class="form-group mb-0 mt-md-0 mt-4">
                      <MaterialTextArea
                        id="message"
                        class="input-group-static mb-4"
                        :rows="6"
                        placeholder="Describe your Requirements in at least 250 characters"
                        @blur="saveMsg"
                        >Special Instructions.
                      </MaterialTextArea>
                    </div>
                    <div class="row">
                      <div class="col-md-12 text-center">
                        <MaterialButton
                          variant="gradient"
                          color="success"
                          type="submit"
                          class="mt-3 mb-0"
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
  background-color: #177948 !important;
  /* Change this to your desired background color */
  color: #ffffff;
  /* Change this to your desired text color */
  border-radius: 5px;
  /* Optional: Add border-radius for rounded corners */
  /* Add any other styles you want to customize */
}
</style>
