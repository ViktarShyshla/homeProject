import vue from 'vue'
import vuex from 'vuex'
import post from './modules/post'

vue.useContext(vuex)

export default new vuex.Store({

    modules: {
        post
    }

})