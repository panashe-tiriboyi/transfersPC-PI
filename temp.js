const ds18b20 = require("ds18b20");
const Gpio = require("onoff").Gpio;

// Initialize the sensor
const sensorId = "28-00000xxxxxxx"; // Replace with your sensor's ID

// Function to read temperature
function readTemperature() {
  ds18b20.temperature(sensorId, (err, value) => {
    if (err) {
      console.error("Error reading temperature:", err);
      return;
    }
    console.log(`Current temperature: ${value.toFixed(2)}°C`);
  });
}

// Read temperature every 5 seconds
setInterval(readTemperature, 5000);
