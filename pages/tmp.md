---
layout: default
mathjax: true
title: "tmp"
permalink: /tmp/
---

Bridge voltage magnitudes
<table>
   <tr>
      <td>$$|V_a|=2|V_f|\frac{50}{|Z_l+50|}$$</td>
      <td>$$|V_z|=2|V_f|\frac{|Z_l|}{|Z_l+50|}$$</td>
      <td>$$|V_r| = | V_f - 2V_f \frac{Z_l}{Z_l+50}|$$</td>
   </tr>
</table>

Impedance from voltage magnitudes
<table>
   <tr>
      <td>$$\frac{|V_r|}{|V_f|}=|\frac{50-Z_l}{50+Z_l}|$$</td>
      <td>$$\frac{|V_z|}{|V_a|}=\frac{|Z_l|}{50} $$</td>
   </tr>
</table>

We want to find $Z_l=R+iX$ 

Because we already know $|Z_l|$, we can rewrite what we want to know as 

$$Z_l=R+i\sqrt{|Z_l|^2-R^2}$$

If we put this into the equation for $\frac{V_r}{V_f}$ instead of $Z_L$ we get

$$\frac{V_r}{V_f}=|\frac{50-R-i\sqrt{|Z_l|^2-R^2}}{50+R+i\sqrt{|Z_l|^2-R^2}}| $$

We now have one equation with one unknown (R). If we write $\frac{V_r}{V_f}$ as x and solve for R we get:

$$R=\frac{x^2(-2500-|Z_l|^2)+2x(2500-|Z_l|^2)-|Z_l|^2-2500}{100(x^2-1)}$$




