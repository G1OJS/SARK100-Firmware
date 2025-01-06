---
layout: default
title: "Interpolation and DDS Gain Settings"
permalink: /Interpolation-and-DDS-Gain-Settings/
---
NOTE - it is possible that the issues discussed below are a result of EA4FRB's firmware being used on a device for which it was not designed. The analyser that I have is an 'MR300' which as I understand it is a clone of the original SARK100 device.

# Interpolation and DDS Gain Settings
## Results of Changes
The graphs below show a measurements taken using the G1OJS V01 and EA4FRB V13 firmware via the pcLink Configuration Menu item, using the "raw" command to export bridge voltages from my MR300 analyser. I converted these voltages to |Z|, VSWR, R and X using [well-known formulas]({base.url}/RF-Directional-Wheastone-Bridge-Analysis/).

![Graph showing Z,R,X and VSWR with step changes in VSWR and R visible](https://github.com/user-attachments/assets/9a6d0d5a-f941-49b1-9569-0c719bc3c68f "Fig 1: Measurement of a test load using EA4FRB V13 firmware")
![image](https://github.com/user-attachments/assets/9a08f153-6327-4376-ae42-e770c8551385 "Fig 2: Measurement of a test load using G1OJS V01 firmware")

It can be seen that the 'step' artifacts present in the V13 results are gone, however the measurement 'noise' remains.

## Changes Made
The reason for the step artifacts shown above seems to be a combination of a) the way that the V13 firmware compensates for the DDS output falling with frequency, and b) the calibration methodology using stepwise changes in correction parameters with increasing frequency. Either of these features in isolation can cause the steps, and the effects are worse in combination. When present together, the correction parameters not only vary in a stepwise manner, but when the DDS gain setting changes (again, this is stepwise) the "next" set of correction parameters not only pertain to the next frequency but also to a different DDS output level. This causes the changes to reflect nonlinearities in the voltage measurement circuits in addition to the step change in parameters.

To overcome these effects, I first added linear interpolation between calibration parameters at the measurement frequency, and then investigated the effect of removing changes in DDS gain as frequency rises. It is hard to imagine an unwanted effect of introducing the interpolation other than extra memory and processor usage, but noise is a concern if measured voltages drop too much without compensating with increased DDS gain.

The graphs below show how the bridge supply voltage Vf (meaasured at the 'top' of the bridge) varies with frequency for a range of different load resistances. The vertical scales are in arbitrary units with 4 representing the maximum voltage that the ADC converers can measure, and are shown logarithmically. The first graph shows how the step changes in gain in the V13 software cause voltages to recover to higher values as they naturally fall with frequency. The lower graph shows the effect of removing these gain step changes, and roughly speaking the net effect is approximately 6dB lower output at the high frequency end. I have not yet noticed any effects on the quality of the measurements as a result of this, and feel that the benefits of removing the step artifacts favour keeping the gain flat across frequency.

Notice also that the V13 firmware causes the Vf voltage to 'max out' the ADC measurement capabilty with a 1000 ohm load. This will result in measurement errors for high impedance loads, because Vf is used in the calculation of VSWR which then flows through to calculation of R and X.

Neither of these changes, however, addresses the measurement noise issue.

![image](https://github.com/user-attachments/assets/08fa9269-fc2f-4012-aeac-60aac0aa8475)


![image](https://github.com/user-attachments/assets/be8bcd01-b463-4b00-a03d-3ae0ae75316a)






