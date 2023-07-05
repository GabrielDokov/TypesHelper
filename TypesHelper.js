
class TypesHelper {
  constructor() {}

  isPrimitive(value) {
    if (
      typeof value === "number" ||
      typeof value === "string" ||
      value === false ||
      value === null ||
      value === undefined ||
      typeof value === "symbol"
    ) {
      return true;
    }
    if (typeof value === "object") {
      return false;
    }
  }

  isReference(value) {
    if (
      typeof value === "number" ||
      typeof value === "string" ||
      value === false ||
      value === null ||
      value === undefined
    ) {
      return false;
    }
    if (typeof value === "object" || typeof value === "function") {
      return true;
    }

    if (value instanceof Date) {
      return true;
    }
  }

  cloneValue(input) {
    if (Array.isArray(input)) {
      return [...input];
    }

    if (typeof input === "object") {
      return { ...input };
    }

    let obj = {};

    for (let keys in input) {
      obj[keys] = this.cloneValue(input[keys]); // ASK IOSIF
    }
    return obj;
  }

  areValuesEqual(x, y) {
    if (Number.isNaN(x) && Number.isNaN(y)) {
      return true;
    }

    return x === y;
  }
}

module.exports = TypesHelper;
