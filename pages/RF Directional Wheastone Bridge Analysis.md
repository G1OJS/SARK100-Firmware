---
layout: default
mathjax: true
title: "RF Directional Wheastone Bridge Analysis"
permalink: /RF-Directional-Wheastone-Bridge-Analysis/
---
# Converting Bridge Voltages to Load Impedance
Much online material about Wheatstone bridges focusses on the case where the bridge is balanced, or near balanced ($Z_l$ ~ 50 ohms in this case). However, in an instrument that uses a bridge with fixed reference resistors to measure unknown impedance values, we need to work out the unknown impedance from measurements on an unbalanced bridge. 

The diagram below shows a generic case of such a bridge. 

When using detectors that respond to amplitude only, there are *three* independent voltages that can be measured, shown as $V_r$ , $V_z$  and $V_a$ . These three voltages are all *dependent* on $V_f$ (or $2V_f$, the generator voltage, if that's easier to visualise). $V_z$ and $V_a$ are independent from each other because, whilst in vector terms $2V_f = V_z + V_a$, the magnitude of these quantities does not follow this rule if $Z_l$ is not a pure resistance. 

![Circuit diagram of a Wheatstone Bridge showing location of voltage measurements](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/Generic%20Wheatstone%20Bridge.png)

We can calculate the expected magnitude of these voltages as follows.

1) $V_a$ and $V_z$ are voltages across the two impedances of a simple potential divider, albeit with one of the impedances potentially complex. Hence, 

$$V_a=2V_f\frac{50}{|Z_l+50|}$$ and $$V_z=2V_f\frac{|Z_l|}{|Z_l+50|}$$

~ Work in progress ~
