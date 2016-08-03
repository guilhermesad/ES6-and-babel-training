const specialSum = ({base1, base2, ...rest}) => {
  return base1 ** 2 + base2 ** 2 + sumObj(rest);
}
