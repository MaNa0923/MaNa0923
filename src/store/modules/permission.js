import { pubilcRoutes, privateRoutes } from '../../router'
export default {
  namespaced: true,
  state: {
    routes: privateRoutes
  },
  mutations: {
    setRoutes(state, newRoutes) {
      state.routes = [...pubilcRoutes, ...newRoutes]
    }
  },
  actions: {
    // 根据权限筛选路由
    filterRoutes({ commit }, menus) {
      const routes = []
      // 过滤出用户所拥有的私有路由表
      menus.forEach(name => {
        const data = privateRoutes.filter(item => item.name === name)
        routes.push(...data)
      })
      // 添加重定向 404 路由
      routes.push({
        Path: '/:catchAll(.*)',
        redirect: '/404'
      })
      commit('setRoutes', routes)
      return routes
    }
  }
}
