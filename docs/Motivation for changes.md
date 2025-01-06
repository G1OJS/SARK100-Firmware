---
layout: default
title: "Motivation for changes"
permalink: /Motivation-for-changes/
---
NOTE - it is possible that the issues discussed below are a result of EA4FRB's firmware being used on a device for which it was not designed. The analyser that I have is an 'MR300' which as I understand it is a clone of the original SARK100 device.

A detailed list of changes made in the G1OJS 01 version is here [V01-Overview](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware//V01-Overview/). This page also describes changes to the menus and screens.

# Issues addressed
## Artifacts and Noise in frequency sweeps
The graph below shows a measurement taken using the V13 firmware via the pcLink Configuration Menu item, using the "raw" command to export bridge voltages from my MR300 analyser. I converted these voltages to |Z|, VSWR, R and X using [well-known formulas](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/RF-Directional-Wheatstone-Bridge-Analysis/). This graph shows two of the features that I wanted to try to improve:
1. Both the VSWR and R curves show step changes that are clearly artifacts and not representative of the true test load impedance. 
2. The measurement is quite 'noisy', particularly at high impedances.
   
![Graph showing Z,R,X and VSWR with step changes in VSWR and R visible](https://github.com/user-attachments/assets/9a6d0d5a-f941-49b1-9569-0c719bc3c68f "Fig 1: Measurement of a test load using V13 firmware")

## High impedance loads and flatness
The figure below shows the uncorrected (calibration parameters not applied) results from a measurement of a 1000 ohm load. The very noticeable drop in measured impedance across frequency corresponds to the impedance of a small capacitance (around 10pF in order of magnitude) in parallel with the input, and is also noticeable on the open circuit load results. Were this a vector analyser, it would be relatively straightforward to determine the exact capacitance during calibration and remove it from the measured complex load impedance. This is not straightforward when the sign of Im(Z) is difficult to determine and Re(Z) is always positive. However, it seemed likely that *something* could be done to at least partially remove this effect, given the existing calibration routine and knowledge of the causes. The second figure shows the effect in the corrected output of the V13 firmware.

![image](https://github.com/user-attachments/assets/d2089d87-d1e3-4f72-b899-287c43b7624b)
![image](https://github.com/user-attachments/assets/9d0aace5-7c2e-4295-95e1-4753ea5d630f)




## Inductance and Capacitance modes show zero above 10MHz
Both the inductance and capacitance modes show zero at 10MHz and above, and I wanted to find out if this could be fixed.
# Changes Investigated & Used
- [Interpolation and DDS Gain Settings](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/Interpolation-and-DDS-Gain-Settings/)
- [Zero datum for Va and Vz and piecewise linear interpolation](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/ZerosAndInterpolation/)
