import { describe, beforeEach, test, expect } from "vitest";
import Accommodation from "../accommodation.ts";

describe("Accommodation", () => {
  let accommodation: Accommodation;
  beforeEach(() => {
    accommodation = new Accommodation("hotel",100);
    void accommodation;
  });

  describe("Accommodation name", () => {

    test("should set name correctly", () => {
      expect(accommodation.getName()).toBe("hotel");
    });

    test("should not set empty name", () => {
      expect(() => {
        accommodation.setName("");
      }).toThrow("El nombre no puede ser vacío");
    });

    test("should not set non string name", () => {
      expect(() => {
        accommodation.setName(accommodation);
      }).toThrow("El nombre no puede ser vacío");
    });



    
  });

  describe("Accommodation cost", () => {
    
    test("should set cost correctly", () => {
      expect(accommodation.getCost()).toBe(100);
    });

    test("should not set less than 0 cost", () => {
      expect(() => {
        accommodation.setCost(-1);
      }).toThrow("costo debe ser mayor a 0");
    });

    test("should not set non number cost", () => {
      expect(() => {
        accommodation.setCost("blebleble");
      }).toThrow("costo debe ser mayor a 0");
    });



  });

});
