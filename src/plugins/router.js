import Vue from 'vue'
import Router from 'vue-router'
import EditDay from '@/components/EditDay'
import EditRoutine from '@/components/EditRoutine'
import Home from '@/components/Home'
import Day from '@/components/Day'
import Routine from '@/components/Routine'

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/home',
      name: 'Home',
      alias: ['','*'],
      component: Home
    },
    {
      path: '/day/:id',
      name: 'Tag',
      component: Day
    },
    {
      path: '/routine/:id',
      name: 'Routine',
      component: Routine
    },
    {
      path: '/editroutine/:id',
      name: 'Neue Routine',
      component: EditRoutine
    },
    {
      path: '/editday/:id',
      name: 'Neuer Trainingstag',
      component: EditDay
    }
  ]
})
