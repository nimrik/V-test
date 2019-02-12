<template>
    <section class="contacts-form" id="contactUs">
        <div class="wrapper">

            <h2>Contact Us</h2>

            <div class="block">

                <form action="" class="container container--half" @submit.prevent="checkForm">
                    <div class="input-field">
                        <input type="text" id="js-name" v-model="name">

                        <label for="js-name">Name</label>
                    </div>

                    <div class="input-field">
                        <input type="tel" id="js-phone" v-model="phone">

                        <label for="js-phone">Phone</label>
                    </div>

                    <div class="input-field">
                        <input type="email" id="js-email" v-model="email">

                        <label for="js-email">Email</label>
                    </div>

                    <div class="input-field input-field--checkbox">
                        <label for="js-checkbox">I agree the processing of personal data</label>

                        <input type="checkbox" id="js-checkbox" v-model="policy">
                    </div>

                    <button>Get in touch</button>

                    <p>{{errors}}</p>
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
        name: "Contact-form",
        data() {
            return {
                errors: [],
                name: '',
                phone: '',
                email: '',
                policy: false
            }
        },

        methods: {
            checkForm() {
                this.errors = []

                if (!this.name) {
                    this.errors.push("Name required.");
                }

                if (!this.phone) {
                    this.errors.push("Phone required.");
                }

                if (!this.email) {
                    this.errors.push('Email required.');
                } else if (!this.validEmail(this.email)) {
                    this.errors.push('Valid email required')
                }

                if(this.policy == false) this.errors.push('You should agree to our policy')

                if (!this.errors.length) return true
            },

            validEmail(email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }
        },

        computed: {

        }
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
