---
layout: default
title: "Measurement Noise"
permalink: /Measurement-Noise/
---
The graphs below show how Vf varies across a 10MHz frequency range when sampled at 10kHz intervals. The second chart is a zoom in to a 2MHz portion of that range.

The other voltages do vary in proportion, which reduces the noise feeding through to the calculated quantities VSWR, mod Z, R and X, but some noise inevitably passes through due to non-linearities and calibration errors.

The noise is quite repeatable, seeming to indicate that it originates in microcontroller noise and intermodulation between various harmonics of clock frequencies.

I have yet to find a way to reduce this noise other than using brute force averaging. 



![Vf 19 to 29 MHz noise](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/Vf%20with%20274%20ohm%20load%20-%2010MHz.png)

![Vf 19 to 21 MHz noise](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/Vf%20with%20274%20ohm%20load%20-%202MHz.png)
