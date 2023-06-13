const shuffle = (array) => {
  return array.sort(() => (Math.random() > .5) ? 1 : -1);
}

export default shuffle