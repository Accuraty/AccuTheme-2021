function fixMapPath(path, prefix = '.', directory = 'src/styles') {
  const nm = 'node_modules';
  const regex = /(\.\.\/)/g;

  if (path.includes(nm)) {
    return `${prefix}/${path.slice(path.indexOf(nm), -1)}`;
  }

  return `${prefix}/${directory}/${path.replace(regex, '')}`;
}

export default fixMapPath;
