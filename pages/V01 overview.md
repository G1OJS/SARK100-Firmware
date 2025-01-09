---
layout: default
title: "V01 Overview"
permalink: /V01-Overview/
---
# Screenshots and Changes to Menus 
## A new main screen layout
![](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/2025-01-05%20Main%20screen%2050%20Ohms.png)

## One or more values over range
![](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/2025-01-05%20Overrange.png)

## 'Dizzling' turned off
![](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/2025-01-05%20Dizzling%20off.png)

## Menu Structure & Key Presses
- Press "Mode"
    - Main screen
    - Main screen Dizzling off (can be used as a VFO)
    - Measure Capacitance
    - Measure Inductance
    - Signal Strength
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
- A short circuit load is required in addition to the 50, 150 and 274 ohm loads
- Progress is indicated by the frequency displayed
- On completion, the unit automatically reboots

# Changes from EA4FRB V13

## Major changes
The major changes I've made to source code are
- linear interpolation of calibration factors between calibration points
- Va and Vz zero calibration with open and short calibration load, and subtraction from measurement before correction factors applied. This gives better accuracy near short and open conditions.
- Two-step piecewise linear calibration for Va for high Z loads - better accuracy for high Z loads
- DDS gain maintained at lowest frequency setting to avoid steps in output caused when gain changes
- Added 60m band
- Redesigned the main display - everything on previous 'SWR' and 'IMP' displays is now combined into one view
- Removed numerical caps on impedance and SWR, and replaced with an 'overrange' display ('***') when quantities go over 3 digits (does not affect pcLink output)
- Scan routine now selects step size automatically, enabling removal of step size CONFIG menu item
- Capacitance and inductance calculations now work above 10MHz, and show measured resistance alongside capacitance / inductance
- Added 0.1 ohm display resolution for values of R,X,Z below 10 (also added to pcLink output for all values). Display now 1dp for all quantities, pcLink has 2dp but only SWR has 2dp precision.

As the main display now combines SWR, mod Z, R and X into one view, I needed to make another change as follows. As in V13, "dizzling" is used to determine the sign of the reactance. Whilst dizzling is active, the unit can't be used as a VFO for other experiments (because the frequency toggles constantly up and down). However, pressing the mode key moves the unit into a non-dizzling mode equivalent to the previous "SWR" mode, but with all elements of the display retained. Instead of changing the display, a simple "#" is placed where the sign of the reactance would normally show. 


## Other changes
- Internal software structural change - calibration frequencies separated from band frequencies, giving greater freedom for setting cal frequencies and band edges at design time
- Calibration now done at selected frequencies to avoid spurii
- Available DDS gain settings table modified to provide finer steps for DDS gain setting during calibration
- Source code refactored to reduce memory usage & potentially allow more functions to be added
- Fixed display errors caused by SWR being lower than implied by mod Z
- G1OJS Callsign in welcome screen
- Removed delay following change of band
- Changed "OFF" to "SIG"
- Changed "suspend timeout" to "Set Idle Timeout"
- Default idle timeout set to off
- Added frequency readout / progress indicator to calibration routine
- Added automatic restart after calibration
- Added a beep when band changes from 6m back to 160m
- Default increment for key up / down = 100kHz (was 10kHz)
- Added "scanrp" command to output both uncorrected and corrected bridge voltages
- Source code - changed some variable names and function names to make them more descriptive (e.g. including reference to units such as Hz, kHz)

## Ideas for next version
- Scrap the rezero and instead do piecewise linear to take Vz down to zero ohms and Va up to 1000 - or even open (saves user a cal load)
- Check if changing Vz cal to 50-274 instead of current 50-150 gives better overall results. 
   (Current scheme is Vr 150-274, Vz 50-150, Va1 50-150, Va2 150-274 Could also try Va2 150-1000 or 274-1000, or a value like 470R instead of 1000R)
- Combine the above and split both Va and Vz cal into >50 Ohms and <50 ohms.
- Consider adding a correction factor for Vr / VSWR - it's sometimes too low & affects R calculation

- Convert SIG display to dBm
- Look closer at limits of applicability of L and C calculations.
- Improve LCD display on pcLink
- Look at band limits. What if we make them not contiguous? Better? Worse? Good for scanning (faster)?
- Argument for setmeasurecalcdisplay - use descriptive #defs rather than literals
- Investigate adding a variable-output VFO mode.






