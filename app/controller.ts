///<reference path="../typings/tsd.d.ts"/>  
 
 import Device from 'Device';
 import House from 'House';
 
  export default class MainController {

    public static $inject = [ "$log" ];
    public myHouse:House = new House();

    constructor(public $log:angular.ILogService) {
      this.$log.info("starting controller");

      var d1 = new Device('Refrigerator', 1, 220, 24, 30);
      this.myHouse.devices.push(d1); 

    }

    addDevice():void {
      var name = `${chance.first()}'s server box`;
      var watts = chance.integer({min: 10, max: 20}) * 10;
      var hoursPerDay = chance.integer({min: 1, max: 10});
      var daysPerMonth = chance.integer({min: 10, max: 20});
      var d = new Device(name, 1, watts, hoursPerDay, daysPerMonth);
      this.myHouse.devices.push(d);
    }
  } 

