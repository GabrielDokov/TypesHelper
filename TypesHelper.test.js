const TypesHelper = require("./TypesHelper");
const typesHelper = new TypesHelper();

describe("TypesHelper class", () => {
  test.only("detects primitive types correctly", () => {
    expect(typesHelper.isPrimitive(42)).toBe(true);
    expect(typesHelper.isPrimitive("hello")).toBe(true);
    expect(typesHelper.isPrimitive(false)).toBe(true);
    expect(typesHelper.isPrimitive(null)).toBe(true);
    expect(typesHelper.isPrimitive(undefined)).toBe(true);
    expect(typesHelper.isPrimitive({})).toBe(false);
    expect(typesHelper.isPrimitive([])).toBe(false);
  });

  test.only("detects reference types correctly", () => {
    expect(typesHelper.isReference(42)).toBe(false);
    expect(typesHelper.isReference("hello")).toBe(false);
    expect(typesHelper.isReference(false)).toBe(false);
    expect(typesHelper.isReference(null)).toBe(false);
    expect(typesHelper.isReference(undefined)).toBe(false);
    expect(typesHelper.isReference({})).toBe(true);
    expect(typesHelper.isReference([])).toBe(true);
  });

  test.only("clones values correctly", () => {
    const obj = { a: 1 };
    const arr = [1, 2, 3];
    const clonedObj = typesHelper.cloneValue(obj);
    const clonedArr = typesHelper.cloneValue(arr);

    expect(clonedObj).not.toBe(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedArr).not.toBe(arr);
    expect(clonedArr).toEqual(arr);
  });

  test.only("compares values correctly", () => {   // TO DO
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };
    const obj3 = obj1;

    expect(typesHelper.areValuesEqual(42, 42)).toBe(true);
    expect(typesHelper.areValuesEqual("hello", "hello")).toBe(true);
    expect(typesHelper.areValuesEqual(obj1, obj2)).toBe(false);
    expect(typesHelper.areValuesEqual(obj1, obj3)).toBe(true);
  });

  test.only("detects Symbol type as primitive", () => {
    expect(typesHelper.isPrimitive(Symbol())).toBe(true);
  });

  test.only("detects Function type as reference", () => {
    expect(typesHelper.isReference(function () {})).toBe(true);
  });

  test.only("detects Date type as reference", () => {
    expect(typesHelper.isReference(new Date())).toBe(true);
  });

  test.only("clones nested objects correctly", () => {
    const nestedObj = { a: 1, b: { c: 2 } };
    const clonedNestedObj = typesHelper.cloneValue(nestedObj);

    expect(clonedNestedObj).not.toBe(nestedObj);
    expect(clonedNestedObj).toEqual(nestedObj);
    expect(clonedNestedObj.b).not.toBe(nestedObj.b);
    expect(clonedNestedObj.b).toEqual(nestedObj.b);
  });

  test.only("compares different object instances with same values as not equal", () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };

    expect(typesHelper.areValuesEqual(obj1, obj2)).toBe(false);
  });

  test.only("compares same object instance as equal", () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = obj1;

    expect(typesHelper.areValuesEqual(obj1, obj2)).toBe(true);
  });

  test.only("compares NaN values correctly", () => {
    expect(typesHelper.areValuesEqual(NaN, NaN)).toBe(true);
  });

  test.only("compares null and undefined as not equal", () => {
    expect(typesHelper.areValuesEqual(null, undefined)).toBe(false);
  });
});