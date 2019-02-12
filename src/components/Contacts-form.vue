<template>
    <section class="contacts-form" id="contactUs">
        <div class="wrapper">

            <h2>Contact Us</h2>

            <div class="block">

                <form action="" class="container container--half">
                    <div class="input-field">
                        <input type="text" id="js-name">

                        <label for="js-name">Name</label>
                    </div>

                    <div class="input-field">
                        <input type="tel" id="js-phone"s>

                        <label for="js-phone">Phone</label>
                    </div>

                    <div class="input-field">
                        <input type="email" id="js-email">

                        <label for="js-email">Email</label>
                    </div>

                    <div class="input-field input-field--checkbox">
                        <label for="js-checkbox">I agree the processing of personal data</label>

                        <input type="checkbox" id="js-checkbox">
                    </div>

                    <button>Get in touch</button>
                </form>

                <div class="container container--half">
                    <p class="medium">Please tell us more about your request and give us info about your company and country</p>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
    export default {
        name: "Contact-form"
    }
</script>

<style scoped lang="sass">
@import '../assets/css/variables'

.contacts-form
    color: $white
    background-image: url('../assets/pattern.png')

p
    color: $black

</style>
