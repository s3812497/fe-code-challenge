// https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API

export function dragstartHandler(event: DragEvent) {
  const id = (event.target as HTMLElement | null)?.id;
  if (!id) {
    console.error("missing ID on draggable element", event.target);
  } else {
    // Add the target element's id to the data transfer object
    event.dataTransfer!.setData("application/my-app", id);
    event.dataTransfer!.effectAllowed = "move";
    console.log("user dragged an image");
  }
}

export function dragoverHandler(event: DragEvent) {
  event.preventDefault();
  event.dataTransfer!.dropEffect = "move";
}

export function dropHandler(event: DragEvent) {
  event.preventDefault();
  // Get the id of the target and add the moved element to the target's DOM
  const draggableElementId = event.dataTransfer!.getData("application/my-app");

  const dropTarget = event.target as HTMLElement;

  const draggableElement = document.getElementById(
    draggableElementId
  ) as HTMLElement;

  if (!dropTarget.querySelector(`#${draggableElementId}`)) {
    dropTarget.appendChild(draggableElement);
  }

  const top = event.clientY - draggableElement.offsetHeight / 2;
  const left = event.clientX - draggableElement.offsetWidth / 2;

  draggableElement.style.position = "fixed";
  draggableElement.style.top = top + "px";
  draggableElement.style.left = left + "px";

  console.log("user placed an image");
}
