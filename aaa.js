c = color(255, 204, 0);  // Define color 'c'
fill(c);  // Use color variable 'c' as fill color
rect(15, 20, 35, 60);  // Draw left rectangle

redValue = red(c);  // Get red in 'c'
println(redValue);  // Print "255.0"
fill(redValue, 0, 0);  // Use 'redValue' in new fill
rect(50, 20, 35, 60);