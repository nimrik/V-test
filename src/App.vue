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
  height: 100vh
  display: flex
  flex-direction: column
  justify-content: stretch
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
  flex: 1 1 33.33%
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

  position: relative

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
    top: calc(50% - 1em + 2px)
    left: 0
    position: absolute

    font-size: 0.750em
    color: #000

    transition: all 300ms ease

  .input-field
    display: flex
    flex-direction: column

    position: relative


  .input-field--checkbox
    padding: 20px
    padding-left: 0
    margin-bottom: -10px
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
    background-color: transparent !important
    border: none
    border-bottom: 1px solid $black

    position: relative

    transition: all 300ms ease

    &:focus
      color: $white
      border-bottom: 1px solid $white

    &:focus + label
      color: $white

    &.error
      color: maroon
      border-bottom: 3px solid maroon

      & + label
        color: maroon

  input[type="checkbox"]:focus + label,
  input[type="radio"]:focus + label
    color: white

  input[type="checkbox"],
  input[type="radio"]
    &.error
      color: maroon
      border-bottom: 3px solid maroon

      & + label
        color: maroon


  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus
    background-color: transparent !important
    -webkit-text-fill-color: green
    -webkit-box-shadow: 0 0 0px 1000px #000 inset
    transition: background-color 5000s ease-in-out 0s

  textarea

  select


button
  width: fit-content
  padding: 2.188rem 6.250rem
  position: relative

  cursor: pointer
  font-size: .438em
  letter-spacing: 1.4px
  text-align: center
  border: none
  text-transform: uppercase
  outline: none
  overflow: hidden
  background-color: $primary

  transition: all 330ms ease

  span
    color: $white

  &:hover
    color: $primary
    background: white

    .button__svg
      top: 50%

  &:disabled
    opacity: .6

  &:disabled:hover
    background: $primary
    .button__svg
      top: -100%

  .button__svg
    position: absolute
    top: -100%
    left: 50%
    display: block

    transform: translate(-50%, -50%)
    transition: all 330ms ease




//===========================================
                    MEDIA
//===========================================

@media only screen and (max-width: 1024px)
  body
    .block
      flex-wrap: wrap
    .container
      width: 100%
      flex-direction: row
      margin-bottom: 1em

  form
    margin: 0
    .input-field
      width: 100%

@media only screen and (max-width: 425px)
  body
    .container
      flex-direction: column

</style>
