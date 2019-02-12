<template>
  <section class="contacts">

    <div class="wrapper">
      <h1>Contacts</h1>

      <div class="block">
        <div class="container container--half">
          <h2>
            <span>GMS</span> Headquarters
          </h2>

          <div class="container container--row">
            <div class="container container--half">
              <p>Global Message Services Ukraine LLC<br>
                Bundesstrasse 5 | 3rd Floor<br>
                6300 Zug<br>
                Switzerland</p>

              <a href="tel:+41 41 544 62 00" class="h3-title">+41 41 544 62 00</a>
            </div>

            <div class="container container--half">
              <p>Email</p>
              <a href="mailto:info@gms-worldwide.com">info@gms-worldwide.com</a>

              <p>Send message</p>
              <a href="javascript:void(0)">Viber</a>

              <p>Send form</p>
              <a href="#contactUs">Contact us</a>
            </div>
          </div>
        </div>

        <div class="container container--half container--init">
          <h2>
            Technical support <span>24/7</span>
          </h2>

          <p>GMS understands that it can be hard to follow all new technologies. We regularly provide for all our clients educational trainings to make your operator`s business earn more and better though our best practices.</p>

          <a href="tel:+41 41 544 62 06" class="h3-title">+41 41 544 62 06</a>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>


<style scoped lang="sass">

.container--init
  justify-content: initial

  a
    margin-top: 1em


</style>
