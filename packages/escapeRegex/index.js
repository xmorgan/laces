export default string => string.replace(/[-[\]/{}()*+?.\\^$|]/g, match => `\\${match}`);
