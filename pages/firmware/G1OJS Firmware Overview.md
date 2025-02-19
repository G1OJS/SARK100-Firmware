---
layout: default
title: "G1OJS Firmware Overview"
permalink: /G1OJS-Firmware-Overview/
---
# Screenshots and Changes to Menus 
## A new main screen layout
![](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/2025-01-05%20Main%20screen%2050%20Ohms.png)

## One or more values over range
![](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/2025-01-05%20Overrange.png)

## New - Power Meter
![](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/2025-01-20%20V02%20Power%20Meter.png)

## New VFO Mode
To be written

## Menu Structure & Key Presses
- Press "Mode"
    - Main screen
    - Main screen Dizzling off (to be retired now VFO mode is available)
    - Measure Capacitance
    - Measure Inductance
    - Power meter (see below)
    - VFO Mode
        - Use arrow keys to change frequency and output level
        - Press Config to toggle between changing frequency and changing output level
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
 
# Major features introduced / removed / changed
## Calibration
- The loads needed are based on E12 resistors (plus 50 Ohms): 10, 50, 220, and 560 Ohms
- Progress is indicated by the frequency displayed
- On completion, the unit automatically reboots

The methodology for correcting measurement errors by using calibration data is described here: [Correcting measurement errors with calibration data](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/CorrectingMeasurementErrors/). This page covers both the techniques used in EA4FRB's V13, and my V1.0.

## Power Meter
This mode displays mvRMS and dBm power as measured at the input port. The same internal code is used to display output power in VFO mode.

- Due to memory limitations, the conversion between voltage and dBm is approximate. The voltage reading is derived directly from the internal ADC measurement.
- In this version, the calibration is very approximate, based on readings at the low end of the range, and measured only at 1MHz. However, it's been noted by another user of the MR300 that the readings seem useful over the -25 to 15 dBm range and are applicable also at 10MHz.
- Use your own judgement when directly driving the unit to measure power. I would recommend keeping input power below that which the internal DDS is capable of producing, i.e. approx 3 to 4 V peak to peak (not peak or RMS!).

## VFO Mode
Intended to produce a continuous output free from interference by periodic measurements.
    - Use arrow keys to change frequency and output level
    - Press Config to toggle between changing frequency and changing output level
The range of output powers available is quite limited due to both memory and hardware limitations.

## Cable Length Measurement
- To be written

## Calculation / function changes
- DDS is now off in all situations except briefly around measurements and for VFO mode
- Main warning beeps replaced by morse code: U = uncalibrated, Err = error, SK = done
- Speeded up non-blocking (& not too important) text messages
- DDS Gain setting table recalculated to give 10~15dB range in DDS output level setting
- Revised calibration storage to fit in more calibration points across frequency
- Removed saving band frequency on band change - saves memory
- Added short press on config to exit increment setting mode











