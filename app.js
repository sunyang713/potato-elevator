
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const CORGI_STATUS = {
  ENTERING: "ENTERING",
  INSIDE: "INSIDE",
  EXITING: "EXITING",
  STANDBY: "STANDBY"
}

const ENTERING = "ENTERING"
const INSIDE = "INSIDE"
const EXITING = "EXITING"
const STANDBY = "STANDBY"
const NUM_FLOORS = getRandomInt(5, 10)

const STANDBY_POS = 100
const ELEVATOR_POS = 1000

/**
 * A Corgi Object.
 *
 * Example:
 * var xiaolong = new Corgi({
 *   xpos: 0,
 *   currentFloor: 0,
 *   desiredFloor: 3,
 *   status: STANDBY,
 *   show: true
 * })
 */
function Corgi({ xpos, ypos, desiredFloor, status, show }) {
  this.xpos = xpos
  this.ypos = ypos
  this.desiredFloor = desiredFloor
  this.status = status
  this.show = show
}

var CorgiComponent = Vue.extend({
  template: `
    <div :style="{ left: xpos, top: ypos }" class="corgi-container" v-on:click="enterElevator">
      <div class="corgi" v-if="show"> </div>
      <p v-if="show" > click me! {{ desiredFloor }}  </p>
    </div>
  `,
  data: () => new Corgi({
    xpos: STANDBY_POS + getRandomInt(-10, 10) + 'px',
    ypos: (getRandomInt(0, NUM_FLOORS) * 100) + getRandomInt(-10, 10) + 'px',
    desiredFloor: getRandomInt(0, NUM_FLOORS),
    status: STANDBY,
    show: true
  }),
  methods : {
    enterElevator: function() {
      console.log(this.xpos)
      console.log(this.ypos)
      this.xpos = ELEVATOR_POS + 25 + 'px'
      this.ypos = '500px'
      setTimeout(() => {
        this.show = false
        console.log('hi')
      }, 1000)
      // this.show = false
    }
  }
})

new CorgiComponent().$mount('#corgi-mount-point')

var store = {
  state: {
    elevator: {
      doorOpen: false,
      currentFloor: 0
    },
    corgis: [],
  },
  // TODO
  createCorgi() {
    // see: https://vuejs.org/v2/guide/render-function.html
    // should initialize a corgi with the default settings
  },
  removeCorgi() {

  },
  setCorgiFloor(corgi, floorNumber) {
    // TODO
  },
  openElevatorDoor() {

  },
  closeElevatorDoor() {

  },
  setElevatorFloor(floorNumber) {

  }
}


var door = new Vue({
  el: '#door',
  data: {
    myPosition: 'absolute',
    topPosition: '400px',
    leftPosition: '1000px',
    show: true
  },
    methods: {
    slideElevator: function() {
      console.log(this.topPosition)
      console.log(this.leftPosition)
      this.topPosition = '200px'
      this.leftPosition = '1000px'
    }
  }
})

/***
var elevator = new Vue ({
  el: '#elevator',
  data: {
    myPosition: 'absolute',
    topPosition: '400px',
    leftPosition: '1000px',
  },
  
  methods: {
    slideElevator: function() {
      console.log(this.topPosition)
      console.log(this.leftPosition)
      this.topPosition = '200px'
      this.leftPosition = '1000px'
    }
  }
})
***/


// var app = new Vue({
//   el: '#app',
//   data: {
//     sharedState: store.state
//   },
//   components: {
//     'corgi': new CorgiComponent(new Corgi({
//       xpos: 0,
//       currentFloor: 0,
//       desiredFloor: 3,
//       status: STANDBY,
//       show: true
//     }))
//   }
// })
