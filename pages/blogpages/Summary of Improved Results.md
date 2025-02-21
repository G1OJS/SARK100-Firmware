---
layout: default
title: "Summary of Improved Results"
permalink: /Results-Summary/
---


## 1. Measurement Artifacts
![Graph showing Z,R,X and VSWR with step changes in VSWR and R visible](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/VSWR%2C%20_Z_%2C%20R%20and%20X%20Test%20Load%20V13.png)

The reason for the step artifacts shown above seems to be a combination of 
 - the way that the V13 firmware compensates for the DDS output falling with frequency
 - the V13 calibration methodology using stepwise changes in correction parameters with increasing frequency.

Either of these features in isolation can cause the steps, and the effects are worse in combination. When present together, the correction parameters not only vary in a stepwise manner, but when the DDS gain setting changes (again, this is stepwise) the "next" set of correction parameters not only pertain to the next frequency but also to a different DDS output level. This causes the changes to reflect nonlinearities in the voltage measurement circuits in addition to the step change in parameters. 

In addition, at least on the MR300, there is insufficient internal screening between the DDS chip and bridge amplifiers, and the microcontroller and LCD module. 

The graph below shows a measurement taken using the G1OJS V1.0 firmware.

![Graph showing Z,R,X and VSWR with step changes in VSWR and R eliminated](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/Test%20Load%20V1.0%20640px.png)

It can be seen that the 'step' artifacts present in the V13 results are gone (although significant noise remains), mainly thanks to keeping the DDS PGA output constant rather than changing it once per band.

## 2. Accuracy
In terms of practical spot measurements, the tables below show some example loads with the absolute results and percentage error (for reactance, which should be zero for the resistive loads, I've expressed the percent error as a percentage of the true resistance).

![](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/Spot%20Accuracy%20Table.PNG)

It is possible to control the variation of accuracy with impedance to some extent, by chosing the number and value of calibration loads. A future version of firmware may allow this as a user setting, so for example an experimenter focussing on low impedance Yagi designs might chose to concentrate calibration loads in the 10 to 40 ohms region.



