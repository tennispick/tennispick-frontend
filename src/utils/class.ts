export const removeClass = (target: Element, className: string) => {

  const targetNodeList = target.childNodes;
  const targetElementArrayList = Array.prototype.slice.call(targetNodeList);

  targetElementArrayList.forEach(element => {
    if (element.classList.contains(className)) {
      console.log(element);
      console.log(element.classList)
      element.classList.remove(className);
    }
  });
}
