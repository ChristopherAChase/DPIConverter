# DPI Converter
A simple calculator that I created to help me convert the values in a 203dpi SATO printer label to a 305dpi SATO printer label for a support issue at work.

# Background of Problem
When working with a SATO printer, the printer accepts a text file to print off. This text file has very specific escape characters that mean particular things... things like how tall and wide to make the characters, where to put a barcode, how do you want to rotate a particular item, etc.

The X and Y (or H and V) coordinates within the printing template are measured in dots. Certain printers have certain amount of dots per inch (dpi), and therefor each dot represents a certain amount of surface area on the printed label. A 203dpi printer has 8 dots per mm, and a 305dpi printer has 12 dots per mm.

I was tasked with converting an already existing label template that works on a 203dpi printer, to a label with dimensions that work on a 305dpi printer.

# Where this tool comes into play
The way I was working on it was this:
1. Find a coordinate value, or a value representing the dimensions of an object (text, barcode, etc.)
2. Go to calculator and take that value divided by the ratio between the two printers
3. Enter in that new value into the modified template

This provided me with plenty of barricades:
- Hard to look back at previous calculations in case I ran across a number I already calculated
- Didn't round for me, so I had to make the decision which way to round (lazy, I know...)
- Having to enter in a calculation for every number (there were a LOT) was very time consuming

# Benefits of this Solution
- I simply need to type in the number for the 203dpi printer template and press enter instead of type out the entire calculation
- It adds a list of previous calculations that I have done to a table
- If a calculation has been done already, it does not add a new row
- When I add a new number in, whether the calculation has been performed or not, it highlights the row where the result of the calculation now lies.
- The list of the calculations performed is in numerical order based on the number in the 203dpi label template for easy lookup.
