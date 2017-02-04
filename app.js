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


var app = new Vue({
  el: '#app',
  data: {
    sharedState: store.state
  }
})
