window.onload = function () {
  document.body.style.margin = "0";
  document.body.style.backgroundColor = "black";
  document.body.style.display = "flex";
  document.body.style.justifyContent = "center";
  document.body.style.alignItems = "center";
  document.body.style.height = "100vh";
  document.body.style.fontFamily = "Arial, sans-serif";

  const container = document.createElement("div");
  container.style.width = "100%";
  container.style.maxWidth = "320px";
  container.style.padding = "10px";
  container.style.boxSizing = "border-box";

  const display = document.createElement("input");
  display.type = "text";
  display.disabled = true;
  display.value = "0";
  display.style.width = "100%";
  display.style.height = "80px";
  display.style.backgroundColor = "black";
  display.style.color = "white";
  display.style.border = "none";
  display.style.fontSize = "48px";
  display.style.textAlign = "right";
  display.style.paddingRight = "10px";
  display.style.boxSizing = "border-box";
  container.appendChild(display);

  const buttons = [
    ["AC", "+/-", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="]
  ];

  const grid = document.createElement("div");
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = "repeat(4, 1fr)";
  grid.style.gap = "10px";
  grid.style.marginTop = "20px";

  let expression = "";

  function updateDisplay() {
    display.value = expression || "0";
  }

  buttons.forEach((row, rowIndex) => {
    row.forEach(text => {
      const btn = document.createElement("button");
      btn.textContent = text;
      btn.style.height = "60px";
      btn.style.fontSize = "24px";
      btn.style.borderRadius = "50%";
      btn.style.border = "none";
      btn.style.cursor = "pointer";
      btn.style.color = "white";

      if (text === "AC" || text === "+/-" || text === "%") {
        btn.style.backgroundColor = "#a5a5a5";
        btn.style.color = "black";
      } else if (["/", "*", "-", "+", "="].includes(text)) {
        btn.style.backgroundColor = "#ff9500";
      } else {
        btn.style.backgroundColor = "#333333";
      }

      if (text === "0") {
        btn.style.gridColumn = "span 2";
        btn.style.borderRadius = "30px";
        btn.style.textAlign = "left";
        btn.style.paddingLeft = "24px";
      }

      btn.addEventListener("click", () => {
        if (text === "AC") {
          expression = "";
        } else if (text === "=") {
          try {
            expression = eval(expression).toString();
          } catch {
            expression = "Помилка";
          }
        } else if (text === "+/-") {
          if (expression) {
            if (expression.startsWith("-")) {
              expression = expression.slice(1);
            } else {
              expression = "-" + expression;
            }
          }
        } else if (text === "%") {
          try {
            expression = (eval(expression) / 100).toString();
          } catch {
            expression = "Помилка";
          }
        } else {
          expression += text;
        }

        updateDisplay();
      });

      grid.appendChild(btn);
    });

    if (rowIndex === 4) {
      const empty = document.createElement("div");
      empty.style.gridColumn = "span 1";
      grid.appendChild(empty);
    }
  });

  container.appendChild(grid);
  document.body.appendChild(container);
};
