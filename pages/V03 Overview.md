---
layout: default
title: "V03 Overview"
permalink: /V03-Overview/
---
# Screenshots and Changes to Menus 

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
 
# Cumulative Notes on features introduced / removed / changed
## Calibration
- The loads needed are based on E12 resistors (plus 50 Ohms): 10, 50, 220, and 560 Ohms
- Progress is indicated by the frequency displayed
- On completion, the unit automatically reboots

The methodology for correcting measurement errors by using calibration data is described here: [Correcting measurement errors with calibration data](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/CorrectingMeasurementErrors/). This page covers both the techniques used in EA4FRB's V13, and my V01 and V02.

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

# Changes from G1OJS V02

## Calculation / function changes
1. Fixed power meter arithmetic error affecting dBm readings above ~0dBm
2. DDS is now off in all situations except briefly around measurements and for VFO mode
3. Main warning beeps replaced by morse code: U = uncalibrated, Err = error, SK = done
4. Speeded up non-blocking (& not too important) text messages
5. DDS Gain setting table recalculated to give 10~15dB range in DDS output level setting
6. Revised calibration storage to fit in more calibration points across frequency

## UI changes
1. Added VFO mode with power level control (press Config key once in VFO mode and then use up/down keys)
2. Added config setting for CW notification / beep pitch

## Code structure changes
1. Refactoring to push low level calls out of higher level blocks
2. Revision of function names to be more descriptive
3. Revision of comments
4. Review and revision of #include statements
5. Developped sleep timer to handle all timing functions making Delay Timer redundant (& this module removed)
6. 16 bit bridge ratios stored for calibration encoded into 8 bits for storage, doubling the max number of entries possible

## Ideas for next version
Display a brief message "Dizzling off"/"Dizzling on" when changing between the first two modes.
(Is the 'no dizzling' mode needed now there is a VFO mode?)
Dynamic DDS level control via finer control voltage?
Replace 1/4 step msg with msg showing new step
Add calibration routine for power level meter
Auto frequency sweep to find max and min impedance (or simply Vf) to measure cable lengths
Extra VFO functions - two tone generator? CW beacon? Sweep gen for filter measurements with SDR?
See if adding back DDS output levelling works better with new cal scheme







