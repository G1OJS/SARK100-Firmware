---
layout: default
mathjax: true
title: "Geometric approach to Load Impedance from |Z| and |Gamma|"
permalink: /GeometricRouteToLoadImpedance/
---

# Introduction
Calculating the complex load impedance from $\vert Z_L \vert$ and $\vert \Gamma \vert$ requires quite a bit of algebraic manipulation if done from scratch. The accademic level required is roughly that at which people learn about quadratic equations, but it is easy to drop a minus sign or lose track of the route to the solution. This page presents a graphical / geometric approach, which might be easier to follow.

# The Geometry

Firstly, we set up the problem by plotting an unknown load impedance $Z_L$ on the complex impedance plane, see diagram below. We can easily add a circle that captures all impedance values that have the same magnitude $\vert Z \vert$ as our unknown load. This circle crosses the real (resistance) axis where $R = \vert Z_L \vert$, although we don't need to remember this value for the steps that follow.

<img src='https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/GeometricRouteFig1.PNG'>

Next, let's add a circle capturing all points that have the same magnitude of **reflection coefficient**,  $\vert \Gamma \vert$, as our load. This circle clearly cuts through the point representing our load, but what other points? How do we find the unique circle that we need? The answer is quite straightforward; we know that it must cross the resistance axis at the place where a purely resistive load results in the the same magnitude of reflection coefficient, or same VSWR, as our load. There are two places where this occurs: $R = SZ_0$ and $R = Z_0 / S$ if we write VSWR as S. These resistances are in inverse (reciprocal) proportion to each-other.

If we now think in terms of normalised impedances (or $Z_0$ = 1 Ohm) we recall that:

$$\vert \Gamma \vert = \frac{Z_L-1}{Z_L+1}$$ and $$S = \frac{1+\vert \Gamma \vert}{1-\vert \Gamma \vert}$$

So, we can add a circle cutting through our load impedance and the two resistance values with the same VSWR. Let's call these resistance values $R_a$ and $R_b$, and note that in normalised units $R_a = \frac{1}{S}$ and, simply, $R_b = S$. Using the equation for S gives these two resistances in terms of our measured  $\vert \Gamma \vert$:

$$R_a = \frac{1-\vert \Gamma \vert}{1+\vert \Gamma \vert}$$ and $$R_b=\frac{1+\vert \Gamma \vert}{1-\vert \Gamma \vert}$$ 

where we've got the reciprocal value for $R_a$ by simply flipping the usual fraction for VSWR upside down.

<img src='https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/GeometricRouteFig2.PNG'>

Now, we know the distance from the origin to our load impedance is $\vert Z_L \vert$, and we also now know that the distance from the origin to the centre of the $\vert \Gamma \vert$ circle is $\frac{R_a+R_b}{2}$, and the distance from there to the load impedance is simply the radius of the $\vert \Gamma \vert$ circle. So we have the lengths of all three sides of a triangle:

<img src='https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/GeometricRouteFig3.PNG'>


<img src='https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/GeometricRouteFig4.PNG'>
