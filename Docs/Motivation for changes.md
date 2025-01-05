---
layout: default
title: "Motivation for changes"
permalink: /Motivation-for-changes/
---
This page outlines the features of the V13 firmware that I wanted to try to improve. 

# Artifacts and Noise in frequency sweeps
The graph below shows a measurement taken using the V13 firmware via the pcLink Configuration Menu item, using the "raw" command to export bridge voltages from my MR300 analyser. I converted these voltages to |Z|, VSWR, R and X using well-known formulas. This graph shows two of the features that I wanted to try to improve:
1. Both the VSWR and R curves show step changes that are clearly artifacts and not representative of the true test load impedance.
2. The measurement is quite 'noisy', particularly at high impedances.
   
![Graph showing Z,R,X and VSWR with step changes in VSWR and R visible](https://github.com/user-attachments/assets/9a6d0d5a-f941-49b1-9569-0c719bc3c68f "Fig 1: Measurement of a test load using V13 firmware")

# Inductance and Capacitance modes show zero above 10MHz
Both the inductance and capacitance modes show zero at 10MHz and above, and I wanted to find out if this could be fixed.
