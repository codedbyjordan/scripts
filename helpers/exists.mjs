const exists = async (fileOrDir) => {
  try {
    await quiet($`ls fileOrDir`);
    return true;
  } catch(e) {
    if(e.stderr.includes("No such file or directory")) {
      return false;
    }
  }
}

export default exists;