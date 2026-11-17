import { describe, beforeEach, test, expect } from "vitest";
import TripManager from "../tripManager.ts";
import City from "../city.ts";
import Accommodation from "../accommodation.ts";

describe("TripManager", () => {
  let manager: TripManager;
  beforeEach(() => {
    manager = new TripManager();
  });

  test("get cities", () => {
    expect(manager.getAllCities()).toEqual([]);
  });

  test("find city by name", () => {
    expect(() => {
      manager.addCity(new City("nombre","pais",new Date("2023-05-01"),
      new Date("2023-05-04"),"nota", new Accommodation("hotel",100)));
      return manager.findCityByName("nombre");
    }).toEqual(new City("nombre","pais",new Date("2023-05-01"),
    new Date("2023-05-04"),"nota", new Accommodation("hotel",100)));
  });

  test("find city by name returns null if not found", () => {
    expect(manager.findCityByName("NonExistentCity")).toBeNull();
  });
});
