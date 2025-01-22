---
layout: default
title: "V02 Overview"
permalink: /V02-Overview/
---
# Screenshots and Changes to Menus 
## Main screen layout
![](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/2025-01-20%20V02%20Main%20screen%2050%20Ohms.png)

## Over range indicators
![](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/2025-01-20%20V02%20Overrange.png)

## 'Dizzling' turned off
![](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/2025-01-20%20V02%20Dizzling%20off.png)

## New Power Meter
![](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/2025-01-20%20V02%20Power%20Meter.png)

**NOTE** - the dBm calculation uses integer maths and an approximation for the logarithm to save memory, so will not exactly match the mV reading in all cases.

## Menu Structure & Key Presses
- Press "Mode"
    - Main screen
    - Main screen Dizzling off (can be used as a VFO)
    - Measure Capacitance
    - Measure Inductance
    - Power meter (checked at 1MHz - further checks to be added for next version)
- Press "Band"
    - Band advances to next band
    - now includes 60m band
    - audible BEEP marks cycle back from 6m to 160m
- Press "Config"
    - PC Link
    - Idle Timeout
    - Calibrate
    - Firmware Load
- Press "Scan"
    - Scan routine (auto step)

- Press "UP"
    - Increase frequency, Increase frequency step, escape depending on context
    - Long press / hold down = increase frequency quickly without measuring
- Press "Down"
    - Decrease frequency, Decrease frequency step, or confirm depending on context
    - Long press / hold down = decrease frequency quickly without measuring
- Press "Config"
    - Select next value according to context
- Press "UP" and "DOWN" together
    - Enter & exit increment-setting mode

# New Calibration Routine
From the user's perspective, the calibration routing follows the same process as in V13, except that:
- The loads needed are based on E12 resistors (plus 50 Ohms): 10, 50, 220, and 560 Ohms
- Progress is indicated by the frequency displayed
- On completion, the unit automatically reboots

The methodology for correcting measurement errors by using calibration data is described here: [Correcting measurement errors with calibration data](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/CorrectingMeasurementErrors/). This page covers both the techniques used in EA4FRB's V13, and my V01 and V02.

# Changes from G1OJS V01

## Calculation changes
 1. New calibration routine with standard resistors (E12+50ohms): 10,50,220,560
	- Removed G1OJS_V01 routine which was based on EA4FRB_V13
	- Replaced with new routine which applies simple correction factors to the ratios Vr/Vf and Vz/Va
	- Linearises a wider range of impedances
	- Uses less memory (space for more features!)
 2. Refactored measurement routine to measure ratios rather than individual voltages
	- Backwards compatibility for Scan Raw maintained by outputting fixed Vf and Va values with recalculated Vr and Vz
	- Future version may revert to outputting all individual voltages as this is useful for development & debugging
	- Removed averaging as it doesn't seem to help with measurement noise but removal means faster SWR scanning and pcLink scanning
 3. Added power (mV & dBm) display to Sig level mode
 4. Added message to Capacitance display when reactance is zero
 5. Tested with WinPCC-Sark100 V1.0.01_en_DH1KLM to verify backwards compatibility of Scan Raw output
 6. Dizzling offset now 10% of display frequency (was previously 1MHz)

## UI changes
1. Display changes to match changes above

## Ideas for next version
1. Add a VFO mode with variable output level
2. Add calibration routine for power level meter
3. Display a brief message "Dizzling off"/"Dizzling on" when changing between the first two modes.







