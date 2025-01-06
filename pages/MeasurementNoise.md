---
layout: default
title: "Measurement Noise"
permalink: /Measurement-Noise/
---
The graphs below show how Vf varies across a 10MHz frequency range when sampled at 10kHz intervals. The second chart is a zoom in to a 2MHz portion of that range.

The other voltages do vary in proportion, which reduces the noise feeding through to the calculated quantities VSWR, |Z|, R and X, but some noise inevitably passes through due to non-linearities and calibration errors.

The noise is quite repeatable, seeming to indicate that it originates in microcontroller noise and intermodulation between various harmonics of clock frequencies.

I have yet to find a way to reduce this noise other than using brute force averaging. 

![Vf 19 to 29 MHz noise](https://github.com/user-attachments/assets/6729f280-c7e7-447e-a1ff-dcd1e3ae79ef)

![Vf 19 to 21 MHz noise](https://github.com/user-attachments/assets/7c6f24bb-0f36-45a3-b144-004e68b00f7f)
