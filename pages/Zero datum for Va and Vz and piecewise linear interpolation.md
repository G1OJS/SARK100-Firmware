---
layout: default
title: "Zero datum for Va and Vz and piecewise linear interpolation"
permalink: /ZerosAndInterpolation/
---

# Zero datum for Va and Vz and piecewise linear interpolation

The graph below shows a measurement taken using the V13 firmware via the pcLink Configuration Menu item, using the "raw" command to export bridge voltages from my MR300 analyser. I converted these voltages to |Z|, VSWR, R and X using [well-known formulas](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/BridgeVoltagesToImpedance/).

It is clear that the analyser struggles to represent loads of this impedance, even after calibration.  Were this a vector analyser, it would be relatively straightforward to determine the exact capacitance during calibration and remove it from the measured complex load impedance. This is not straightforward when the sign of Im(Z) is difficult to determine and Re(Z) is always positive.

![Graph showing measured impedance of a 1000 Ohm load from 1 to 60 MHz with impedance falling towards the high frequency end, assymptotic to a hyperbolic curve](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/Z%20for%201000%20Ohm%20load%20V13%20firmware.png)

I've tried two other approaches to remedy this and improve accuracy at higher impedances, and both have helped a little but not solved the issue completely. The first is to note that Va becomes much smaller than Vz at high impedances, and hence any errors in Va will become more significant. The input capacitance tends to ensure that even with an open circuit, Va is not zero. In fact, Va becomes quite significant at higher frequencies. Vz has a similar behaviour on short circuit loads.
