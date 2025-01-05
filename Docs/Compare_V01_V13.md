---
layout: default
title: "Comparison of G1OJS V01 firmware with V13 firmware"
permalink: /Comparison-V01-V13/
---
The graphs below show a measurements taken using the G1OJS V01 and EA4FRB V13 firmware via the pcLink Configuration Menu item, using the "raw" command to export bridge voltages from my MR300 analyser. I converted these voltages to |Z|, VSWR, R and X using well-known formulas.
![Graph showing Z,R,X and VSWR with step changes in VSWR and R visible](https://github.com/user-attachments/assets/9a6d0d5a-f941-49b1-9569-0c719bc3c68f "Fig 1: Measurement of a test load using EA4FRB V13 firmware")
![image](https://github.com/user-attachments/assets/9a08f153-6327-4376-ae42-e770c8551385 "Fig 2: Measurement of a test load using G1OJS V01 firmware")

It can be seen that the 'step' artifacts present in the V13 results are gone, however the measurement 'noise' remains.

The reason for the step artifacts seems to be a combination of a) the way that the V13 firmware compensates for the DDS output falling with frequency, and b) the calibration methodology using stepwise changes in correction parameters with increasing frequency. Either of these features in isolation can cause the steps, and the effects are worse in combination. When present together, the correction parameters not only vary in a stepwise manner, but when the DDS gain setting changes (again, this is stepwise) the "next" set of correction parameters not only pertain to the next frequency but also to a different DDS output level. This causes the changes to reflect nonlinearities in the voltage measurement circuits in addition to the step change in parameters.

To overcome these effects, I first added linear interpolation between calibration parameters at the measurement frequency, and then investigated the effect of removing changes in DDS gain as frequency rises.

![image](https://github.com/user-attachments/assets/3e815daa-f33a-46e0-9a21-7409f50326d2)

