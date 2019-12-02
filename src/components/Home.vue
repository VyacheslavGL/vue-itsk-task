<template>
    <v-container>
        <v-layout>
            <v-row>
                <v-col>
                    <h2>Cписок пород собак</h2>
                    <v-text-field
                            v-model="searchBreed"
                            solo
                            prepend-inner-icon="mdi-magnify"
                            label="Поиск"
                            class="my-3"
                    ></v-text-field>
                    <h2 v-if="error">{{error}}</h2>
                    <ul>
                        <li v-for="breed in searchName" :key="breed.id" class="my-3 py-2">
                            {{ breed.id }} - {{breed.name}}
                            <v-btn fab small class="mt-n2 float-right" color="green" @click="addBreedSelected(breed)">
                                <v-icon>mdi-plus</v-icon>
                            </v-btn>
                            <ul v-if="breed.items.length > 0">
                                <li v-for="item in breed.items" :key="item.id" class="my-3 py-2">
                                    {{item.id}} - {{ item.name }}
                                </li>
                            </ul>
                        </li>
                    </ul>

                </v-col>
                <v-divider vertical/>
                <v-col>
                    <h2>Выбранные</h2>
                    <ul class="mt-12 pt-8">
                        <li v-for="breed in $store.state.selected" :key="breed.id" class="my-3 py-2">
                            {{breed.id}} {{ breed.name }}
                            <v-btn fab small class="mt-n2 float-right" color="red" @click="delBreedSelected(breed)">
                                <v-icon>mdi-minus</v-icon>
                            </v-btn>
                            <ul v-if="breed.items.length > 0">
                                <li v-for="item in breed.items" :key="item.id" class="my-3 py-2">
                                    {{item.id}} - {{ item.name }}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </v-col>
            </v-row>
        </v-layout>
    </v-container>
</template>

<script>

    import {ADD_SELECTED, REMOVE_SELECTED} from "../store/action.types";

    export default {
        name: "Home",
        data() {
            return {
                searchBreed: null,
            }
        },
        methods: {
            addBreedSelected(breed) {
                this.$store.dispatch(ADD_SELECTED, breed)
            },
            delBreedSelected(breed) {
                this.$store.dispatch(REMOVE_SELECTED, breed);
            },

        },
        computed: {
            searchName() {
                let breeds = this.$store.state.breeds;
                let search = this.searchBreed;
                if (this.searchBreed) {
                    breeds = breeds.filter(item => {
                        if (item.name.toLowerCase().indexOf(search.toLowerCase()) >= 0) {
                            // если нашли соответствие в названии, то этого достаточно
                            return true;
                        } else {
                            // если не нашли соответствие в названии, то проверяем второй массив items
                            let inItems = null;
                            item.items.filter(itemR => {
                                if (itemR.name.toLowerCase().indexOf(search.toLowerCase()) >= 0) {
                                    return inItems = item.items;
                                }
                            });
                            return breeds = inItems;

                        }
                    });

                }

                return breeds;
            }
        }

    }
</script>

<style scoped>

</style>