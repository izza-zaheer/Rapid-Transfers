<script setup>
import RotatingCard from "../../../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../examples/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue";
</script>
<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
          <RotatingCard>
            <RotatingCardFront
              image="https://images.unsplash.com/photo-1569683795645-b62e50fbf103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              icon="touch_app"
              title="Rapid <br /> Transfers"
              description="We are here to serve you 24/7. Feel free to Book your ride anytime."
            />

            <RotatingCardBack
              image="https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80"
              title="Know about Us."
              description="Rapid Transfer is your ideal choice for long-distance travel and our 24/7 travel agents are always available to make your trip hassle-free. Do you want to book in advance? No problem, we've got your back! Trust us, you won't want to take a trip without us"
              :action="[
                {
                  route: './/sections/page-sections/hero-sections.html',
                  label: 'Start with Us.',
                },
              ]"
            />
          </RotatingCard>
        </div>
        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
            <DefaultInfoCard
              icon="content_copy"
              title="A long trip? no problem!"
              description="Our expertise lies in long-distance travel, and we love it! Are you planning a trip across the country? You can trust us! Do you need transportation to the airport? We've got you covered too!"
            />
            <DefaultInfoCard
              icon="flip_to_front"
              title="Book it in advance, change it later"
              description="You are in control of your trip! Book it now or schedule it for later, make changes until the last minute. Just contact us via chat anytime, 24/7, and our travel agents will take care of your requests!"
            />
          </div>
          <div class="row justify-content-start mt-5">
            <DefaultInfoCard
              class="mt-3"
              icon="price_change"
              title="We are here for you 24/7, no matter what."
              description="Our travel agents are available via chat throughout the day and will quickly come to your aid before and after your trip, in less than a minute!"
            />
            <!-- <DefaultInfoCard
              class="mt-3"
              icon="devices"
              title="Fully Responsive"
              description="Regardless of the screen size, the website content will
                  naturally fit the given resolution."
            /> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
