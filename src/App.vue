<template>
    <v-app>
        <v-app-bar
                app
                color="primary"
                dark
        >
            <div class="d-flex align-center">
                <v-img
                        alt="Vuetify Logo"
                        class="shrink mr-2"
                        contain
                        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                        transition="scale-transition"
                        width="40"
                />


            </div>
            <h1>ИТСК</h1>

            <v-spacer></v-spacer>

            <v-btn to="/" text>
                <v-icon>mdi-home</v-icon>
                <span class="ml-2">Главная</span>
            </v-btn>
            <v-btn to="/history" text>
                <v-icon>mdi-history</v-icon>
                <span class="ml-2">История</span>
            </v-btn>
        </v-app-bar>

        <v-content>
            <router-view/>
        </v-content>
    </v-app>
</template>

<script>

    import {LOAD_BREEDS} from "./store/action.types";

    export default {
        name: 'App',
        async created() {
            await this.$store.dispatch(LOAD_BREEDS);
        }
    };
</script>
