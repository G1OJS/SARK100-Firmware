
![2025-01-05 Welcome screen crop](https://github.com/user-attachments/assets/346571c2-0c78-4ebe-9a6f-890d23aa224d)

# Motivation
This Github repository contains the results of a lot of work I've done investigating the [MR300 Antenna Analyser](http://www.lxqqfy.com/e/product.php?id=MR300)'s firmware (SARK100 firmware V13), mainly for my own education & fun. My motivation was:
- Try to improve the calibration routine & see if the analyser could be made:
  a) more accurate for high impedance loads
  b) flatter across frequency
  c) less noisy (in the sense of random variations in calculated outputs as frequency changes)
  d) eliminate the random steps in calculated outputs (again as frequency changes) that I observed when using a frequency scan via pcLink.
- Make the code more memory-efficient and potentially add new features.

*It is possible that some of all of these issues are a result of EA4FRB's firmware being used on a device for which it was not designed. The analyser that I have is an 'MR300' which as I understand it is a clone of the original SARK100 device.*

I avoided disturbing existing interfaces (e.g. to zPlots and other software) and for V01 kept the requirement for 50, 150 and 274 ohm loads during calibration, apart from adding the need for a short circuit load. Future versions may be based around other calibration loads.

I've achieved some of these goals. The one that is elusive at the moment is the noise on the measurements, especially for higher impedance loads.

# Applicable Hardware
I developed this update to EA4FRb's V13 SARK100 source code by testing on my "MR300" unit which uses the same firmware. This unit is produced by [LXQQFY.com](http://www.lxqqfy.com/e/product.php?id=MR300). The firmware should work on SARK100 as well as on MR100 and other variants of the SARK100 analyser, but I have no way of testing on these other devices.

# Initial G1OJS Firmware
Version 01 of my firmware is now on this site in [this folder](https://github.com/G1OJS/SARK100-Firmware/tree/0ff2cc11358580d340285746afb3c1943f339d39/SARK100%20Firmware%20G1OJS). If you want to play with the source code, download the .zip file and, if you need to, look at [how to update the firmware from source code on Windows 10](https://github.com/G1OJS/G1OJS-MR300-SARK100-Firmware/blob/2c7a80398a74454df8055d32c209fee0f3f73a95/Editing%20MR300-SARK100%20Firmware%20on%20Windows%2010.md). If you just want the firmware, just download the hex file. Either way, you'll need the bootloader software (SARK100_Firmware_Loader.zip) to send the firmware to the hardware unit.

More coming soon!
