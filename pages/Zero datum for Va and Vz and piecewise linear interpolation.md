---
layout: default
title: "Zero datum for Va and Vz and piecewise linear interpolation"
permalink: /ZerosAndInterpolation/
---

# Zero datum for Va and Vz and piecewise linear interpolation

The graph below shows a measurement taken using the V13 firmware via the pcLink Configuration Menu item, using the "raw" command to export bridge voltages from my MR300 analyser. I converted these voltages to mod Z, VSWR, R and X using [well-known formulas](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/BridgeVoltagesToImpedance/).

It is clear that the analyser struggles to represent loads of this impedance, even after calibration.  Were this a vector analyser, it would be relatively straightforward to determine the exact capacitance during calibration and remove it from the measured complex load impedance. This is not straightforward when the sign of Im(Z) is difficult to determine.

![Graph showing measured impedance of a 1000 Ohm load from 1 to 60 MHz with impedance falling towards the high frequency end, assymptotic to a hyperbolic curve](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/Z%20for%201000%20Ohm%20load%20V13%20firmware.png)

I've tried two other approaches to remedy this and improve accuracy at higher impedances, and both have helped a little but not solved the issue completely. The first is to note that Va becomes much smaller than Vz at high impedances, and hence any errors in Va will become more significant. The input capacitance tends to ensure that even with an open circuit, Va is not zero. In fact, Va becomes quite significant at higher frequencies. Vz has a similar behaviour on short circuit loads.

The graph below shows the behaviour of Vz and Va with Short and Open loads. These both rise to almost 10% of full scale voltage.

![behaviour of Vz and Va with Short and Open loads](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/Uncorrected%20Vz%20and%20Va%20with%20Short%20and%20Open%20Loads%20.png)

I added code in the calibration routine to record these voltages and subtract them from measured voltages before corrections are applied (this is the simplest way to do it given the flow of the calibration routine). I also added an extra segment to the calibration model for Va, so that it uses more appropriate values above a certain impedance. This effectively conbverts the linear correction model to a piecewise linear model with two linear segments. In version V01, I kept the highest impedance calibration load at 274 Ohms, but experiments have shown that changing this to a higher impedance, or adding an extra high impedance load, may have benefits.

Th there are 4 combinations of changes that can be applied for rezeroing:
- No rezeroing
- Rezero Va only
- Rezero Vz only
- Rezero both Va and Vz

The rezeroing of Va and Vz interacts with the calibration model, as the false zeros are subtracted prior to calculating and applying the correction factors. Applying, or not applying, the two-step calibration model to Va, makes 8 total cases. 
The graphs below show measurements of 5 Ohm and 1000 Ohm loads, after calibration, for each of these 8 cases except the "Rezero Vz only" case, as the effect of this is primarily on the low impedance measurements and can be seen in the "Rezero Vz and Va" cases.

None of these cases shows a perfect result, but the impedance and resistance curves are raised somewhat towards their wanted values. Note that there is an increase in measurement noise where this approach is successful, highlighting the fact that we are forced to depend on changes in small values of Va in the impedance calculations because of the disparity in impedance between the load and the 50 ohm bridge resistors. It would be nice if we could accurately and automatically change the bridge resistors to track the measured load!

In V01, the code rezeros both Va and Vz and uses piecewise linear calibration for Va as this seems to offer a good compromise. 

**Signifcant portions of these graphs show R greater than Mod Z. 
This is an artifact of measurement errors and is discussed [here](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/LoadImpCalcIssues)**

### Effect of rezeroing with linear calibration for Va
![Effect of rezeroing with linear calibration for Va](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/Linear%20Va%20cal%20summary.PNG)

### Effect of rezeroing with piecewise linear calibration for Va
![Effect of rezeroing with piecewise linear calibration for Va](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/Extended%20linear%20Va%20cal%20summary.PNG)
