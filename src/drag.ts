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
  const data = event.dataTransfer!.getData("application/my-app");

  (event.target as HTMLElement).appendChild(
    document.getElementById(data) as HTMLElement
  );
  console.log("user placed an image");
}
