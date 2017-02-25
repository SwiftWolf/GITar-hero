var context = new AudioContext();

oscillator1 = context.createOscillator(); // Create sound source 1
oscillator2 = context.createOscillator(); // Create sound source 2
gainNode2 = context.createGain(); // Create gain node 2

oscillator1.type = "sine"; // Sine wave
oscillator1.frequency.value = 200; // Default frequency in hertz 
oscillator1.connect(context.destination); // Connect sound source 1 to output
oscillator1.start(0); // Play sound source 1 instantly 
		
oscillator2.type = "square"; // Square wave
oscillator2.frequency.value = 100; // Frequency in hertz 
oscillator2.connect(gainNode2); // Connect sound source 2 to gain node 2
gainNode2.connect(context.destination); // Connect gain node 2 to output
gainNode2.gain.value = 0.3; // Set gain node 2 to 30 percent
oscillator2.start(2); // Play sound source 2 after two seconds

oscillator1.stop(3)
oscillator2.stop(4)