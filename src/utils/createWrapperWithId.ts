function createWrapperWithId(htmlTag: keyof JSX.IntrinsicElements, id: string): HTMLElement {
  const wrapper = document.createElement(htmlTag);
  wrapper.setAttribute('id', id);
  return wrapper;
}

export { createWrapperWithId };
