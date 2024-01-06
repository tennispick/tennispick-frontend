const handleDuplicateDataCheck = ({
  prevList,
  list
}: { [key:string]: Array<{[key:string]: string}> }) => {

  const prevListIds = new Set(prevList.map(item => item.value));

  list.forEach(({ id, name }) => {
    if (!prevListIds.has(id)) {
      prevList.push({
        value: id,
        label: name
      });
      prevListIds.add(id);
    }
  });
}

export {
  handleDuplicateDataCheck
}