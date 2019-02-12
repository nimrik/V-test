<template>
  <div id="app">
    <ContactsInfo></ContactsInfo>
    <OfficesMap></OfficesMap>
    <ContactsForm></ContactsForm>
  </div>
</template>

<script>
import ContactsInfo from './components/Contacts-info'
import ContactsForm from './components/Contacts-form'
import OfficesMap from './components/Offices-map'


export default {
  name: 'app',
  components: {
      ContactsInfo,
      OfficesMap,
      ContactsForm
  }
}

</script>

<style lang="sass">
@import './assets/css/variables'


//===============================================
                     BASE
//===============================================

#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

*
  margin: 0
  padding: 0
  box-sizing: border-box

html
  scroll-behavior: smooth

  body
    width: 100%
    height: 100%

    color: $primary
    overflow-x: hidden
    font: normal 20px 'SuisseIntl', Helvetica, Arial, sans-serif
    font-weight: 300

//=============================================
                      FONTS
//=============================================



@font-face
  font-family: 'SuisseIntl'
  src: url("./assets/fonts/SuisseIntl.woff")
  src: local("☺"), url("./assets/fonts/SuisseIntl.woff") format("woff"), url("./assets/fonts/SuisseIntl.woff2") format("woff2")
  font-weight: 400
  font-style: normal

@font-face
  font-family: 'SuisseIntl'
  src: url("./assets/fonts/SuisseIntl-Light.woff")
  src: local("☺"), url("./assets/fonts/SuisseIntl-Light.woff") format("woff"), url("./assets/fonts/SuisseIntl-Light.woff2") format("woff2")
  font-weight: 300
  font-style: normal

@font-face
  font-family: 'SuisseIntl'
  src: url("./assets/fonts/SuisseIntl-SemiBold.woff")
  src: local("☺"), url("./assets/fonts/SuisseIntl-SemiBold.woff") format("woff"), url("./assets/fonts/SuisseIntl-SemiBold.woff2") format("woff2")
  font-weight: 700
  font-style: normal


//=============================================
                  TYPOGRAPHY
//=============================================

a
  color: $accent
  font-weight: 700
  font-size: .55em
  text-transform: uppercase
  text-decoration: none

h1, h2, h3, h4, h5, h6v
  font-weight: 100

h1
  font-size: 2.125em
  line-height: 2em

h2, .h2-title
  font-size: 1.438em
  line-height: 2em

h3, .h3-title
  font-size: 1.063em
  font-weight: 300
  line-height: 1.5em

h4, .h4-title
  font-size: 1.05em

.h4-title--link
  color: $accent

h6, .h6-title
  font-size: .625em
  font-weight: 700

span
  color: $accent
p
  font-size: .625em
  line-height: 1.2rem

.medium
  font-size: 0.750em

ul

  li
    font-size: 0.438em
    font-weight: 700
    text-transform: uppercase
    letter-spacing: 1.4px
    list-style: none
    cursor: pointer
    line-height: 3em
    margin-right: 20px

    &.active
      color: $accent



//===============================================
                    LAYOUT
//===============================================

section
  position: relative

.wrapper
  max-width: 1200px
  margin: 0 auto
  padding: 60px

.block
  display: flex
  justify-content: space-between

.container
  display: flex
  justify-content: space-between
  flex-flow: wrap column

.container--half
  width: 50%

.container--row
  flex-direction: row

//=============================================
                COMMON STYLES
//=============================================



//===========================================
                  FORM
//===========================================
form
  display: flex
  flex-flow: wrap column
  justify-content: space-between
  margin: 16px 0
  margin-right: 70px

  label
    top: calc(50% - 1em + 3px)
    left: 0
    position: absolute

    font-size: 0.750em
    color: #000

  .input-field
    display: flex
    flex-direction: column

    position: relative


  .input-field--checkbox
    padding: 20px
    padding-left: 0
    justify-content: center
    line-height: 25px

    label
      cursor: pointer
      padding-left: 20px

  input[type="text"],
  textarea,
  input[type="tel"],
  input[type="email"]
    width: 100%
    height: 100%
    padding: 1.25rem
    padding-left: 6em
    margin-bottom: .313em

    outline: none
    color: $black
    font-size: .750rem
    background-color: transparent
    border: none
    border-bottom: 1px solid $black

    position: relative

    &:focus
      color: $white
      border-bottom: 1px solid $white

    &:focus + label
      color: $white

  textarea

  select

  input[type="checkbox"], input[type="radio"]

button
  width: fit-content
  padding: 2.188rem 6.250rem

  cursor: pointer
  font-size: .438em
  letter-spacing: 1.4px
  text-align: center
  border: none
  text-transform: uppercase
  outline: none
  color: $white
  background-color: $primary


</style>
