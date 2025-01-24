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

Now, we know the distance from the origin to our load impedance is $\vert Z_L \vert$, and we also now know that the distance from the origin to the centre of the $\vert \Gamma \vert$ circle is $\frac{R_a+R_b}{2}$, and the distance from there to the load impedance is simply the radius of the $\vert \Gamma \vert$ circle, which is $\frac{R_b-R_a}{2}$. So we have the lengths of all three sides of a triangle:

<img src='https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/GeometricRouteFig3.PNG'>

# The Triangle
Now let's forget the circles and concentrate on the triangle. The lengths of the three sides are:
|   |   |   |
|---|---|---|
|$\vert Z_L \vert$| $A=\frac{R_b+R_a}{2}$ |$B=\frac{R_b-R_a}{2}$ |

<img src='https://g1ojs.github.io/G1OJS-MR300-SARK100-Firmware/assets/img/GeometricRouteFig4.PNG'>

Now, the area of this triangle is related to the reactance of the load, because $X_L$ is simply the height of the triangle using side $A$ as the base: $area=\frac{1}{2}AX_L$.

We can find also find the area of this triangle from the three known side lengths using [Heron's formula](https://en.wikipedia.org/wiki/Heron%27s_formula). One way to write this formula is:

$$area = \frac{1}{4}\sqrt{(a+b+c)(b+c-a)(a+c-b)(a+b-c)}$$

Whare a,b and c are the three lengths of the triangle's sides. We can use this together with our equation for area using $X_L$ to write down an expression for $X_L^2$. 

Let's substitute our known lengths for a,b,c, and get rid of the square root by squaring both expressions for area above to get:

$$area^2 = \frac{1}{16}(A+B+\vert Z_L \vert)(B-A+\vert Z_L \vert)(A-B+\vert Z_L \vert)(A+B-\vert Z_L \vert) = \frac{1}{4}A^2X_L^2$$

so 

$$X_L^2 = \frac{1}{4A^2}(A+B+\vert Z_L \vert)(B-A+\vert Z_L \vert)(A-B+\vert Z_L \vert)(A+B-\vert Z_L \vert) $$

# Final Steps
Look back to the diagram showing the triangle and the circles. We can easily see that $A+B$ is $R_b$, and $A-B$ is $R_a$ !

So, can write the equation for $X_L^2$ above using the expressions we had above giving $R_a$ and $R_b$ in terms of $\vert \Gamma \vert$:

$$X_L^2 = \frac{1}{4A^2}(\frac{1+\vert \Gamma \vert}{1-\vert \Gamma \vert}+\vert Z_L \vert)(\frac{\vert \Gamma \vert-1}{1+\vert \Gamma \vert}+\vert Z_L \vert)(\frac{1-\vert \Gamma \vert}{1+\vert \Gamma \vert}+\vert Z_L \vert)(\frac{1+\vert \Gamma \vert}{1-\vert \Gamma \vert}-\vert Z_L \vert) $$

This equation gives $X_L^2$ in terms of only $\vert Z_L \vert$ and $\vert \Gamma \vert$, and rearranges nicely to:







