---
layout: default
mathjax: true
title: "Correcting Measurement Errors"
permalink: /CorrectingMeasurementErrors/
---

# Introduction
The RF bridge voltages in the SARK100 and its clones are converted to DC voltages via diode detectors. The RF voltages are on the order of one or two volts peak to peak, and the diode response in this region is significantly nonlinear. Much of this nonlinearity can be removed by placing a matched diode in the feedback loop of the amplifier following the detector, and this technique is used to good effect. However, nonlinearities and offsets, both functions of frequency, remain in sufficient quantity to cause significant measurement errors if not further corrected numerically. 

The graphs below show the ratios Vz/Va and Vr/Vf for a range of load impedances and frequencies, before any numeric correction, as measured by my MR300 analyser. 
|-------|-------|
|![](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/2025-01-20%20V02%20VzVa%20Errors%20Uncorrected.PNG)|![](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/2025-01-20%20V02%20VrVf%20Errors%20Uncorrected.PNG)|
