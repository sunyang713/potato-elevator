const ENTERING = "ENTERING"
const INSIDE = "INSIDE"
const EXITING = "EXITING"
const STANDBY = "STANDBY"



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
 *
 */
function Corgi({ xpos, currentFloor, desiredFloor, status, show }) {
  this.xpos = xpos
  this.currentFloor = currentFloor
  this.desiredFloor = desiredFloor
  this.status = status
  this.show = show
}




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


