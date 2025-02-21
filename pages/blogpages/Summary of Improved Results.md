---
layout: default
title: "Summary of Improved Results"
permalink: /Results-Summary/
---


## Measurement Artifacts
![Graph showing Z,R,X and VSWR with step changes in VSWR and R visible](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/VSWR%2C%20_Z_%2C%20R%20and%20X%20Test%20Load%20V13.png "Fig 1: Measurement of a test load using EA4FRB V13 firmware")

The reason for the step artifacts shown above seems to be a combination of 
 - the way that the V13 firmware compensates for the DDS output falling with frequency
 - the V13 calibration methodology using stepwise changes in correction parameters with increasing frequency.
Either of these features in isolation can cause the steps, and the effects are worse in combination. When present together, the correction parameters not only vary in a stepwise manner, but when the DDS gain setting changes (again, this is stepwise) the "next" set of correction parameters not only pertain to the next frequency but also to a different DDS output level. This causes the changes to reflect nonlinearities in the voltage measurement circuits in addition to the step change in parameters. 

In addition, at least on the Mr300, there is insufficient internal screening between the DDS chip and bridge amplifiers, and the microcontroller and LCD module. 

The graph below shows a measurements taken using the G1OJS V1.0 and EA4FRB V13 firmware via the pcLink Configuration Menu item.

![Graph showing Z,R,X and VSWR with step changes in VSWR and R eliminated](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/Test%20Load%20V1.0%20640px.png")

It can be seen that the 'step' artifacts present in the V13 results are gone, mainly thanks to keeping the DDS PGA output constant rather than changing it once per band.









