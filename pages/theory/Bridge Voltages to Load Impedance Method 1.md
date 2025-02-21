---
layout: default
mathjax: true
title: "Converting Bridge Voltages to Load Impedance: Method 1"
permalink: /BridgeVoltagesToImpedance1/
---

The equations for the bridge voltages that can be measured (see [Output Voltages on RF Wheatstone Bridges](https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/BridgeVoltages/) ) are:

  <div class='equation'>
    <table style='border:none;'><tr><td style='border:none;'>$$V_a=2V_f\frac{50}{\vert Z_l+50\vert }$$</td></tr></table>
  </div>
  <div class='equation'>
    <table style='border:none;'><tr><td style='border:none;'>$$V_z=2V_f\frac{\vert Z_l\vert }{\vert Z_l+50\vert }$$</td></tr></table>
  </div>
  <div class='equation'>
    <table style='border:none;'><tr><td style='border:none;'>$$V_r = \vert  2V_f \frac{Z_l}{Z_l+50} - V_f\vert $$</td></tr></table>
  </div>
  <div  style='clear:both'></div>


## Step 1 - three voltages to two voltage ratios
<p>Looking at the equations for Vz and Va in [](/BridgeVoltages/), we can see that they have the same denominator, and both share the multiplier $2V_f$ , so dividing one equation by the other will get rid of these quantities and leave us with $\frac{V_z}{V_a}=\frac{\vert Z_l\vert }{50}$which gives us the magnitude of the unknown impedance. </p>

<p>To get the complex impedance, we need an equation that contains it directly rather than inside \vert mod\vert bars. 
  If we look again at the equation for $V_r$ above, we can rearrange to get a single fraction as follows:</p>

<div class='equation'>
  <table style='border:none;'><tr><td style='border:none;'>$$\frac{V_r}{V_f} = \vert  2 \frac{Z_l}{Z_l+50} - 1 \vert  = \vert  \frac{2Z_l - (Z_l+50)}{Z_l+50}\vert  = \vert \frac{Z_l-50}{Z_l+50}\vert  $$</td></tr></table>
</div>
<div  style='clear:both'></div>

<p>So we have:</p>
<div class='equation'>
  <table style='border:none;'><tr><td style='border:none;'>Eq4</td><td style='border:none;'>$$\frac{V_r}{V_f}=\vert \frac{Z_l-50}{Z_l+50}\vert $$</td></tr></table>
</div>
<div class='equation'>
  <table style='border:none;'><tr><td style='border:none;'>Eq5</td><td style='border:none;'>$$\frac{V_z}{V_a}=\frac{\vert Z_l\vert }{50} $$</td></tr></table>
</div>
<div  style='clear:both'></div>


## Step 2 - Calculating the Load Impedance
R and X can be calculated directly from the bridge voltage measurements as 

<p>The RHS of Eq4 with $Z_l = R+jX$ is </p>

<div class='equation'>
  <table style='border:none;'><tr><td style='border:none;'>$$\vert \frac{R-50+jX}{R+50+jX}\vert $$</td></tr></table>
</div>
<div  style='clear:both'></div>

<p>Squaring the modulus $\vert a+jb\vert $ gives $a^2+b^2$, so squaring top and bottom of the equation above gives</p>

<div class='equation'>
  <table style='border:none;'><tr><td style='border:none;'>Eq6</td><td style='border:none;'>$$\frac{(R-50)^2+X^2}{(R+50)^2+X^2}=\frac{R^2-100R+2500+X^2}{R^2+100R+2500+X^2}$$</td></tr></table>
</div>
<div  style='clear:both'></div>

<p>But $R^2+X^2 = \vert Z_l\vert ^2$ so </p>

<div class='equation'>
  <table style='border:none;'><tr><td style='border:none;'>Eq7</td><td style='border:none;'>$$\frac{(R-50)^2+X^2}{(R+50)^2+X^2}=\frac{\vert Z_l\vert ^2-100R+2500}{\vert Z_l\vert ^2+100R+2500}$$</td></tr></table>
</div>
<div  style='clear:both'></div>


<p>Which can be solved to give</p>

<div class='equation'>
  <table style='border:none;'><tr><td style='border:none;'>$$R = \frac{\vert Z_l\vert ^2+50^2}{100}\frac{1-(\frac{V_r}{V_f})^2}{1+(\frac{V_r}{V_f})^2}$$</td></tr></table>
</div>
<div  style='clear:both'></div>

<p>Now that we know $R$ as well as $\vert Z_l\vert $, we can use $X=\sqrt(\vert Z_l\vert ^2-R^2)$to get the complex impedance and VSWR.</p>

<p>We can rewrite these equations to use the bridge voltages directly:</p>

<div class='equation'>
  <table style='border:none;'><tr><td style='border:none;'>$$R = \frac{(50\frac{V_z}{V_a})^2+50^2}{100}  \frac{1-(\frac{V_r}{V_f})^2}{1+(\frac{V_r}{V_f})^2}$$</td></tr></table>
</div>
<div class='equation'>
  <table style='border:none;'><tr><td style='border:none;'>$$X = \pm\sqrt{(50\frac{V_z}{V_a})^2 - R^2}$$</td></tr></table>
</div>
<div  style='clear:both'></div>

