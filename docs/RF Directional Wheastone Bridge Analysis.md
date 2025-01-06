---
layout: default
mathjax: true
title: "RF Directional Wheastone Bridge Analysis"
permalink: /RF-Directional-Wheastone-Bridge-Analysis/
---
# Converting Bridge Voltages to Load Impedance
Much online material about Wheatstone bridges focusses on the case where the bridge is balanced, or near balanced (Zl ~ 50 ohms in this case). However, in an instrument that uses a bridge with fixed reference resistors to measure unknown impedance values, we need to work out the unknown impedance from measurements on an unbalanced bridge. The diagram below shows a generic case of such a bridge. When using detectors that respond to amplitude only, there are *three* independent voltages that can be measured (the three all being *dependent* on Vf), shown as Vr, Vz and Va. Vz and Va are independent because, whilst in vector terms Va + Vz = 2Vf, the magnitude of these quantities does not follow this rule if Zl is not a pure resistance. 

![image](https://github.com/user-attachments/assets/b849b05d-860f-44f5-8954-c11939967a87)

We can calculate the expected magnitude of these voltages as follows.

1) Va and Vz are voltages across the two impedances of a simple potential divider, albeit with one of the impedances potentially complex. Hence, 

$$V_a=2V_f\frac{50}{|Z_l+50|}$$ and $$V_z=2V_f\frac{|Z_l|}{|Z_l+50|}$$
