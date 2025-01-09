---
layout: default
title: "Motivation for changes"
permalink: /Motivation-for-changes/
---

**It is possible that the issues discussed below are a result of EA4FRB's firmware being used on a device for which it was not designed. The analyser that I have is an 'MR300' which as I understand it is a clone of the original SARK100 device. It is also possible that the measurement quality effects discussed below are specific to the hardware that I have.**

The changes I made to the menus and screens in the G1OJS 01 version is described here [V01-Overview](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware//V01-Overview/) together with a detailed list of changes made. The page below describes why I set out on this journey.

# Issues addressed
## Artifacts in Frequency Sweeps
The graph below shows a measurement taken using the V13 firmware via the pcLink Configuration Menu item, using the "raw" command to export bridge voltages from my MR300 analyser. I converted these voltages to |Z|, VSWR, R and X using [well-known formulas](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/BridgeVoltagesToImpedance//). Both the VSWR and R curves show step changes that are clearly artifacts and not representative of the true test load impedance. 
   
![Graph showing Z,R,X and VSWR with step changes in VSWR and R visible](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/VSWR%2C%20_Z_%2C%20R%20and%20X%20Test%20Load%20V13.png)

It can also be seen that the frequency sweeps are quite "noisy", especially as impedance gets higher.

### Measurement noise
The graphs below show how Vf varies across a 10MHz frequency range when sampled at 10kHz intervals. The second chart is a zoom in to a 2MHz portion of that range.

The other voltages do vary in proportion, which reduces the noise feeding through to the calculated quantities VSWR, mod Z, R and X, but some noise inevitably passes through due to non-linearities and calibration errors.

The noise is quite repeatable, seeming to indicate that it originates in microcontroller noise and intermodulation between various harmonics of clock frequencies.

I have yet to find a way to reduce this noise other than using brute force averaging. 

![Vf 19 to 29 MHz noise](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/Vf%20with%20274%20ohm%20load%20-%2010MHz.png)

![Vf 19 to 21 MHz noise](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/Vf%20with%20274%20ohm%20load%20-%202MHz.png)


## High impedance loads and flatness
The figure below shows the uncorrected (calibration parameters not applied) results from a measurement of a 1000 ohm load. The very noticeable drop in measured impedance across frequency corresponds to the impedance of a small capacitance (around 10pF in order of magnitude) in parallel with the input, and is also noticeable on the open circuit load results. Were this a vector analyser, it would be relatively straightforward to determine the exact capacitance during calibration and remove it from the measured complex load impedance. This is not straightforward when the sign of Im(Z) is difficult to determine. However, it seemed likely that *something* could be done to at least partially remove this effect, given the existing calibration routine and knowledge of the causes. The second figure shows the effect in the corrected output of the V13 firmware.

![Graph showing measured impedance of a 1000 Ohm load from 1 to 60 MHz with impedance falling towards the high frequency end, assymptotic to a hyperbolic curve](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/Z%20for%201000%20Ohm%20load%20V13%20firmware.png)

## Inductance and Capacitance modes show zero above 10MHz
Both the inductance and capacitance modes show zero at 10MHz and above, and I wanted to find out if this could be fixed.

