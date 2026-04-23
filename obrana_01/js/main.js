var ipAddr = "ip_address";
var ipAddrErr = "ip_error";
var submask = "ip_submask";
var submaskErr = "submask_error";

function calculate() {
  // validation functions

  function ipRegexCheck() {
    const ipValue = document.getElementById(ipAddr).value;

    const ipAddrRegex = new RegExp(
      "^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$",
    );

    if (ipAddrRegex.test(ipValue)) {
      document.getElementById(ipAddrErr).innerHTML = "";
      return true;
    } else {
      document.getElementById(ipAddrErr).innerHTML = "Invalid IP";
      return false;
    }
  }

  function submaskRegexCheck() {
    const submaskValue = document.getElementById(submask).value;

    function submaskRegexTestRange(s) {
      if (!submaskRegex.test(s)) return false;
      const n = Number(s);
      return n >= 1 && n <= 31;
    }

    const submaskRegex = new RegExp("^\\d+$");

    if (submaskRegexTestRange(submaskValue)) {
      document.getElementById(submaskErr).innerHTML = "";
      return true;
    } else {
      document.getElementById(submaskErr).innerHTML = "Invalid submask";
      return false;
    }
  }

  if (ipRegexCheck() && submaskRegexCheck()) {
    let address = 0 >>> 0;
    let netmask = -1 >>> 0;

    // extract from array into one ipBits, ordered
    {
      const ipArray = document
        .getElementById(ipAddr)
        .value.split(".")
        .reverse();

      function to8bit(n) {
        return n & 0xff;
      } // returns 0..255

      for (let i = 0; i < ipArray.length; i++) {
        const element = ipArray[i];
        address |= to8bit(element) << (i * 8);
      }
    }

    // subnet
    {
      var ipSubmask = Number(document.getElementById(submask).value);
      netmask <<= 32 - ipSubmask;
    }

    // calculation
    {
      var AM = address & netmask; // addr mreze
      var BA = AM | ~netmask; // broadcast
      var PA = AM | 1; // prva racunala
      var ZA = (AM | ~netmask) & ~1; // zadnja racunala
      var BRRAC = 2 ** (32 - ipSubmask) - 2; // br hostova (2^n - 2) n = 32-subnetsize (broj jedinica)
    }

    // display to screen
    {
      function binaryToIp(num) {
        num = Number(num) >>> 0; // force unsigned 32-bit
        return [
          (num >>> 24) & 0xff,
          (num >>> 16) & 0xff,
          (num >>> 8) & 0xff,
          num & 0xff,
        ].join(".");
      }

      document.getElementById("AM_out").textContent = binaryToIp(AM);
      document.getElementById("BA_out").textContent = binaryToIp(BA);
      document.getElementById("PA_out").textContent = binaryToIp(PA);
      document.getElementById("ZA_out").textContent = binaryToIp(ZA);
      document.getElementById("BRRAC_out").textContent = String(BRRAC);
    }
  }
}

document.getElementById(ipAddr).addEventListener("focusout", calculate);
document.getElementById(submask).addEventListener("focusout", calculate);
