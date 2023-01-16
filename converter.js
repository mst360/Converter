
var property = new Array();
var unit = new Array();
var factor = new Array();


property[0] = "Unit Selection Menu ";


property[1] = "Length";
unit[1] = new Array("Meter ", "Angstrom ", "Astronomical unit ",  "Centimeter ", "Kilometer ", "Fermi", "Foot ", "Inch ","Light year ", "Micrometer",  "Millimeter", "Nanometer",  "Mile", "Parsec", "Picometer ", "Yard ");
factor[1] = new Array(1, 1E-10, 1.49598E11,  .01, 1000, 1E-15, .3048, .0254,  9.46055E+15, .000001, .001, 1E-9,  1609.344, 3.08374E+16,  1E-12, .9144);

property[2] = "Temperature";
unit[2] = new Array("Degrees Celsius ", "Degrees Fahrenheit ", "Degrees Kelvin");
factor[2] = new Array(1, 0.555555555555, 1);
tempIncrement = new Array(0, -32, -273.15);

property[3] = "Mass";
unit[3] = new Array("Kilogram", "Gram", "Milligram", "Microgram ", "Carat ");
factor[3] = new Array(1, .001, 1e-6, .000000001, .0002);


property[4] = "Time";
unit[4] = new Array("Second ", "Day ",  "Hour ", "Minute ", "Month ",  "Year");
factor[4] = new Array(1, 8.640E4,  3600,  60,  2628000,  31536000);
 

property[5] = "Area";
unit[5] = new Array("Square meter", "Square centimeter", "Square kilometer", "Circular mil", "Square foot ", "Square inch", "Square mile", "Square yard");
factor[5] = new Array(1, .0001, 1000000, 5.067075E-10, 9.290304E-02, 6.4516E-04, 2589988, .8361274);


property[6] = "Electricity";
unit[6] = new Array("Coulomb ", "Ampere hour ", "Faraday",  "Millifaraday ", "Microfaraday ", "Picofaraday");
factor[6] = new Array(1, 3600, 96521.8999999997, 96.5219, 9.65219E-02, 9.65219E-05);


property[7] = "Acceleration";
unit[7] = new Array("Meter/sq.sec (m/sec^2)", "Foot/sq.sec (ft/sec^2)", "G (g)", "Inch/sq.sec (in/sec^2)");
factor[7] = new Array(1, .3048, 9.806650,  2.54E-02);


property[8] = "Torque";
unit[8] = new Array("Newton-meter (N m)", "Dyne-centimeter(dy cm)", "Kgrf-meter (kgf m)", "lbf-inch (lbf in)", "lbf-foot (lbf ft)");
factor[8] = new Array(1, .0000001, 9.806650, .1129848, 1.355818);

property[9] = "Energy";
unit[9] = new Array("Joule (J)", "Calorie (SI) (cal)",  "Electron volt (eV)", "Erg (erg)", "Foot-pound force", "Foot-poundal", "Horsepower-hour", "Kilocalorie (SI)(kcal)", "Kilocalorie (mean)(kcal)", "Kilowatt-hour (kW hr)");
factor[9] = new Array(1,  4.1868, 1.6021E-19, .0000001, 1.355818, 4.214011E-02, 2684077.3, 4186.8, 4190.02,  4.2E9);

property[10] = "Force";
unit[10] = new Array("Newton (N)", "Dyne (dy)", "Kilogram force (kgf)", "Kilopond force (kpf)", "Kip (k)", "Ounce force (ozf)", "Pound force (lbf)", "Poundal");
factor[10] = new Array(1, .00001, 9.806650, 9.806650, 4448.222, .2780139, .4535924, .138255);


property[11] = "Light";
unit[11] = new Array("Lumen/sq.meter (Lu/m^2)", "Lumen/sq.centimeter", "Lumen/sq.foot", "Foot-candle (ft-cdl)", "Foot-lambert", "Candela/sq.meter", "Candela/sq.centimeter", "Lux (lux)", "Phot");
factor[11] = new Array(1, 10000, 10.76391, 10.76391, 10.76391, 3.14159250538575, 31415.9250538576, 1, 10000);


property[12] = "Mass Flow";
unit[12] = new Array("Kilogram/second (kgr/sec)", "Pound mass/sec (lbm/sec)", "Pound mass/min (lbm/min)");
factor[12] = new Array(1, .4535924, .007559873);

property[13] = "Density & Mass capacity";
unit[13] = new Array("Kilogram/cub.meter", "Grain/galon", "Grams/cm^3 (gr/cc)", "Pound mass/cubic foot", "Pound mass/cubic-inch", "Ounces/gallon (UK,liq)", "Ounces/gallon (US,liq)", "Ounces (mass)/inch", "Pound mass/gal (UK,liq)", "Pound mass/gal (US,liq)", "Slug/cubic foot", "Tons (long,mass)/cub.yard");
factor[13] = new Array(1, .01711806, 1000, 16.01846, 27679.91, 6.236027, 7.489152, 1729.994, 99.77644, 119.8264, 515.379, 1328.939);

property[14] = "Power";
unit[14] = new Array("Watt (W)", "Kilowatt (kW)", "Megawatt (MW)", "Milliwatt (mW)", "BTU (SI)/hour", "BTU (thermo)/second", "BTU (thermo)/minute", "BTU (thermo)/hour", "Calorie (thermo)/second", "Calorie (thermo)/minute");
factor[14] = new Array(1, 1000, 1000000, .001, .2930667, 1054.35, 17.5725, .2928751, 4.184, 6.973333E-02 );

property[15] = "Pressure & Stress";
unit[15] = new Array("Newton/sq.meter", "Atmosphere (normal)", "Atmosphere (techinical)", "Bar", "Centimeter mercury(cmHg)", "Centimeter water (4'C)", "Millibar", "Millimeter mercury(mmHg)", "Pascal (Pa)", "Kilopascal (kPa)", "Megapascal (Mpa)" );
factor[15] = new Array(1, 101325, 98066.5, 100000, 1333.22, 98.0638,  100, 133.3224, 1, 1000, 1000000);



property[16] = "Velocity & Speed";
unit[16] = new Array("Meter/second (m/sec)", "Foot/minute (ft/min)", "Foot/second (ft/sec)", "Kilometer/hour (kph)", "Knot (int'l)", "Mile (US)/hour (mph)", "Mile (nautical)/hour", "Mile (US)/minute", "Mile (US)/second", "Speed of light (c)", "Mach (STP)(a)");
factor[16] = new Array(1, 5.08E-03, .3048, .2777778, .5144444, .44707, .514444, 26.8224, 1609.344, 299792458, 340.0068750);

property[17] = "Volume & Capacity";
unit[17] = new Array("Cubic Meter (m^3)", "Cubic centimeter", "Cubic millimeter", "Acre-foot", "Barrel (oil)", "Board foot", "Bushel (US)", "Cup", "Fluid ounce (US)", "Cubic foot",  "Gill (US)", "Cubic inch (in^3)", "Liter ",  "mililiter");
factor[17] = new Array(1, .000001, .000000001, 1233.482, .1589873, .002359737, .03523907, .0002365882, .00002957353, .02831685,  .0001420652, .00001638706, .001,   .7645549);

property[18] = "Volume Flow";
unit[18] = new Array("Cubic meter/second", "Cubic foot/second", "Cubic foot/minute", "Cubic inches/minute", "Gallons (US,liq)/minute)");
factor[18] = new Array(1, .02831685, .0004719474, 2.731177E-7, 6.309020E-05);



function UpdateUnitMenu(propMenu, unitMenu) {
  var i;
  i = propMenu.selectedIndex;
  FillMenuWithArray(unitMenu, unit[i]);
}

function FillMenuWithArray(myMenu, myArray) {
  var i;
  myMenu.length = myArray.length;
  for (i = 0; i < myArray.length; i++) {
    myMenu.options[i].text = myArray[i];
  }
}

function CalculateUnit(sourceForm, targetForm) {

  var sourceValue = sourceForm.unit_input.value;

  sourceValue = parseFloat(sourceValue);
  if (!isNaN(sourceValue) || sourceValue == 0) {
    sourceForm.unit_input.value = sourceValue;
    ConvertFromTo(sourceForm, targetForm);
  }
}

function ConvertFromTo(sourceForm, targetForm) {
  var propIndex;
  var sourceIndex;
  var sourceFactor;
  var targetIndex;
  var targetFactor;
  var result;

  propIndex = document.property_form.the_menu.selectedIndex;

  sourceIndex = sourceForm.unit_menu.selectedIndex;
  sourceFactor = factor[propIndex][sourceIndex];

  targetIndex = targetForm.unit_menu.selectedIndex;
  targetFactor = factor[propIndex][targetIndex];

 
  result = sourceForm.unit_input.value;
  if (property[propIndex] == "Temperature") {
    result = parseFloat(result) + tempIncrement[sourceIndex];
  }
  result = result * sourceFactor;

   result = result / targetFactor;

  if (property[propIndex] == "Temperature") {
    result = parseFloat(result) - tempIncrement[targetIndex];
  }

  targetForm.unit_input.value = result;
}

window.onload = function(e) {
  FillMenuWithArray(document.property_form.the_menu, property);
  UpdateUnitMenu(document.property_form.the_menu, document.form_A.unit_menu);
  UpdateUnitMenu(document.property_form.the_menu, document.form_B.unit_menu)
}

document.getElementByClass('numbersonly').addEventListener('keydown', function(e) {
  var key = e.keyCode ? e.keyCode : e.which;

  if (!([8, 9, 13, 27, 46, 110, 190].indexOf(key) !== -1 ||
      (key == 65 && (e.ctrlKey || e.metaKey)) || 
      (key == 67 && (e.ctrlKey || e.metaKey)) || 
      (key == 86 && (e.ctrlKey || e.metaKey)) || 
      (key >= 35 && key <= 40) || 
      (key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) || 
      (key >= 96 && key <= 105) 
      (key == 190) 
    )) e.preventDefault();
});