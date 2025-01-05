---
layout: default
title: "G1OJS-MR300-SARK100-Homepage"
permalink: /G1OJS-MR300-SARK100-Homepage/

---
# G1OJS Updates to MR300 / SARK100 Firmware

![2025-01-05 Welcome screen crop](https://github.com/user-attachments/assets/346571c2-0c78-4ebe-9a6f-890d23aa224d)


NOTE - it is possible that the issues discussed below are a result of EA4FRB's firmware being used on a device for which it was not designed. The analyser that I have is an 'MR300' which as I understand it is a clone of the original SARK100 device.
# Issues addressed
## Artifacts and Noise in frequency sweeps
The graph below shows a measurement taken using the V13 firmware via the pcLink Configuration Menu item, using the "raw" command to export bridge voltages from my MR300 analyser. I converted these voltages to |Z|, VSWR, R and X using well-known formulas. This graph shows two of the features that I wanted to try to improve:
1. Both the VSWR and R curves show step changes that are clearly artifacts and not representative of the true test load impedance.
2. The measurement is quite 'noisy', particularly at high impedances. 
   
![Graph showing Z,R,X and VSWR with step changes in VSWR and R visible](https://github.com/user-attachments/assets/9a6d0d5a-f941-49b1-9569-0c719bc3c68f "Fig 1: Measurement of a test load using V13 firmware")

## High impedance loads and flatness
To be written.
## Inductance and Capacitance modes show zero above 10MHz
Both the inductance and capacitance modes show zero at 10MHz and above, and I wanted to find out if this could be fixed.
# Changes Investigated & Used
- [Interpolation and DDS Gain Settings](https://github.com/G1OJS/G1OJS-MR300-SARK100-Firmware/blob/3ceb8265b681a99871379da83c1d63fc8bfa09e2/Docs/Interpolation%20and%20DDS%20Gain%20Settings.md)
- [Zero datum for Va and Vz and piecewise linear interpolation](https://github.com/G1OJS/G1OJS-MR300-SARK100-Firmware/blob/d47c1324b563133223e56954bc30b64a25ebdfc0/Docs/Zero%20datum%20for%20Va%20and%20Vz%20and%20piecewise%20linear%20interpolation.md) 

