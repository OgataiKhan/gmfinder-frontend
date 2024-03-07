//import reactive from "vue";
import { reactive } from "vue";
//create store object
const store = reactive({
    api: {
        baseURL: 'http://127.0.0.1:8000/',
        apiUrls: {
            'game_masters': 'api/game_masters',
            'game_systems': 'api/game_systems',
            'storage': 'storage/',
        },
    },
    gameMasters: [],
    selectedGameMaster: '',
    gameMastersResults: [],
    gameSystems: [],
    selectedGameSystem: '',
    currentPage: 1,
    lastPage: null,
    totalResults: 0,
});

export default store;