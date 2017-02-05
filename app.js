
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

const RAND_FLOOR = getRandomInt(0, NUM_FLOORS) * 50 + getRandomInt(-10, 10) + 100

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
    ypos: RAND_FLOOR + 'px',
    desiredFloor: getRandomInt(0, NUM_FLOORS),
    status: STANDBY,
    show: true
  }),
  methods : {
    enterElevator: function() {
      console.log(this.xpos)
      console.log(this.ypos)
      this.xpos = ELEVATOR_POS + 20 + 'px'
      this.ypos = RAND_FLOOR + 50 + 'px'
      setTimeout(() => {
        this.show = false
        console.log('hi')
      }, 1000)
      // this.show = false
    }
  }
})

new CorgiComponent().$mount('#corgi-mount-point')

var door = new Vue({
  el: '#door',
  data: {
    myPosition: 'absolute',
    topPosition: RAND_FLOOR + 'px',
    leftPosition: '1000px',
    show: true
  },
    methods: {
    slideElevator: function() {
      console.log(this.topPosition)
      console.log(this.leftPosition)
      this.topPosition = RAND_FLOOR - 200 + 'px'
      this.leftPosition = '1000px'
    }
  }
})
