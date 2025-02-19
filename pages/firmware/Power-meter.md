---
layout: default
title: "Power Meter"
permalink: /Power-meter/
---

![](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/2025-01-20%20V02%20Power%20Meter.png)

This mode displays mvRMS and dBm power as measured at the input port. The same internal code is used to display output power in VFO mode.

- Due to memory limitations, the conversion between voltage and dBm is approximate. The voltage reading is derived directly from the internal ADC measurement.
- In this version, the calibration is very approximate, based on readings at the low end of the range, and measured only at 1MHz. However, it's been noted by another user of the MR300 that the readings seem useful over the -25 to 15 dBm range and are applicable also at 10MHz.
- Use your own judgement when directly driving the unit to measure power. I would recommend keeping input power below that which the internal DDS is capable of producing, i.e. approx 3 to 4 V peak to peak (not peak or RMS!).

