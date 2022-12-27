var s = "";
for (var i = 0; i < 10; i++) {
  for (var j = 0; j <= i; j++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);

console.log("  ");

/* Latihan lain */ console.log("Latihan lain");

console.log("  ");

var s = "";
for (var i = 10; i > 0; i--) {
  for (var j = 0; j < i; j++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);

console.log("  ");

/* Latihan lain */ console.log("Latihan lain");

console.log("  ");

var s = "";

for (var g = 0; g <= 20; g++) {
  if (g < 10) {
    for (var c = 0; c <= g; c++) {
      s += "*";
    }
  } else {
    for (var x = 19; x > g; x--) {
      s += "*";
    }
  }

  s += "\n";
}
console.log(s);

console.log("  ");

/* Latihan lain */ console.log("Latihan lain");

console.log("  ");

var s = "";

for (i = 1; i <= 10; i++) {
  for (j = 1; j <= 10; j++) {
    if (j + 1 <= i) {
      s += " ";
    } else {
      s += "*";
    }
  }
  s += "\n";
}
console.log(s);

console.log("  ");

/* Latihan lain */ console.log("Latihan lain");

console.log("  ");

var s = "";

for (i = 1; i <= 10; i++) {
  for (j = 1; j <= 10; j++) {
    if (i + 1 <= j) {
      s += " ";
    } else {
      s += "*";
    }
  }
  s += "\n";
}
console.log(s);
