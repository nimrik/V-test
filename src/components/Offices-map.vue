<template>
    <section class="offices-map" :class="{active : slide}">
        <div class=" wrapper">
            <div class="container">
                <h2>Our Offices</h2>

                <!--Vue tabs control-->
                <ul class="tabs">
                    <li @click="setPlace(50.4501, 30.5234, 'kyiv')"
                        :class="{active: current === 'kyiv'}">Kyiv</li>

                    <li @click="setPlace(40.6976637,-74.1197637, 'york')"
                        :class="{active: current === 'york'}">New York</li>

                    <li @click="setPlace(23.1291, 113.2644, 'guangzhou')"
                        :class="{active: current === 'guangzhou'}">Guangzhou</li>

                    <li @click="setPlace(41.3851, 2.1734, 'barcelona')"
                        :class="{active: current === 'barcelona'}">Barcelona</li>
                </ul>

                <!--Vue tabs-->

                <div class="container container--media" v-if="current === 'kyiv'">
                    <h3>Global Message Services Ukraine LLC</h3>

                    <p>Kyiv, Stepan Bandera</p>
                    <p>02066</p>
                    <p>Ukraine</p>
                </div>

                <div class="container container--media" v-if="current === 'york'">
                    <h3>Global Message Services New York LLC</h3>

                    <p>New York, Somewhere There</p>
                    <p>228322</p>
                    <p>New York</p>
                </div>

                <div class="container container--media" v-if="current === 'guangzhou'">
                    <h3>Global Message Services Guangzhou LLC</h3>

                    <p>Guangzhou, Here</p>
                    <p>99112</p>
                    <p>Guangzhou</p>
                </div>

                <div class="container container--media" v-if="current === 'barcelona'">
                    <h3>Global Message Services Barcelona LLC</h3>

                    <p>Barcelona, Mamma mia</p>
                    <p>13312</p>
                    <p>Barcelona</p>
                </div>

            </div>
        </div>



        <div class="container container--half container--map ">
            <!--Google Maps-->
                <gmap-map
                        class="google-map"
                        :center="center"
                        :zoom="9"
                        style="width:100%;  height: 100%;"
                        :options="mapStyle"
                >
                    <gmap-marker
                            :key="index"
                            v-for="(m, index) in markers"
                            :position="m.position"
                            @click="center=m.position"
                    ></gmap-marker>
                </gmap-map>

            </div>

    </section>
</template>

<script>

    export default {
        name: "Offices-map",
        data() {
            return {
                slide: false,
                code: 'AIzaSyByhzU1ebU-hXEzaG0Zl8kJYkSa1rtAYbk',
                center: { lat: 50.4501, lng: 30.5234 },
                markers: [{
                    position: {
                        lat: 50.4501,
                        lng: 30.5234
                    }
                }],
                places: [],
                current: 'kyiv',
                lat: 50.4501,
                lng: 30.5234,
                mapStyle: {
                    styles: [
                        {
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#212121"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "color": "#212121"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.country",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#9e9e9e"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.land_parcel",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.locality",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#bdbdbd"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#181818"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#616161"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "color": "#1b1b1b"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#2c2c2c"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#8a8a8a"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#373737"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#3c3c3c"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway.controlled_access",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#4e4e4e"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#616161"
                                }
                            ]
                        },
                        {
                            "featureType": "transit",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#000000"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#3d3d3d"
                                }
                            ]
                        }
                    ]
                }
            }
        },

        methods: {
            setPlace(lat, lng, current) {
                this.center.lat = lat;
                this.center.lng = lng;

                const marker = {
                    lat: lat,
                    lng: lng
                };

                this.current = current;
                this.markers = [{position: marker}];
                this.center = marker;

                this.slide = true;
                const _self = this;

                setTimeout(function() {
                    _self.slide = false
                }, 2000)
            }
        }
    }
</script>

<style scoped lang="sass">
@import '../assets/css/variables'

.offices-map
    color: $white
    background-image: url('../assets/offices-map-bg.png')

    &::after
        content: ''
        position: absolute
        z-index: 1
        top: 0
        right: -100%
        width: 100%
        height: 100%
        background-color: $primary

    &.active::after
        animation: slide 2s ease forwards


@keyframes slide
    0%
        right: -100%

    3%,50%
        right: 0

    100%
        right: 100%

.container--map
    position: absolute
    z-index: 1
    top: 0
    right: 0
    width: 50%
    height: 100%
    background: white

    img
        width: 100%
        height: 100%
        object-fit: cover

.tabs
    display: flex
    margin: 1.25em 0

@media only screen and (max-width: 768px)
    body
        .container--map
            z-index: initial
            width: 100%
            height: 350px
            right: initial
            top: initial
            position: relative
            margin-bottom: 0

        .container--media
            width: 50%

@media only screen and (max-width: 425px)
    .tabs
        flex-wrap: wrap
</style>
