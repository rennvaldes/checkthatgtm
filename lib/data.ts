import contentData from "./content.json";

export namespace Data {
  const data = contentData;

  export function hero() {
    return data.hero;
  }

  export function features() {
    return data.features;
  }

  export function feature(index: number) {
    return data.features[index];
  }

  export function about() {
    return data.about;
  }

  export function contact() {
    return data.contact;
  }

  export function platformFeatures() {
    return data.platformFeatures;
  }

  export function people() {
    return data.people;
  }

  export function process() {
    return data.process;
  }

  export function comparison() {
    return data.comparison;
  }

  export function fit() {
    return data.fit;
  }

  export function pricing() {
    return data.pricing;
  }

  export function all() {
    return data;
  }
}
