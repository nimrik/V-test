<template>
    <section class="contacts-form" id="contactUs">
        <div class="wrapper">

            <h2>Contact Us</h2>

            <div class="block">

                <form action="" class="container container--half" @submit.prevent="checkForm" novalidate>
                    <div class="input-field">
                        <input type="text" id="js-name" v-model="name.text" :class="{error : name.error}">

                        <label for="js-name">Name</label>
                    </div>
                    <p>{{errors.name}}</p>

                    <div class="input-field">
                        <input type="tel" id="js-phone" minlength="10" maxlength="10" v-model="phone.text" :class="{error : phone.error}" @keypress="isNumber">

                        <label for="js-phone">Phone</label>
                    </div>
                    <p>{{errors.phone}}</p>

                    <div class="input-field">
                        <input type="email" id="js-email" v-model="email.text" :class="{error : email.error}">

                        <label for="js-email">Email</label>
                    </div>
                    <p>{{errors.email}}</p>

                    <div class="input-field input-field--checkbox">
                        <input type="checkbox" id="js-checkbox" v-model="policy.checked" :class="{error : policy.error}">

                        <label for="js-checkbox">I agree the processing of personal data</label>
                    </div>
                    <p>{{errors.policy}}</p>

                    <button :disabled="done">
                        <span>Get in touch</span>
                        <svg class="button__svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </svg>
                    </button>
                </form>

                <div class="container container--half">
                    <p class="medium">Please tell us more about your request and give us info about your company and country</p>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
import axios from 'axios'

    export default {
        name: "Contact-form",
        data() {
            return {
                done: false,
                errors: {
                    name: '',
                    phone: '',
                    email: '',
                    policy: ''
                },
                name: {
                    text: '',
                    error: false
                },
                phone: {
                    text: '',
                    error: false
                },
                email: {
                    text: '',
                    error: false
                },
                policy: {
                    checked: false,
                    error: false
                }
            }
        },

        methods: {
            checkForm() {
                this.errors.name = '';
                this.errors.phone = '';
                this.errors.email = '';
                this.errors.policy = '';

                this.name.error = false;
                this.phone.error = false;
                this.email.error = false;
                this.policy.error = false;

                if (!this.name.text) {
                    this.name.error = true;
                    this.errors.name = "Name required.";
                }

                if (!this.phone.text) {
                    this.phone.error = true;
                    this.errors.phone = "Phone required.";
                } else if (!this.validNumber(this.phone.text) || this.phone.text.length !== 10){
                    this.phone.error = true;
                    this.errors.phone = "Invalid phone"
                }

                if (!this.email.text) {
                    this.email.error = true;
                    this.errors.email = 'Email required.';
                } else if (!this.validEmail(this.email.text)) {
                    this.name.error = true;
                    this.errors.email = 'Valid email required'
                }

                if(this.policy.checked === false) {
                    this.policy.error = true;
                    this.errors.policy = 'You should agree to our policy'
                }

                if (!this.name.error && !this.phone.error && !this.email.error && this.policy.checked) {
                    axios.post('http://httpbin.org/post', {
                        name: this.name.text,
                        phone: this.phone.text,
                        email: this.email.text,
                        policy: this.policy.checked
                    })
                    .then((res) => {
                        console.log(res)

                        this.done = true
                    })
                    .catch((err) => console.log(err))
                } else {
                    return false
                }
            },

            validEmail(email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },

            validNumber: function (number) {
                if (number.length < 10) {
                    return false
                } else {
                    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
                    return re.test(number)
                }
            },

            isNumber(evt) {
                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;

                if ((charCode > 31 && (charCode < 48 || charCode > 57 && charCode !== 46)) ) {
                    evt.preventDefault();
                } else {
                    return true
                }
            }
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
