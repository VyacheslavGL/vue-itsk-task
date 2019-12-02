<template>
    <v-container>
        <h1>Page history</h1>
        <v-layout>

            <v-row>
                <v-col>
                    <ul v-if="$store.state.history.length > 0">
                        <li v-for="(breed, index) in $store.state.history" :key="index">
                            {{breed.id}} - {{breed.name}} - {{breed.moveName}} - {{breed.date}}
                        </li>
                    </ul>
                </v-col>
            </v-row>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "History"
    }
</script>

<style scoped>

</style>