const steps = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
];
let index = 0;

const stepContents = {
  1: "This is the first Tab. It contains important information.",
  2: "Tab 2: Features description.",
  // ... Add content for other blocks
};

function highlight(id) {
  // Remove the existing highlighted elements
  document.getElementById("lb-highlight")?.remove();
  document.getElementById("lb-popover")?.remove();


  const element = document.getElementById(id);


  const elementDimension = element.getBoundingClientRect();

 
  highlightHelper(elementDimension);

  // Add the popover with navigation buttons
  popover(elementDimension, id);
}

function highlightHelper(elementDimension) {
  // Calculate the CSS position where the highlighter will be placed
  let top = elementDimension.top + window.scrollY;
  let left = elementDimension.left + window.scrollX;
  let width = elementDimension.width;
  let height = elementDimension.height;


  const ele = document.createElement("div");
  ele.id = "lb-highlight";
  ele.style = `
                position: absolute;
                top: ${top - 4}px;
                left: ${left - 4}px;
                width: ${width}px;
                height: ${height}px;
                transition: border .2s ease, opacity .2s ease;
            `;


  document.getElementById("container").appendChild(ele);


  setTimeout(() => {
    ele.style.border = "4px solid #000";
  }, 0);
}

function popover(elementDimension, id) {
 
  let bottom = elementDimension.bottom + window.scrollY;
  let left = elementDimension.left + window.scrollX;
  let right = elementDimension.right;

  // Create a new element with an ID and add style to it
  const ele = document.createElement("div");
  ele.id = "lb-popover";
  ele.style = `
                position: absolute;
                top: ${bottom + 5}px;
                left: ${(left + right) / 2 - 50}px;
                background: #fff;
                padding: 10px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            `;

  // Add the navigation buttons
  ele.appendChild(navigationButtons(id));

t
  document.getElementById("container").appendChild(ele);
}

function navigationButtons(id) {
  // Create the next button with click event listener
  const nextButton = document.createElement("button");
  nextButton.textContent = "Next";
  nextButton.addEventListener("click", function () {
  
    if (index < steps.length - 1) {
      index++;
      highlight(steps[index]);
    }
  });


  const prevButton = document.createElement("button");
  prevButton.textContent = "Previous";
  prevButton.addEventListener("click", function () {

    if (index > 0) {
      index--;
      highlight(steps[index]);
    }
  });


  const fragment = document.createDocumentFragment();
  fragment.appendChild(prevButton);
  fragment.appendChild(nextButton);

  return fragment;
}


highlight(steps[index]);
